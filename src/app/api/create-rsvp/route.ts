import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { fullname, email, attending, dietaryRequirements } =
      await req.json();

    const airtableResponse = await axios.post(
      "https://api.airtable.com/v0/appiNoTkS76J1qan2/rsvps",

      {
        records: [
          {
            fields: {
              "Full name": fullname,
              "Email address": email,
              Attending: attending,
              "Dietary requirements": dietaryRequirements,
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(
      { success: true, data: airtableResponse.data },
      { status: 200 }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: error.response?.status || 500 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "An unexpected error occurred" },
        { status: 500 }
      );
    }
  }
}
