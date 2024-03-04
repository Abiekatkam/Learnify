import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoursePromoCard = ({ courseUrl = "/" }) => {
  return (
    <Link
      href={courseUrl}
      className="w-full lg:h-full h-fit flex lg:flex-row flex-col items-start lg:items-center lg:justify-between gap-2"
    >
      <div className="lg:w-[50%] h-fit object-contain rounded-md">
        <Image
          src="/images/course1.webp"
          alt=""
          width={500}
          height={500}
          className="rounded-md lg:block hidden"
        />
        <Image
          src="/images/course1.webp"
          alt=""
          width={300}
          height={500}
          className="rounded-md block lg:hidden"
        />
      </div>
      <div className="lg:w-[46%] h-fit flex flex-col justify-start items-start gap-2">
        <h1 className="text-lg font-semibold leading-5 text-balance">
          The newline Guide to Building Your First GraphQL Server with Node and
          TypeScript
        </h1>
        <p className="text-md text-balance leading-5">
          In this course, we'll show you how to create your first GraphQL server
          with Node.js and TypeScript
        </p>
        <button className="p-2 font-semibold border border-slate-500 rounded-md lg:ml-auto">
          Enroll now
        </button>
      </div>
    </Link>
  );
};

export default CoursePromoCard;
