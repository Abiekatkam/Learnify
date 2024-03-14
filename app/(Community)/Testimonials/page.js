import CarouselReviewCard from "@/components/cards/CarouselReviewCard";
import SmallHeading from "@/components/typography/SmallHeading";
import { Suspense } from "react";
import Loading from "../loading";

const Page = () => {
  return (
    <>
      <div className="w-full h-fit mt-20 flex items-center justify-center lg:mb-2">
        <SmallHeading text="What our students say..." />
      </div>

      <Suspense fallback={<Loading isPageLoading={false} />}>
        <div className="w-full lg:w-[85%] h-fit min-h-[400px] flex items-center justify-center gap-4 flex-wrap px-8 lg:px-0 mb-8">
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
          <CarouselReviewCard />
        </div>
      </Suspense>
    </>
  );
};

export default Page;
