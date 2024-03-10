import React from "react";

const CourseCard = () => {
  return (
    <div className="lg:w-[380px] w-full h-fit lg:h-[370px] rounded-md cursor-pointer hover:scale-105 border transition-all ease-in-out duration-200 border-slate-500 hover:border-fuchsia-500 hover:shadow-xl p-1 bg-slate-100 flex flex-col items-start gap-2">
      <div className="w-full h-[55%] object-contain rounded-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDGUQGBpw9AotvTgI-RqEcmDBQl4u6XcgvCoh5mXcg9jU52aYShkEvamAmZvnCMXF85Q&usqp=CAU"
          alt="alt"
          className="w-full h-full rounded-md"
        />
      </div>
      <span>CourseCard</span>
    </div>
  );
};

export default CourseCard;
