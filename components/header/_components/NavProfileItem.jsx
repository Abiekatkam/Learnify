import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavProfileItem = ({ image, text, link }) => {
  return (
    <Link href={link} className="group w-full h-[35px]">
      <div className="w-full h-full rounded-md flex items-center gap-3 bg-slate-100 group-hover:bg-fuchsia-100 cursor-pointer p-1 pl-2">
        <Image src={`/icons/${image}.svg`} alt={image} width={20} height={20} />

        <p className="text-slate-500 group-hover:text-fuchsia-700">{text}</p>
      </div>
    </Link>
  );
};

export default NavProfileItem;
