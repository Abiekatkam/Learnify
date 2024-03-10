import Image from "next/image";
import React from "react";
import AnchorIcon from "../typography/AnchorIcon";

const CarouselReviewCard = () => {
  return (
    <div className="w-full lg:max-w-[540px] mx-auto min-h-[350px] h-fit rounded-md border border-slate-300 shadow-lg flex flex-col items-start gap-4 p-6 pt-8 relative">
      <div className="lg:w-[100px] w-[80px] absolute -top-2 left-4 z-10 text-4xl opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
      </div>
      <p className="text-start text-balance text-lg text-slate-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id odit
        officia qui vitae distinctio numquam ab, laboriosam optio aperiam,
        corrupti dignissimos expedita, doloremque quidem laborum. Accusantium
        repudiandae illo aut, facere assumenda dolor quae rem laudantium veniam
        maxime obcaecati nam! Consequuntur!
      </p>

      <div className="mt-auto w-full flex lg:flex-row flex-col items-start justify-between h-fit gap-3">
        <div className="flex flex-row items-start justify-center gap-2">
          <div className="w-16 h-16 object-center rounded-full object-contain">
            {/* <Image src="" alt="" width={40} height={40} /> */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAiiZe77J7T8WnfcpX-RThUnLqCacJIHL2A&usqp=CAU"
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="w-fit h-fit flex flex-col items-start gap-0 text-start">
            <h1 className="text-lg font-bold">Nadine Whitfield</h1>
            <p className="text-sm text-slate-500">
              Developer Consultant at ThoughtWorks
            </p>
            <div className="flex flex-row items-start gap-2 mt-1">
              <AnchorIcon type="LINKEDIN" url="/" />
              <AnchorIcon type="TWITTER" url="/" />
              <AnchorIcon type="GITHUB" url="/" />
              <AnchorIcon type="INSTAGRAM" url="/" />
              <AnchorIcon type="LINK" url="/" />
            </div>
          </div>
        </div>
        <div className="lg:w-[18%] flex flex-row items-start justify-center ml-auto">
          <span className="text-xl w-6 h-6 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </span>
          <p className="text-lg font-bold ml-2">5 / 5</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselReviewCard;
