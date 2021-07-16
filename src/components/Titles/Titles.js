import React from "react";

const Titles = ({ title, subTittle }) => {
  return (
    <>
      <p className="text-center font-semibold font-main text-lg text-text-gray uppercase mb-3">
        {subTittle}
      </p>
      <p className="text-center font-bold font-sub text-5xl uppercase md:mb-8 md:mb-12">
        {title}
      </p>
    </>
  );
};

export default Titles;
