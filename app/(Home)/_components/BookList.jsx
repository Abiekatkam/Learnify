"use client";
import SmallHeading from "@/components/typography/SmallHeading";
import Link from "next/link";
import React, { useState } from "react";

const BookList = () => {
  const [selectedCourseTab, setSelectedCourseTab] = useState("RECENT");

  const handleTabClick = (e) => {
    setSelectedCourseTab(e.target.name);
  };
  return (
    <div className="w-full h-fit flex flex-col items-center gap-2 px-4">
      <SmallHeading text="explore Learnify books" />
      <p className="lg:w-[820px] text-center text-pretty text-lg  text-slate-600">
        Explore our books and find the one that fits your needs.
      </p>
      {/* tab list */}
      <div className="w-full h-[30px] flex items-center justify-center lg:gap-8 gap-4 my-4">
        <button
          className={`lg:text-lg text-md border-none outline-none uppercase bg-transparent ${
            selectedCourseTab == "RECENT"
              ? "text-fuchsia-500"
              : "text-slate-500 hover:text-slate-800"
          }  font-mono font-semibold transition-all ease-in duration-200`}
          name="RECENT"
          onClick={handleTabClick}
        >
          most recent
        </button>
        <span className="w-[0.5px] -skew-x-12 h-full bg-slate-600" />
        <button
          className={`lg:text-lg text-md border-none outline-none uppercase bg-transparent ${
            selectedCourseTab == "POPULAR"
              ? "text-fuchsia-500"
              : "text-slate-500 hover:text-slate-800 "
          } font-mono font-semibold transition-all ease-in duration-200`}
          name="POPULAR"
          onClick={handleTabClick}
        >
          most popular
        </button>
        <span className="w-[0.5px] -skew-x-12 h-full bg-slate-600" />
        <button
          className={`lg:text-lg text-md border-none outline-none uppercase bg-transparent ${
            selectedCourseTab == "RATED"
              ? "text-fuchsia-500"
              : "text-slate-500 hover:text-slate-800"
          } font-mono font-semibold transition-all ease-in duration-200`}
          name="RATED"
          onClick={handleTabClick}
        >
          highest rated
        </button>
      </div>

      {/* tab content */}

      <Link
        href={"/"}
        className="text-fuchsia-700 hover:text-fuchsia-500 font-semibold uppercase text-md my-2"
      >
        View all books
      </Link>
    </div>
  );
};

export default BookList;
