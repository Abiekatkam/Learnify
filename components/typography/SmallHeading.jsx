import React from "react";

const SmallHeading = ({ text }) => {
  return (
    <p className="w-fit uppercase font-mono lg:text-3xl text-2xl text-balance font-semibold text-slate-700">
      {text}
    </p>
  );
};

export default SmallHeading;
