import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div
      data-testid="Header-component"
      className="sticky top-0 z-50 backdrop-blur-3xl h-16 flex flex-row min-w-full shadow-md bg-[#24325f99] dark:bg-[#24325fff]"
    >
      <div className="m-auto flex items-center">
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
        {/* TODO: logo */}
      </div>
      <div data-testid="Header-buttons-area">{/* buttons area */}</div>
    </div>
  );
}

export default Header;
