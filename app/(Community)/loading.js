import Image from "next/image";
import loadingImage from "@/public/icons/loading.svg";

export default function Loading({ isPageLoading }) {
  return (
    <div className="w-full min-h-[550px] h-fit flex items-center justify-center flex-col gap-6">
      {isPageLoading ? (
        <>
          {" "}
          <h1 className="text-6xl font-bold font-DancingScript hover:text-fuchsia-500 hover:drop-shadow-lg transition-all ease-out duration-200">
            Learnify
          </h1>
          <p className="lg:w-[650px] text-center text-balance text-xl text-slate-600 mb-2">
            "Unlock your potential, ignite your curiosity, and embrace the power
            of lifelong learning with Learnify. Start your journey today and
            watch your dreams transform into reality."
          </p>
          <Image src={loadingImage} alt="" width={70} height={150} />
          <p className="text-lg uppercase font-bold font-mono">Loading</p>
        </>
      ) : (
        <>
          <Image src={loadingImage} alt="" width={70} height={150} />
          <p className="text-lg uppercase font-bold font-mono">Loading</p>
        </>
      )}
    </div>
  );
}
