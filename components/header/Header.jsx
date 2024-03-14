"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavMenuDropdown from "./_components/NavMenuDropdown";
import Image from "next/image";
import NavProfile from "./_components/NavProfile";
import NavTabContent from "./_components/NavTabContent";
import {
  CommunityNavTabList,
  LearnNavTabList,
  TeachNavTabList,
} from "@/utils/NavLinkData";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [profileOpened, setProfileOpened] = useState(false);
  const [isLearnTabOpened, setIsLearnTabOpened] = useState(false);
  const [isTeachTabOpened, setIsTeachTabOpened] = useState(false);
  const [isCommunityTabOpened, setIsCommunityTabOpened] = useState(false);

  // hamburger menu event listener
  const handleHamburgerOption = () => {
    setMenuOpened(!menuOpened);
  };
  // profile menu event listener
  const handleProfileDropdown = () => {
    setProfileOpened(!profileOpened);
  };

  // learn tab event listener
  const eventMouseEnterLearn = () => {
    setIsLearnTabOpened(true);
  };
  const eventMouseLeaveLearn = () => {
    setIsLearnTabOpened(false);
  };
  const handleLearnTabClick = () => {
    setIsLearnTabOpened(!isLearnTabOpened);
  };

  // teach tab event listener
  const eventMouseEnterTeach = () => {
    setIsTeachTabOpened(true);
  };
  const eventMouseLeaveTeach = () => {
    setIsTeachTabOpened(false);
  };
  const handleTeachTabClick = () => {
    setIsTeachTabOpened(!isTeachTabOpened);
  };

  // community tab event listener
  const eventMouseEnterCommunity = () => {
    setIsCommunityTabOpened(true);
  };
  const eventMouseLeaveCommunity = () => {
    setIsCommunityTabOpened(false);
  };
  const handleCommunityTabClick = () => {
    setIsCommunityTabOpened(!isCommunityTabOpened);
  };

  return (
    <header className="lg:sticky fixed lg:top-0 z-20 w-full h-fit flex flex-col items-start bg-white">
      <div className=" w-full h-fit lg:h-[75px] flex items-center justify-between border-b border-b-slate-500 lg:px-8 px-4 py-3 lg:py-0">
        <Link href="/">
          <h1 className="text-4xl font-bold font-DancingScript hover:text-fuchsia-500 hover:drop-shadow-lg transition-all ease-out duration-200">
            Learnify
          </h1>
        </Link>

        <div className="w-fit h-full hidden lg:flex items-center gap-6">
          <NavMenuDropdown
            text={"Learn"}
            onMouseEnterEvent={eventMouseEnterLearn}
            onMouseLeaveEvent={eventMouseLeaveLearn}
            isHovered={isLearnTabOpened}
            isEventClick={false}
            onClickEvent={undefined}
          />
          <NavMenuDropdown
            text={"Teach"}
            onMouseEnterEvent={eventMouseEnterTeach}
            onMouseLeaveEvent={eventMouseLeaveTeach}
            isHovered={isTeachTabOpened}
            isEventClick={false}
            onClickEvent={undefined}
          />
          <NavMenuDropdown
            text={"Community"}
            onMouseEnterEvent={eventMouseEnterCommunity}
            onMouseLeaveEvent={eventMouseLeaveCommunity}
            isHovered={isCommunityTabOpened}
            isEventClick={false}
            onClickEvent={undefined}
          />

          <Link
            href="/"
            className="w-fit flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Tutorials
          </Link>
        </div>

        <div className="w-fit flex items-center gap-4">
          <label className="relative hidden lg:block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400">
              <Image
                src="/icons/search.svg"
                alt="search icon"
                width={20}
                height={20}
                className="text-slate-400"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 sm:text-sm"
              placeholder="Search Learnify..."
              type="text"
              name="search"
              autoComplete="off"
            />
          </label>

          <Link
            href="/"
            className="w-fit p-2 px-4 rounded-md font-semibold text-slate-500 border border-slate-400 shadow-md hover:text-black hover:border-black active:scale-90 transition-all ease-in-out duration-200 hidden lg:block"
          >
            Log in
          </Link>

          <Link
            href="/"
            className="w-[45px] p-2 h-[45px] lg:flex hidden items-center justify-center rounded-full bg-fuchsia-100 text-fuchsia-800 cursor-pointer active:scale-90 hover:rotate-45 transition-all ease-in-out duration-300 object-contain"
          >
            <Image
              src="/icons/bell.svg"
              width={25}
              height={25}
              alt="notification bell"
            />
          </Link>

          <div
            className="w-[45px] p-2 h-[45px] lg:flex hidden items-center justify-center rounded-full bg-fuchsia-200 text-fuchsia-800 cursor-pointer ring-2 ring-fuchsia-700 active:scale-90 transition-all ease-in-out duration-300 object-contain"
            onClick={handleProfileDropdown}
          >
            <Image
              src="/icons/hamburger.svg"
              alt="burger icon"
              width={20}
              height={20}
              className="rounded-full"
            />
          </div>

          <div
            className="w-[35px] h-[35px] flex lg:hidden items-center justify-center rounded-full bg-fuchsia-200 text-fuchsia-800 cursor-pointer active:scale-90 hover:rotate-180 transition-all ease-in-out duration-300"
            onClick={handleHamburgerOption}
          >
            {!menuOpened ? (
              <span>
                <Image
                  src="/icons/hamburger.svg"
                  alt="burger icon"
                  width={20}
                  height={20}
                />
              </span>
            ) : (
              <span>
                <Image
                  src="/icons/close.svg"
                  alt="burger icon"
                  width={20}
                  height={20}
                />
              </span>
            )}
          </div>
        </div>
      </div>

      {/* hamburger menu */}
      {menuOpened && (
        <div className="w-full h-fit min-h-[660px] fixed top-[62px] z-20 bg-white/95 flex lg:hidden flex-col items-start gap-4 border-b border-b-slate-500 p-2">
          {/* learn tab */}
          <NavMenuDropdown
            text={"Learn"}
            onMouseEnterEvent={undefined}
            onMouseLeaveEvent={undefined}
            isHovered={isLearnTabOpened}
            isEventClick={true}
            onClickEvent={handleLearnTabClick}
          />
          {isLearnTabOpened && (
            <NavTabContent
              onMouseEnterEvent={undefined}
              onMouseLeaveEvent={undefined}
              isEventClick={true}
              title="Learn"
              description="Learn web development from expert teachers. Build real projects,
            join our community, and accelerate your career"
              linkTitle="Get Started"
              linkUrl={"/"}
              linkArray={LearnNavTabList}
            />
          )}

          {/* teach tab */}
          <NavMenuDropdown
            text={"Teach"}
            onMouseEnterEvent={undefined}
            onMouseLeaveEvent={undefined}
            isHovered={isTeachTabOpened}
            isEventClick={true}
            onClickEvent={handleTeachTabClick}
          />
          {isTeachTabOpened && (
            <NavTabContent
              onMouseEnterEvent={undefined}
              onMouseLeaveEvent={undefined}
              isEventClick={true}
              title="Teach"
              description="Share your knowledge with others, earn money, and help people with their career"
              linkTitle="Apply Now"
              linkUrl={"/"}
              linkArray={TeachNavTabList}
            />
          )}

          {/* community tab */}
          <NavMenuDropdown
            text={"Community"}
            onMouseEnterEvent={undefined}
            onMouseLeaveEvent={undefined}
            isHovered={isCommunityTabOpened}
            isEventClick={true}
            onClickEvent={handleCommunityTabClick}
          />
          {isCommunityTabOpened && (
            <NavTabContent
              onMouseEnterEvent={undefined}
              onMouseLeaveEvent={undefined}
              isEventClick={true}
              title="Community"
              description="Get help with programming projects, find collaborators, and make friends"
              linkTitle="Join Now"
              linkUrl={"/Pricing"}
              linkArray={CommunityNavTabList}
            />
          )}

          <Link
            href="/"
            className="w-fit mx-4 flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Tutorials
          </Link>

          <label className="relative block w-[95%] mx-4">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-400">
              <Image
                src="/icons/search.svg"
                alt="search icon"
                width={20}
                height={20}
                className="text-slate-400"
              />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 sm:text-sm"
              placeholder="Search Learnify..."
              type="text"
              name="search"
              autoComplete="off"
            />
          </label>

          <Link
            href="/"
            className="w-fit mx-4 flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Notifications
          </Link>

          <Link
            href="/"
            className="w-fit mx-4 flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Your Profile
          </Link>

          <Link
            href="/"
            className="w-fit mx-4 flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Your Library
          </Link>

          <Link
            href="/"
            className="w-fit mx-4 flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Your Settings
          </Link>

          <Link
            href="/"
            className="w-fit mx-4 mt-auto mb-3 flex items-center gap-2 text-lg font-semibold text-slate-500 font-mono cursor-pointer hover:text-fuchsia-500 transition-all ease-in-out duration-200"
          >
            Sign Out
          </Link>
        </div>
      )}

      {/* profile dropdown */}
      {profileOpened && <NavProfile />}

      {/* learn tab */}
      {isLearnTabOpened && (
        <div className="w-full lg:absolute lg:top-[75px] lg:h-[250px] hidden lg:flex border-b border-b-slate-500">
          <NavTabContent
            onMouseEnterEvent={eventMouseEnterLearn}
            onMouseLeaveEvent={eventMouseLeaveLearn}
            isEventClick={false}
            title="Learn"
            description="Learn web development from expert teachers. Build real projects,
            join our community, and accelerate your career"
            linkTitle="Get Started"
            linkUrl={"/"}
            linkArray={LearnNavTabList}
          />
        </div>
      )}

      {/* teach tab */}
      {isTeachTabOpened && (
        <div className="w-full lg:absolute lg:top-[75px] lg:h-[250px] hidden lg:flex border-b border-b-slate-500">
          <NavTabContent
            onMouseEnterEvent={eventMouseEnterTeach}
            onMouseLeaveEvent={eventMouseLeaveTeach}
            isEventClick={false}
            title="Teach"
            description="Share your knowledge with others, earn money, and help people with their career"
            linkTitle="Apply Now"
            linkUrl={"/"}
            linkArray={TeachNavTabList}
          />
        </div>
      )}

      {/* community tab */}
      {isCommunityTabOpened && (
        <div className="w-full lg:absolute lg:top-[75px] lg:h-[250px] hidden lg:flex border-b border-b-slate-500">
          <NavTabContent
            onMouseEnterEvent={eventMouseEnterCommunity}
            onMouseLeaveEvent={eventMouseLeaveCommunity}
            isEventClick={false}
            title="Community"
            description="Get help with programming projects, find collaborators, and make friends"
            linkTitle="Join Now"
            linkUrl={"/Pricing"}
            linkArray={CommunityNavTabList}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
