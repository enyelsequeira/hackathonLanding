import React from "react";
import Titles from "../Titles/Titles";
import Image from "next/image";
import { CgPokemon } from "react-icons/cg";
import { GiGoat, GiDragonBalls } from "react-icons/gi";

const facts = [
  {
    id: 0,
    title: "Pokemon Go",
    text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus. ",
    icon: <CgPokemon size="4rem" color="#F0BB1F" />,
  },
  {
    id: 1,
    title: "Goats",
    text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus. ",
    icon: <GiGoat size="4rem" color="#F15A2B" />,
  },
  {
    id: 2,
    title: "Dragon Ball",
    text: "Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus. ",
    icon: <GiDragonBalls size="4rem" color="006380" />,
  },
];
const FunFacts = () => {
  return (
    <div className="p-4 md:p-6 flex-col-reverse flex  md:grid  md:grid-cols-2 gap-4">
      <div className="m-auto shadow-lg">
        <Image
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1587573089283-f14c65841f75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2769&q=80"
          width="500"
          height="600"
        />
      </div>
      <div>
        <Titles
          subTittle="Fun facts"
          title="3 things that you should know about me"
        />
        <div>
          {facts.map((fact) => {
            return (
              <div key={fact.id} className="flex justify-around my-8 font-main">
                <div className="mr-7">{fact.icon}</div>
                <div>
                  <p className="text-base font-bold text-text-gray tracking-wider ">
                    {fact.title}
                  </p>
                  <p className="text-text-gray">{fact.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
