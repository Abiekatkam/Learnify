import React from "react";

const MediumHeading = ({ text }) => {
  return (
    <p className="w-fit uppercase font-mono lg:text-5xl text-4xl text-balance font-semibold text-slate-700">
      {text}
    </p>
  );
};

export default MediumHeading;
