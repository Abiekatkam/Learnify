import CarouselContainer from "@/app/(Home)/_components/CarouselContainer";
import LogoScrolling from "@/app/(Home)/_components/LogoScrolling";
import MediumHeading from "@/components/typography/MediumHeading";
import SmallHeading from "@/components/typography/SmallHeading";
import CheckmarkImage from "@/public/icons/checkmark.svg";
import Image from "next/image";
import Accordion from "./_components/Accordion";
import { accordionData } from "@/utils/AccordionData";

const Page = () => {
  return (
    <>
      <div className="w-full h-fit flex items-center justify-center flex-col gap-2 lg:mt-6 mt-20 text-center">
        <MediumHeading text="Choose a plan for success" />
        <p className="text-center text-balance text-md lg:text-xl text-slate-600 mb-2 mx-2">
          Don't want to buy courses one by one? Pick a plan to help you, your
          team, or your organization achieve outcomes faster.
        </p>

        <div className="lg:w-[90%] w-[80%] h-fit lg:min-h-[350px] min-h-[300px] flex items-start lg:flex-row flex-col gap-6 lg:gap-0 lg:justify-around mt-4">
          <div className="lg:w-[30%] w-full h-[450px] relative rounded-xl shadow-xl">
            <div className="w-full h-full absolute top-0 left-0 bg-sky-200 rounded-xl" />
            <div className="absolute bottom-0 w-full h-[95%] z-10 bg-slate-100 rounded-xl border border-slate-400 flex flex-col items-start gap-0 p-4">
              <h1 className="text-2xl font-bold capitalize text-slate-700">
                Free plan
              </h1>
              <p className="text-sm capitalize text-slate-600">
                for individual
              </p>

              <p className="mt-4 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to all books online
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to all guides
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                20% discount on all masterclasses
              </p>

              <button className="mt-6 w-full p-2 outline-none  text-lg font-semibold hover:border-slate-700 hover:text-slate-800 text-slate-500 border-2 border-slate-400 rounded-lg active:scale-95 transition-all ease-in duration-200">
                Sign Up
              </button>
            </div>
          </div>

          <div className="lg:w-[30%] w-full h-[450px] relative rounded-xl shadow-xl">
            <div className="w-full h-full absolute top-0 left-0 bg-fuchsia-200 rounded-xl" />
            <div className="absolute bottom-0 w-full h-[95%] z-10 bg-slate-100 rounded-xl border border-slate-400 flex flex-col items-start gap-0 p-4">
              <h1 className="text-2xl font-bold capitalize text-slate-700">
                Pro plan
              </h1>
              <p className="text-sm capitalize text-slate-600">
                for individual
              </p>

              <p className="mt-4 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to all books online
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to all guides
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                20% discount on all masterclasses
              </p>

              <button className="mt-6 w-full p-2 outline-none  text-lg font-semibold hover:border-slate-700 hover:text-slate-800 text-slate-500 border-2 border-slate-400 rounded-lg active:scale-95 transition-all ease-in duration-200">
                Subscribe
              </button>
            </div>
          </div>

          <div className="lg:w-[30%] w-full h-[450px] relative rounded-xl shadow-xl">
            <div className="w-full h-full absolute top-0 left-0 bg-purple-200 rounded-xl" />
            <div className="absolute bottom-0 w-full h-[95%] z-10 bg-slate-100 rounded-xl border border-slate-400 flex flex-col items-start gap-0 p-4">
              <h1 className="text-2xl font-bold capitalize text-slate-700">
                Team plan
              </h1>
              <p className="text-sm capitalize text-slate-600">for team</p>

              <p className="mt-4 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to all books online
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to all guides
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                Access to the community
              </p>
              <p className="mt-2 text-md text-slate-600 flex gap-2 items-center text-pretty">
                <span>
                  {" "}
                  <Image
                    src={CheckmarkImage}
                    alt="check mark"
                    width={20}
                    height={20}
                  />{" "}
                </span>{" "}
                20% discount on all masterclasses
              </p>

              <button className="mt-6 w-full p-2 outline-none  text-lg font-semibold hover:border-slate-700 hover:text-slate-800 text-slate-500 border-2 border-slate-400 rounded-lg active:scale-95 transition-all ease-in duration-200">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>

      <LogoScrolling />

      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-3 lg:gap-5 px-4">
        <SmallHeading text="See what others are achieving through learning" />
        <div className="lg:w-[1200px] w-[350px]">
          <CarouselContainer />
        </div>
      </div>

      <div className="w-full h-fit py-10 flex items-center justify-center text-center flex-col gap-7 lg:gap-5 px-4 mb-6">
        <SmallHeading text="Frequently asked questions" />

        <div className="lg:w-[800px] w-full h-fit flex flex-col items-center justify-center">
          <Accordion items={accordionData} />
        </div>
      </div>
    </>
  );
};

export default Page;
