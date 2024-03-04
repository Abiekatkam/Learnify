import React from "react";
import NavProfileItem from "./NavProfileItem";

const NavProfile = () => {
  return (
    <div className="absolute top-[70px] z-20 right-4 w-[230px] h-fit min-h-[250px] bg-white py-3 p-2 rounded-md shadow-md border border-slate-400 hidden lg:flex flex-col gap-2">
      <NavProfileItem image="library" text="My Library" link="/" />
      <NavProfileItem image="pen-write" text="New Article" link="/" />
      <NavProfileItem image="folder" text="My Articles" link="/" />
      <NavProfileItem image="dashboard" text="My Dashboard" link="/" />
      <NavProfileItem image="profile" text="My Profile" link="/" />
      <NavProfileItem image="setting" text="Setting" link="/" />
      <NavProfileItem image="logout" text="Sign out" link="/" />
    </div>
  );
};

export default NavProfile;
