import React from "react";
import Titles from "../Titles/Titles";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";

const projects = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    title: "Project 1",
    link: "https://www.google.com/",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    title: "Project 2",
    link: "https://www.google.com/",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    title: "Project 3",
    link: "https://www.google.com/",
  },
];
const Projects = () => {
  return (
    <div className="py-7">
      <Titles title="Top Projects" subTittle="Projects" />
      <div className=" px-4 mt-6 lg:px-24 flex flex-col md:grid grid-cols-3 gap-6">
        {projects.map((project) => {
          return (
            <div key={project.id} className="border-2 shadow-xl rounded-3xl">
              <div>
                <Image
                  src={project.image}
                  width="350"
                  height="350"
                  layout="responsive"
                  className="rounded-3xl"
                />
              </div>
              <div className="p-3 py-7">
                <p className="text-lg font-main font-medium tracking-wider">
                  {project.title}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex font-semibold hover:text-red-400 transition duration-700 ease-in-out w-[fit-content]"
                >
                  <span className="my-auto mr-3">
                    <BsLink45Deg />
                  </span>
                  Source
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
