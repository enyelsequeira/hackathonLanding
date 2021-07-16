import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { SiMaterialdesign } from "react-icons/si";
import { IoLogoDesignernews } from "react-icons/io";
import { DiReact, DiSass } from "react-icons/di";
import Titles from "../Titles/Titles";

const data = [
  {
    name: "ux",
    id: 0,
    text: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: <DiSass fontSize="4rem" />,
  },
  {
    name: "UI",
    id: 1,
    text: "Engrossed listening. Park gate sell they west hard for the.",
    icon: <SiMaterialdesign fontSize="4rem" />,
  },
  {
    name: "LogoDesign",
    id: 2,
    text: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    icon: <IoLogoDesignernews fontSize="4rem" />,
  },
  {
    name: "FE",
    id: 3,
    text: "We deliver outsourced aviation services for military customers",
    icon: <DiReact fontSize="4rem" />,
  },
];

const Services = () => {
  return (
    <div className="py-7">
      <Titles subTittle="Category" title=" Services I offer every Day" />
      <div className="p-6 lg:p-10 flex flex-col md:grid md:grid-cols-4 gap-6">
        {data.map((service) => {
          return (
            <div
              key={service.id}
              className="p-4 border-2 flex flex-col shadow-lg rounded-2xl"
            >
              <div className="text-blue-300 my-2 mx-auto">{service.icon}</div>
              <p className="text-[#1E1D4C] text-xl text-center font-sub font-semibold tracking-wider">
                {service.name}
              </p>
              <p className="text-text-gray text-center font-main mt-4 tracking-wide ">
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
