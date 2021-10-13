import React, { useState } from "react";
import Image from "next/image";
import { MdLightMode, MdNightlight } from "react-icons/md";

function Header({ changeTheme }) {
  const [theme, setTheme] = useState(false);

  return (
    <div
      data-testid="Header-component"
      className="sticky top-0 z-50 bg-white dark:bg-black border-b border-blue-300 h-16 flex flex-row w-screen shadow-md bg-[#24325f99] dark:bg-[#24325fff]"
    >
      <div className="flex w-14 h-14 relative flex-shrink-0 m-auto">
        <Image
          data-testid="Header-logo"
          src="/logo.png"
          layout="fill"
          objectFit="contain"
          className=""
        />
      </div>

      <div className="flex-shrink">
        <h1
          className="text-4xl font-bold text-gray-800 dark:text-gray-100"
          data-testid="Header-heading"
        >
          The <span className="text-blue-400 dark:text-blue-500">Rick</span>{" "}
          <span className="text-green-400 dark:text-green-500">&</span>{" "}
          <span className="text-yellow-400 dark:text-yellow-500">Morty</span>{" "}
          Encyclopedia
        </h1>
      </div>

      <div className="flex-grow"></div>

      <div className="flex-shrink-0"></div>
    </div>
  );
}

export default Header;

{
  /* <div className="m-auto flex items-center">
<div className="flex w-14 h-14 relative flex-shrink-0 m-auto">
  <Image
    data-testid="Header-logo"
    src="/logo.png"
    layout="fill"
    objectFit="contain"
    className=""
  />
</div>
<h1
  className="text-4xl font-bold text-gray-800 dark:text-gray-100"
  data-testid="Header-heading"
>
  The <span className="text-blue-400 dark:text-blue-500">Rick</span>{" "}
  <span className="text-green-400 dark:text-green-500">&</span>{" "}
  <span className="text-yellow-400 dark:text-yellow-500">Morty</span>{" "}
  Encyclopedia
</h1>
</div>
<div data-testid="Header-buttons-area bg-yellow-300">
<MdLightMode className="" />
</div> */
}
