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
    }
  }, []);

  const changeTheme = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
    if (!theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div
      data-testid="Header-component"
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 h-16 flex flex-row w-screen shadow-md items-center"
    >
      <Link href="/" passHref>
        <div className="flex w-14 h-14 relative flex-shrink-0 m-auto pl-16 cursor-pointer">
          <Image
            data-testid="Header-logo"
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            className=""
            alt="Site logo"
          />
        </div>
      </Link>

      <div className="flex-shrink pl-2">
        <h1
          className="hidden md:inline-flex md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-gray-100"
          data-testid="Header-heading"
        >
          The <span className="text-blue-400 dark:text-blue-500">Rick</span>{" "}
          <span className="text-green-400 dark:text-green-500">&</span>{" "}
          <span className="text-yellow-400 dark:text-yellow-500">Morty</span>{" "}
          Encyclopedia
        </h1>
      </div>

      <div className="flex-grow"></div>

      <div className="flex-shrink-0 px-4" data-testid="Header-buttons-area">
        <button
          onClick={() => {
            setTheme(!theme);
            changeTheme();
          }}
          className={`px-5 py-2 rounded-2xl opacity-70 transition transform duration-200 ease-out hover:shadow-lg hover:scale-105 hover:opacity-100 hover:animate-pulse`}
        >
          <p className="font-semibold text-black dark:text-white">
            {theme ? <MdLightMode /> : <MdNightlight />}
          </p>
        </button>
      </div>
    </div>
  );
}

export default Header;
