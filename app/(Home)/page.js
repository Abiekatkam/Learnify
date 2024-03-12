"use client";
import Intro from "./_components/Intro";
import LogoScrolling from "./_components/LogoScrolling";
import SmallHeading from "@/components/typography/SmallHeading";
import HighlightText from "@/components/typography/HighlightText";
import LinkText from "@/components/typography/LinkText";
import CourseList from "./_components/CourseList";
import BookList from "./_components/BookList";
import CarouselContainer from "./_components/CarouselContainer";
import Link from "next/link";
import AuthorCommentCard from "@/components/cards/AuthorCommentCard";
import AuthorProfileCard from "@/components/cards/AuthorProfileCard";

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start lg:gap-14 gap-8">
      <Intro />
      <LogoScrolling />

      {/* STOP LIVING IN TUTORIAL HELL */}
      <div className="w-full h-fit py-10 flex items-center justify-center flex-col gap-3 px-4">
        <SmallHeading text="STOP LIVING IN TUTORIAL HELL" />
        <p className="lg:w-[820px] text-center text-balance text-lg  text-slate-600">
          Binge-watching hundreds of clickbait-y tutorials on YouTube. Reading
          hundreds of low-effort blog posts. You're learning a lot, but you're
          also struggling to apply what you've learned to your work and
          projects. Worst of all, uncertainty looms over the next phase of your
          career.
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg font-semibold text-slate-500">
          How do I climb the career engineering ladder?
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg font-semibold text-slate-500">
          How do I continue moving toward technical excellence?
        </p>
        <p className="lg:w-[750px] text-center text-balance text-lg font-semibold text-slate-500">
          How do I move from entry-level developer to senior/lead developer?
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg font-semibold text-fuchsia-500 p-2 border border-fuchsia-500 rounded-lg">
          Learn from senior engineers who've been in your position before.
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          Taught by <HighlightText text="seniors engineers" /> at companies like
          Google and Apple, Learnify courses are{" "}
          <HighlightText text="hyper-focused, project-based tutorials" /> that
          teach students how to build{" "}
          <HighlightText text="production-grade, real- world applications" />{" "}
          with <HighlightText text=" industry best practices!" />
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          Learnify courses cover popular libraries and frameworks like{" "}
          <LinkText text="React" url="/" />, <LinkText text="Vue" url="/" />
          , <LinkText text="Angular" url="/" />,{" "}
          <LinkText text="D3.js" url="/" /> and more!
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          With over <HighlightText text="500+ hours of video content" /> across
          all Learnify courses, and new courses being released every month, you
          will always find yourself mastering a new library, framework or tool.
        </p>
      </div>

      <CourseList />
      <BookList />

      {/* Learnify FITS LEARNING INTO ANY SCHEDULE */}
      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-3 px-4">
        <SmallHeading text="Learnify FITS LEARNING INTO ANY SCHEDULE" />

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          Your time is precious. Regardless of how busy your schedule is,
          Learnify authors produce <HighlightText text="high-quality content" />{" "}
          across <HighlightText text="multiple mediums" /> to make learning a
          regular part of your life.
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          Have a long commute or trip without any reliable internet connection
          options? Download one of the <HighlightText text="15+ books." />{" "}
          Available in <HighlightText text=" PDF" /> formats for accessibility
          on any device
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          With over <HighlightText text="500+ hours of video content" /> across
          all Learnify courses, and new courses being released every month, you
          will always find yourself mastering a new library, framework or tool.
        </p>

        <p className="lg:w-[750px] text-center text-balance text-lg text-slate-600">
          Only have 30 minutes over a lunch break? Explore{" "}
          <HighlightText text="1-minute" /> shorts and dive into{" "}
          <HighlightText text="3-5 minute" /> shorts and dive into videos, each
          focusing on individual concepts for a compact learning experience.
        </p>
      </div>

      {/* FIND OUT WHY 100,000+ DEVELOPERS LOVE LEARNIFY */}
      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-3 lg:gap-5 px-4">
        <SmallHeading text="FIND OUT WHY 100,000+ DEVELOPERS LOVE LEARNIFY" />
        <div className="lg:w-[1200px] w-[350px]">
          <CarouselContainer />
        </div>
      </div>

      {/* MEET THE LEARNIFY AUTHORS */}
      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-3 px-4">
        <SmallHeading text="MEET THE LEARNIFY AUTHORS" />

        <p className="lg:w-[850px] text-center text-balance text-lg text-slate-600 mb-2">
          Learnify authors possess a{" "}
          <HighlightText text="wealth of industry knowledge" /> and an{" "}
          <HighlightText text="infinite passion for sharing their knowledge" />{" "}
          with others. Learnify authors explain complex concepts with practical,
          real-world examples to help students understand how to apply these
          concepts in their work and projects.
        </p>

        <div className="w-full h-fit min-h-[400px] flex items-start justify-start gap-6 flex-wrap px-8 lg:px-0">
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
          <AuthorProfileCard />
        </div>
      </div>

      {/* LOOKING TO TURN YOUR EXPERTISE INTO EDUCATIONAL CONTENT? */}
      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-3 px-4">
        <SmallHeading text="LOOKING TO TURN YOUR EXPERTISE INTO EDUCATIONAL CONTENT?" />

        <p className="lg:w-[955px] text-center text-balance text-lg text-slate-600">
          At Learnify, we're always eager to{" "}
          <HighlightText text="collaborate with driven individuals" /> like you,
          whether you come with years of industry experience, or you've been{" "}
          <HighlightText text="sharing your tech passion" /> through YouTube,
          Codepens, or Medium articles.{" "}
        </p>

        <p className="lg:w-[955px] text-center text-balance text-lg text-slate-600">
          We're here not just to host your course, but to{" "}
          <HighlightText text="foster your growth" />
          as a recognized and{" "}
          <HighlightText text="respected published instructor" /> in the
          community. We'll help you articulate your thoughts clearly,
          <HighlightText text="provide valuable content feedback" /> and
          suggestions, all towards publishing a course students will value.
        </p>

        <p className="lg:w-[955px] text-center text-balance text-lg text-slate-600">
          At Learnify, you can focus on what matters most -{" "}
          <HighlightText
            text="sharing your
              expertise"
          />
          . We'll handle emails, marketing, and customer support for your
          course, so you can{" "}
          <HighlightText text="focus on creating amazing content" /> Learnify
          offers various platforms to engage with a{" "}
          <HighlightText
            text="diverse global
              audience, amplifying your voice and name in the community"
          />
          .
        </p>

        <p className="lg:w-[955px] text-center text-balance text-lg text-slate-600">
          From outlining your first lesson to launching the complete course,
          we're with you every step of the way, guiding you through the course
          production process.
        </p>

        <p className="lg:w-[955px] text-center text-balance text-lg text-slate-600">
          In just a few months, you could{" "}
          <HighlightText
            text="not only jumpstart numerous
              careers and generate a consistent passive income"
          />{" "}
          with your course, but also{" "}
          <HighlightText text="solidify your reputation" /> as a respected
          instructor within the community.
        </p>

        <button className="w-fit mt-3 lg:p-3 lg:px-8 p-2 lg:text-lg text-md rounded-md shadow-lg hover:bg-fuchsia-500 hover:text-white font-semibold border-2 border-fuchsia-500 bg-transparent text-fuchsia-500 transition-all ease-in-out duration-200 active:scale-95 capitalize">
          Apply Now
        </button>
        <Link
          href="/"
          className="text-sm  underline text-fuchsia-700 hover:text-fuchsia-600 capitalize"
        >
          Learn more about teaching for Learnify
        </Link>
      </div>

      {/* HEAR WHAT Learnify AUTHORS HAVE TO SAY */}
      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-3 lg:gap-4 px-4">
        <SmallHeading text="HEAR WHAT Learnify AUTHORS HAVE TO SAY" />

        <AuthorCommentCard />
        <AuthorCommentCard />
        <AuthorCommentCard />

        <button className="w-fit mt-3 lg:p-3 lg:px-8 p-2 lg:text-lg text-md rounded-md shadow-lg hover:bg-fuchsia-500 hover:text-white font-semibold border-2 border-fuchsia-500 bg-transparent text-fuchsia-500 transition-all ease-in-out duration-200 active:scale-95 capitalize">
          Apply to teach
        </button>
        <Link
          href="/"
          className="text-sm  underline text-fuchsia-700 hover:text-fuchsia-600 capitalize"
        >
          Learn more about teaching for Learnify
        </Link>
      </div>
    </div>
  );
}
