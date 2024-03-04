import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookPromoCard = ({ courseUrl = "/" }) => {
  return (
    <Link
      href={courseUrl}
      className="w-full lg:h-full h-fit flex lg:flex-row flex-col items-start lg:items-center gap-2 lg:gap-8"
    >
      <div className="lg:w-fit h-fit object-contain rounded-md">
        <Image
          src="/images/book1.webp"
          alt=""
          width={210}
          height={240}
          className="rounded-md lg:block hidden"
        />
        <Image
          src="/images/book1.webp"
          alt=""
          width={200}
          height={400}
          className="rounded-md block lg:hidden"
        />
      </div>
      <div className="lg:w-[46%] h-fit flex flex-col justify-start items-start gap-2">
        <h1 className="text-lg font-semibold leading-5 text-balance">
          Amelia Wattenberger
        </h1>
        <p className="text-sm text-balance">AUTHOR OF FULLSTACK D3</p>

        <p className="text-md text-balance leading-5">
          "Writing Fullstack D3 was a thoroughly enjoyable, fun process. The
          writing was over before I knew it, and we've sold way more copies than
          I expected! Plus, the compliments from my peers have been really
          amazing."
        </p>
      </div>
    </Link>
  );
};

export default BookPromoCard;
