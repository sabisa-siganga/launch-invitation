"use client";

import Image from "next/image";
import "./landingPage.scss";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.querySelector("html")?.classList.add("home");

    return () => {
      document.querySelector("html")?.classList.remove("home");
    };
  }, []);

  return (
    <div className="landing-page-cont">
      <div className="background-container">
        <Image
          src="/assets/book-bg.svg"
          width={400}
          height={300}
          alt="books-bg"
        />
      </div>

      <div className="text-container">
        <div className="opening-text">You are invited to the</div>
        <h1 className="launcher">Prof. Mdwaba&apos;s Book Launch</h1>
        <p className=" paragraph-style">
          We are thrilled to invite you to the exclusive launch of Prof. Mthunzi
          Mdwaba&apos;s latest book, &quot;Demystifying the jewel called the
          ILO: A Labour of Love,&quot; an insightful exploration into what the
          ILO is about and what makes it one of the most important institutions
          in the world.
        </p>
        <p className="paragraph-style">
          Join us for an evening of engaging discussion, a reading by Prof.
          Mdwaba, and a chance to connect with like-minded individuals over
          light refreshments.
        </p>
        <p className="paragraph-style">
          Please RSVP by 04th Sep 2024 to ensure your spot at this special
          event.
        </p>

        <div className="event-details">
          {" "}
          <span>Date:</span> Wed, 11 Sep 2024 | <span>Venue:</span> Hotel Sky,
          Sandton
        </div>
        <div className="event-details">
          {" "}
          <span>Time:</span> 16:30 for 17:00 PM - 21:00 PM
        </div>
        <div className="event-details">
          {" "}
          <span>Dress Code:</span> Casual
        </div>

        <div className="landing-page-links">
          <Link href="/rsvpForm" passHref>
            Continue to RSVP
          </Link>
          <Link href="/programme" passHref>
            Programme of the day
          </Link>
        </div>
      </div>
    </div>
  );
}
