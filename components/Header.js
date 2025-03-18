import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdLightMode, MdNightlight } from "react-icons/md";

function Header({}) {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    let localTheme = localStorage.getItem("theme");
    if (localTheme && localTheme === "true") {
      setTheme(true);
      document.body.classList.add("dark");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#1f2937");
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
    if (!theme) {
      document.body.classList.add("dark");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#1f2937");
    } else {
      document.body.classList.remove("dark");
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#fff");
    }
  };

  return (
    <div
      data-testid="Header-component"
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 h-16 flex flex-row w-screen shadow-md items-center"
    >
      <Link href="/" passHref data-testid="Header-logo-link">
        <div className="flex w-14 h-14 relative flex-shrink-0 m-auto pl-16 cursor-pointer">
          <Image
            data-testid="Header-logo"
            src="/logo.png"
            className=""
            alt="Site logo"
            fill
            sizes="100vw"
            style={{
              objectFit: "contain"
            }} />
        </div>
      </Link>
      <Link href="/" passHref data-testid="Header-heading-link">
        <div className="flex-shrink pl-2 cursor-pointer">
          <h1
            className="hidden md:inline-flex md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-gray-100"
            data-testid="Header-heading"
          >
            The <span className="text-blue-600 dark:text-blue-300">Rick</span>{" "}
            <span className="text-green-600 dark:text-green-300">&</span>{" "}
            <span className="text-yellow-600 dark:text-yellow-300">Morty</span>{" "}
            Encyclopedia
          </h1>
        </div>
      </Link>
      <div className="flex-grow"></div>
      <div className="flex-shrink-0 px-4">
        <button
          data-testid="Header-theme-button"
          aria-label="change theme button"
          onClick={() => {
            setTheme(!theme);
            changeTheme();
          }}
          className={`px-5 py-2 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 hover:animate-pulse`}
        >
          <p className="font-semibold text-black dark:text-white">
            {theme ? (
              <MdLightMode data-testid="go-light" />
            ) : (
              <MdNightlight data-testid="go-dark" />
            )}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Header;
