import React from "react";

import Link from "next/link";
import { CgTwitter } from "react-icons/cg";

const FooterList = [
  {
    title: "Footer1",
    list: [
      {
        title: "about",
        link: "http://google.com",
      },
      {
        title: "about",
        link: "http://google.com",
      },
      {
        title: "about",
        link: "http://google.com",
      },
    ],
  },
  {
    title: "Footer2",
    list: [
      {
        title: "about",
        link: "http://google.com",
      },
      {
        title: "about",
        link: "http://google.com",
      },
      {
        title: "about",
        link: "http://google.com",
      },
    ],
  },
  {
    title: "Footer3",
    list: [
      {
        title: "about",
        link: "http://google.com",
      },
      {
        title: "about",
        link: "http://google.com",
      },
      {
        title: "about",
        link: "http://google.com",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="pt-8 md:pt-24 flex flex-col lg:grid lg:grid-cols-3"
    >
      <div className="p-5 md:self-center md:justify-self-center">
        <Link href="/">
          <a className="text-sm font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase hover:text-red-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </Link>
      </div>
      <div className="mx-auto container flex justify-around px-4 xl:px-12 2xl:px-4 col-span-2">
        {FooterList.map((list) => {
          return (
            <div className="lg:flex flex-col" key={list.title}>
              <h1 className="text-xl font-semibold font-main tracking-wider leading-7">
                {list.title}
              </h1>
              <div className="mt-4 md:mt-8">
                {list.list.map((l, i) => {
                  return (
                    <a
                      key={i}
                      className=" text-text-gray text-lg font-medium font-main flex flex-col hover:text-red-200 "
                      href={l.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.title}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-3 lg:mt-9 col-span-3 space-x-16">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer  "
          className="hover:text-red-400"
        >
          <CgTwitter size="2rem" />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <CgTwitter size="2rem" />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-400"
        >
          <CgTwitter size="2rem" />
        </a>
      </div>
      <p className="text-center col-span-3 py-10 text-2xl md:text-4xl font-main">
        All right Reserved | © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
