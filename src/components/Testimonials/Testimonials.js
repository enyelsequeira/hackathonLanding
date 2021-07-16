import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="flex flex-col  md:grid md:grid-cols-2 gap-4 md:gap-6 p-6">
      <div className="p-6 md:p-10 space-y-3 md:my-auto lg:my-0">
        <h1 className="text-text-gray text-lg font-main tracking-wide mb-2">
          Testimonials
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl font-sub uppercase font-semibold  leading-snug">
          What people are saying about Me.
        </p>
      </div>
      <div className="md:p-8">
        <div className="border-2 rounded-lg p-2 shadow-md relative">
          <div className="rounded-full w-16 h-16 absolute -top-8 -left-5">
            <Image
              src="/img/Terrysmile.png"
              alt="Terry Pics"
              width="400"
              height="400"
            />
          </div>
          <div className="my-9 p-3 font-main text-text-gray  ">
            <p className="text-base leading-8 mb-8 font-medium">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg   font-semibold pb-1">Terry Smile</p>
            <p className="text-lg font-medium">Iowa, USA</p>
          </div>
        </div>
      </div>
      <div className="md:p-8 col-start-1 col-end-2">
        <div className="border-2 rounded-lg p-2 shadow-md relative">
          <div className="rounded-full w-16 h-16 absolute -top-8 -left-5">
            <Image
              src="/img/Terrybench.png"
              alt="Terry Pics"
              width="400"
              height="400"
            />
          </div>
          <div className="my-9 p-3 font-main text-text-gray  ">
            <p className="text-base leading-8 mb-8 font-medium">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg   font-semibold pb-1">Terry Bench</p>
            <p className="text-lg font-medium">Iowa, USA</p>
          </div>
        </div>
      </div>
      <div className="md:p-8 col-start-2 col-end-3">
        <div className="border-2 rounded-lg p-2 shadow-md relative">
          <div className="rounded-full w-16 h-16 absolute -top-8 -left-5">
            <Image
              src="/img/Terrychill.png"
              alt="Terry Pics"
              width="400"
              height="400"
            />
          </div>
          <div className="my-9 p-3 font-main text-text-gray  ">
            <p className="text-base leading-8 mb-8 font-medium">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg   font-semibold pb-1">Mike Taylor</p>
            <p className="text-lg font-medium">Iowa, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
