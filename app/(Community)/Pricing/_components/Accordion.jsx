"use client";
import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = item.id === activeIndex ? "active" : "hidden";

    return (
      <div
        key={index}
        className="flex flex-col items-start gap-2 py-3 w-full border-t-2 border-slate-400 text-start"
      >
        <div
          className="w-full flex flex-row items-start justify-between"
          onClick={() => onTitleClick(item.id)}
        >
          <h1 className="text-xl font-semibold text-slate-600">{item.title}</h1>
          <i className="dropdown icon"></i>
        </div>
        <div className={`text-md text-start px-2 ${active}`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full h-fit flex flex-col items-start gap-0">
      {renderedItems}
    </div>
  );
};

export default Accordion;
