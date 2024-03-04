import React from "react";

const NavMenuDropdown = ({
  text,
  isEventClick,
  onMouseLeaveEvent,
  onMouseEnterEvent,
  isHovered,
  onClickEvent,
}) => {
  return (
    <>
      <div
        className="lg:w-fit w-full lg:h-full h-fit flex items-center justify-between px-4 gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer group"
        onMouseEnter={isEventClick ? undefined : onMouseEnterEvent}
        onMouseLeave={isEventClick ? undefined : onMouseLeaveEvent}
        onClick={isEventClick ? onClickEvent : undefined}
      >
        <p
          className={`group-hover:text-fuchsia-500 transition-all lg:text-lg text-xl ease-in-out duration-200 ${
            isHovered && "text-fuchsia-500"
          }`}
        >
          {text}
        </p>
        <span
          className={`lg:group-hover:-rotate-180 group-hover:text-fuchsia-500 transition-all ease-in-out duration-200 w-5 h-5 ${
            isHovered && "-rotate-180 text-fuchsia-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </>
  );
};

export default NavMenuDropdown;
