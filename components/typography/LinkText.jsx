import Link from "next/link";
import React from "react";

const LinkText = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="font-semibold text-fuchsia-600 hover:underline hover:text-fuchsia-500 transition-all ease-in"
    >
      {text}
    </Link>
  );
};

export default LinkText;
