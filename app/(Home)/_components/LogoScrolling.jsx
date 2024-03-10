import SmallHeading from "@/components/typography/SmallHeading";
import Image from "next/image";
import React from "react";
import Amazon from "@/public/company/amazon.svg";
import Atlassian from "@/public/company/atlassian.svg";
import campbells from "@/public/company/campbells.svg";
import canva from "@/public/company/canva.svg";
import cintas from "@/public/company/cintas.svg";
import disney from "@/public/company/disney.svg";
import equifax from "@/public/company/equifax.svg";
import eventbrite from "@/public/company/eventbrite.svg";
import microsoft from "@/public/company/microsoft.svg";
import rackspace from "@/public/company/rackspace.svg";
import square from "@/public/company/square.svg";

const LogoScrolling = () => {
  return (
    <div className="w-full h-[170px] flex flex-col items-center py-auto gap-2">
      <SmallHeading text="Our students works at" />

      <div className="w-full max-w-[1250px] overflow-hidden inline-flex flex-nowrap h-[60%] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none [&_img]:opacity-60 animate-infinite_scroll">
          <li>
            <Image src={Amazon} alt="Amazon" />
          </li>
          <li>
            <Image src={Atlassian} alt="Atlassian" />
          </li>
          <li>
            <Image src={canva} alt="canva" />
          </li>
          <li>
            <Image src={cintas} alt="cintas" />
          </li>
          <li>
            <Image src={campbells} alt="campbells" />
          </li>
          <li>
            <Image src={disney} alt="disney" />
          </li>
          <li>
            <Image src={equifax} alt="equifax" />
          </li>
          <li>
            <Image src={eventbrite} alt="eventbrite" />
          </li>
          <li>
            <Image src={microsoft} alt="microsoft" />
          </li>
          <li>
            <Image src={rackspace} alt="rackspace" />
          </li>
          <li>
            <Image src={square} alt="square" />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none [&_img]:opacity-60 animate-infinite_scroll"
          aria-hidden="true"
        >
          <li>
            <Image src={Amazon} alt="Amazon" />
          </li>
          <li>
            <Image src={Atlassian} alt="Atlassian" />
          </li>
          <li>
            <Image src={canva} alt="canva" />
          </li>
          <li>
            <Image src={cintas} alt="cintas" />
          </li>
          <li>
            <Image src={campbells} alt="campbells" />
          </li>
          <li>
            <Image src={disney} alt="disney" />
          </li>
          <li>
            <Image src={equifax} alt="equifax" />
          </li>
          <li>
            <Image src={eventbrite} alt="eventbrite" />
          </li>
          <li>
            <Image src={microsoft} alt="microsoft" />
          </li>
          <li>
            <Image src={rackspace} alt="rackspace" />
          </li>
          <li>
            <Image src={square} alt="square" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogoScrolling;
