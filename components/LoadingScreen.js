import React from "react";
import Image from "next/image";

function LoadingScreen() {
  return (
    <div className="h-screen w-screen flex flex-grow items-center justify-center m-auto bg-gray-200 dark:bg-gray-700">
      <Image
        src="/portal.gif"
        alt="loading image"
        height={200}
        width={200}
        className="animate-pulse"
        priority={true}
      />
    </div>
  );
}

export default LoadingScreen;
