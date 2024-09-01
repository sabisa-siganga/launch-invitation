import Image from "next/image";
import "./Programme.scss";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programme",
};

const programme = [
  "17:00 - Welcome and Introduction",
  "17:15 - Formal Address",
  "19:15 - Q&A Session",
  "19:45 - Closing Remarks and Thank You",
  "20:00 - Social Hour",
];

export default function Programme() {
  return (
    <div className="programme-image-cont">
      <div className="background-container">
        <Image
          src="/assets/book-bg.svg"
          width={400}
          height={300}
          alt="books-bg"
        />
      </div>
      <div className="programme-text-container">
        <div className="programme-title">Programme of the day</div>
        <div className="list-container">
          <ul className="list">
            {programme.map((item, index) => {
              return (
                <li key={index} className="list-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="programme-text">
          <p>
            Delicious food and beverages will be provided throughout the event
            to keep you energized and refreshed
          </p>
        </div>

        <div className="back-link">
          <Link href="/rsvpForm">Back to Form</Link>
        </div>
      </div>
    </div>
  );
}
