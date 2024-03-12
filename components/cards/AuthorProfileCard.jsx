import React from "react";
import AnchorIcon from "../typography/AnchorIcon";

const AuthorProfileCard = () => {
  return (
    <div className="lg:w-[240px] w-full h-[345px] lg:h-[300px] relative group flex items-start justify-center">
      <div className="absolute z-10  w-[80%] h-[80%] bg-slate-100  rounded-lg object-contain overflow-hidden object-center grayscale-0 transition-all ease-in-out duration-200 group-hover:grayscale-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1681681082147-1156b531577d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-[45%] absolute bottom-0 left-0 rounded-lg bg-slate-200 flex items-center justify-end">
        <div className="mt-auto w-full h-fit flex flex-col items-center justify-center gap-0 p-2 pb-3">
          <h1 className="text-lg font-mono font-semibold">Laila Majnu</h1>
          <div className="flex flex-row items-start gap-2 mt-1">
            <AnchorIcon type="LINKEDIN" url="/" />
            <AnchorIcon type="TWITTER" url="/" />
            <AnchorIcon type="GITHUB" url="/" />
            <AnchorIcon type="INSTAGRAM" url="/" />
            <AnchorIcon type="LINK" url="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
