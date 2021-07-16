import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex  flex-col md:grid md:grid-cols-2 md:gap-6 border-b-2 border-black">
      <div className="p-9">
        <p className="font-main leading-8 text-xl font-bold text-[#DF6951] uppercase mb-6">
          I am Terrence Shlomo Tegegne{" "}
        </p>
        <h1 className="text-[#181E4B] font-sub font-bold leading-tight lg:leading-snug text-5xl lg:text-6xl mb-7">
          Hello,{" "}
          <span className="border-b-2 w-5 lg:h-9 border-[#181313] text-[#DF6951]">
            {" "}
            Welcome{" "}
          </span>{" "}
          check out my UX/UI portfolio
        </h1>
        <p className="text-text-gray font-main leading-5 font-bold text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit commodi
          amet, animi id natus aliquam aliquid suscipit inventore esse dolorem
          enim magni numquam
        </p>
        <div className="mt-8 ">
          <button className="rounded-lg border-2 px-4 py-3 bg-[#F1A501] text-white shadow text-lg leading-6 hover:bg-red-400 transition duration-700 ease-in-out">
            Find out more
          </button>
        </div>
      </div>
      <div className="relative z-20 lg:flex justify-center items-center my-auto">
        <Image
          className="z-30"
          src={"/img/Terrysmile.png"}
          width="765"
          height="765"
          layout="intrinsic"
        />
        <div className="absolute lg:-top-28 xl:-top-20 z-0 hidden lg:flex">
          <img src="/img/Decore.svg" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
