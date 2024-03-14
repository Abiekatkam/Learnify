import Link from "next/link";
import React from "react";
import SocialIcons from "./_components/SocialIcons";
import BookPromoCard from "../cards/BookPromoCard";
import TextAnchorLinks from "./_components/TextAnchorLinks";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-black h-fit flex flex-col items-center text-white">
      <div className="w-full h-fit lg:h-screen flex items-center justify-between flex-col lg:flex-row  lg:max-w-[1350px] gap-3 lg:px-8 px-4 py-8 lg:py-14">
        <div className="w-full lg:w-[40%] h-full flex flex-col items-start justify-between gap-12">
          <div className="w-fit flex flex-col items-start gap-5">
            <Link href="/">
              <h1 className="lg:text-8xl text-6xl font-semibold  hover:text-fuchsia-500 hover:drop-shadow-lg transition-all ease-out duration-200 font-DancingScript">
                Learnify
              </h1>
            </Link>

            <div>
              <p className="text-sm mb-1 font-semibold capitalize text-slate-300">
                Follow me on
              </p>
              <div className="w-fit flex flex-row lg:gap-3 gap-2">
                <SocialIcons type="instagram" url="/" />
                <SocialIcons type="facebook" url="/" />
                <SocialIcons type="linkedin" url="/" />
                <SocialIcons type="twitter" url="/" />
                <SocialIcons type="" url="/" />
              </div>
            </div>
          </div>

          {/* new letter */}
          <div className="w-full h-fit flex flex-col items-start gap-3">
            <p className="text-sm font-semibold capitalize text-slate-300">
              Get a daily news letter from learnify
            </p>
            <input
              className="placeholder:italic 
              placeholder:capitalize placeholder:text-slate-300 block bg-transparent w-full border lg:text-lg text-md border-slate-300 rounded-md lg:py-4 py-3 pl-4 pr-3 shadow-sm focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 sm:text-sm"
              placeholder="Enter your full name"
              type="text"
              name="fullname"
              autoComplete="off"
            />
            <input
              className="placeholder:italic 
              placeholder:capitalize placeholder:text-slate-300 block bg-transparent w-full border lg:text-lg text-md border-slate-300 rounded-md lg:py-4 py-3 pl-4 pr-3 shadow-sm focus:outline-none focus:border-fuchsia-500 focus:ring-fuchsia-500 focus:ring-1 sm:text-sm"
              placeholder="Enter your email address"
              type="email"
              name="email"
              autoComplete="off"
            />
            <button className="p-2 lg:text-lg text-md bg-fuchsia-500 font-semibold py-3 border-2 border-transparent hover:border-fuchsia-500  hover:opacity-75 active:scale-95 w-full rounded-md transition-all ease-in duration-200">
              Get Started
            </button>
          </div>

          {/* copright text */}
          <p className="hidden lg:block text-balance font-mono text-slate-300 text-sm">
            Terms of Service, Privacy, ©{year} Learnify | Abiekatkam
          </p>
        </div>

        <div className="w-full lg:w-[55%] h-full flex flex-col items-start gap-10 mt-8 lg:mt-0">
          <div className="w-full flex flex-col items-start gap-2">
            <p className="text-md uppercase font-mono font-semibold text-slate-300">
              Latest book
            </p>
            <div className="w-full h-fit pl-3">
              <BookPromoCard />
            </div>
          </div>

          <div className="w-full h-fit flex lg:flex-row flex-col pl-3 lg:pl-0 items-start lg:gap-2 gap-8">
            <div className="lg:w-[30%] w-full">
              <p className="text-md uppercase mb-2 font-mono font-semibold text-slate-300">
                Learn
              </p>

              <TextAnchorLinks text="Fullstack MERN" url="/" />
              <TextAnchorLinks text="Fullstack React" url="/" />
              <TextAnchorLinks text="Fullstack Typescript" url="/" />
              <TextAnchorLinks text="Fullstack NodeJS" url="/" />
              <TextAnchorLinks text="Fullstack NextJS" url="/" />
              <TextAnchorLinks text="Fullstack RUST" url="/" />
            </div>

            <div className="lg:w-[30%] w-full">
              <p className="text-md uppercase mb-2 font-mono font-semibold text-slate-300">
                Community
              </p>

              <TextAnchorLinks text="Join our Discord server" url="/" />
              <TextAnchorLinks
                text="What are students says"
                url="/Testimonials"
              />
            </div>

            <div className="lg:w-[30%] w-full">
              <p className="text-md uppercase mb-2 font-mono font-semibold text-slate-300">
                Technologies
              </p>

              <TextAnchorLinks text="React" url="/" />
              <TextAnchorLinks text="NextJS" url="/" />
              <TextAnchorLinks text="NodeJS" url="/" />
              <TextAnchorLinks text="Typescript" url="/" />
              <TextAnchorLinks text="Express" url="/" />
              <TextAnchorLinks text="Middlewares" url="/" />
            </div>
          </div>

          <p className="lg:hidden block text-balance font-mono text-slate-300 text-sm">
            Terms of Service, Privacy, ©{year} Learnify | Abiekatkam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
