import React from "react";
import Link from "next/link";

const linkClasses =
  "px-3 py-2 flex items-center text-xs uppercase font-medium leading-snug hover:opacity-75 hover:text-red-500";
const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <header className="flex flex-wrap py-2 z-50 relative">
        <div className="w-full px-4">
          <nav className="flex flex-wrap sticky items-center justify-between px-2 py-3 bg-t-ternary dark:bg-d-third font-main">
            <div className="container px-4 mx-auto flex flex-wrap items-center sticky justify-between space-y-1">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:sticky  lg:justify-start">
                <Link href="/">
                  <a className="hover:text-red-300 text-sm font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
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

                <button
                  className="cursor-pointer text-xl  px-3 py-1 border border-solid border-transparent rounded block lg:hidden outline-none focus:outline-none h-auto"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="nav-bar"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className={linkClasses}>Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#about">
                      <a className={linkClasses}>Info</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#projects">
                      <a className={linkClasses}>Lorem</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#projects">
                      <a className={linkClasses}>Lorem</a>
                    </Link>
                  </li>{" "}
                  <li className="nav-item">
                    <Link href="/#projects">
                      <a className={linkClasses}>Lorem</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a
                        className={`${linkClasses} border bg-yellow-200  rounded-2xl text-black`}
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
