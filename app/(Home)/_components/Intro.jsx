import React from "react";

const Intro = () => {
  return (
    <div className="w-full lg:h-[590px] h-[520px] flex items-center justify-center">
      <div className="relative w-fit">
        {/* gradients */}
        <div className="absolute lg:-top-24 lg:left-[35%] left-[20%] lg:w-96 lg:h-96 w-56 h-56 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-90 lg:animate-blob_animate"></div>

        <div className="absolute top-24 lg:-top-30 lg:left-[25%] left-10 lg:w-96 lg:h-96 w-56 h-56 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-90 lg:animate-blob_animate delay-200"></div>

        <div className="absolute top-10 lg:-top-30 lg:right-[25%] right-10 lg:w-96 lg:h-96 w-56 h-56 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-2xl opacity-90 lg:animate-blob_animate delay-500"></div>

        {/* code block */}
        <div className="relative mx-auto lg:w-[60%] lg:px-0 px-4 flex flex-col items-center gap-3 opacity-1">
          <h1 className="lg:text-9xl text-8xl font-DancingScript font-bold text-pretty drop-shadow-lg">
            Learnify
          </h1>

          <p className="w-fit text-balance text-center lg:text-xl text-lg font-semibold">
            Where Knowledge Meets Convenience. Dive into a world of interactive
            learning with our innovative eLearning platform. Discover endless
            possibilities to enhance your skills, expand your horizons, and
            ignite your passion for learning, all at your fingertips. Let's
            embark on a journey of knowledge together!
          </p>

          <button className="w-fit mt-3 lg:p-3 lg:px-8 p-2 lg:text-lg text-md rounded-md shadow-lg hover:bg-fuchsia-500 hover:text-white font-semibold border-2 border-fuchsia-500 bg-transparent text-fuchsia-500 transition-all ease-in-out duration-200 active:scale-95 capitalize">
            Lets start a new journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
