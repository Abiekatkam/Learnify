import CourseCard from "@/components/cards/CourseCard";
import React from "react";

const CourseRecentList = () => {
  return (
    <div className="w-full h-fit min-h-[400px] flex items-start justify-start gap-6 flex-wrap px-8 lg:px-0">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  );
};

export default CourseRecentList;
