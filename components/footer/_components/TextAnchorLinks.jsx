import Link from "next/link";
import React from "react";

const TextAnchorLinks = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="w-full block text-md capitalize hover:text-fuchsia-500 transition-all ease-out duration-200 text-slate-200 font-semibold mb-2"
    >
      {text}
    </Link>
  );
};

export default TextAnchorLinks;
