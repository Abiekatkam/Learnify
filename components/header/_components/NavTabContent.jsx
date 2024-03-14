import BookPromoCard from "@/components/cards/BookPromoCard";
import CoursePromoCard from "@/components/cards/CoursePromoCard";
import Link from "next/link";
import React from "react";

const NavTabContent = ({
  isEventClick,
  onMouseLeaveEvent,
  onMouseEnterEvent,
  title,
  description,
  linkTitle,
  linkArray,
  linkUrl,
}) => {
  return (
    <div
      className="w-full lg:h-full h-fit px-4 lg:px-8 lg:py-2 flex items-start lg:gap-2 gap-6 lg:flex-row flex-col border-b border-slate-500 lg:border-b-0 pb-2 bg-white"
      onMouseEnter={!isEventClick ? onMouseEnterEvent : undefined}
      onMouseLeave={!isEventClick ? onMouseLeaveEvent : undefined}
    >
      <div className="lg:w-[50%] w-full h-fit lg:h-full flex lg:flex-row flex-col items-start lg:gap-2 gap-3">
        <div className="lg:w-[50%] h-full flex flex-col items-start gap-3">
          {!isEventClick && (
            <h1 className="text-3xl font-mono font-semibold text-fuchsia-600">
              {title}
            </h1>
          )}
          <p className="text-balance text-md">{description}</p>

          <Link
            href={linkUrl}
            className="lg:mt-auto lg:mb-4 p-2 px-4 font-semibold text-white bg-fuchsia-600 rounded-lg border hover:border-fuchsia-600 hover:bg-white hover:text-fuchsia-600 active:scale-90 transition-all ease-in-out duration-200"
          >
            {linkTitle}
          </Link>
        </div>
        <div className="lg:w-[50%] w-full lg:h-full h-fit flex flex-col items-start lg:px-3 justify-center gap-2">
          {linkArray.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="w-full text-md font-semibold hover:text-fuchsia-600 transition-all ease-in duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {title != "Community" && (
        <div className="lg:w-[50%] lg:h-full w-full h-fit">
          {title == "Learn" ? <CoursePromoCard /> : <BookPromoCard />}
        </div>
      )}
    </div>
  );
};

export default NavTabContent;
