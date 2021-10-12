import React from "react";

function Header() {
  return (
    <div
      data-testid="Header-component"
      className="h-[50px] flex flex-row min-w-full shadow-md"
    >
      <div className="m-auto flex items-center">
        <h1 className="" data-testid="Header-heading">
          Rick & Morty Encyclopedia
        </h1>
        {/* TODO: logo */}
      </div>
      <div data-testid="Header-buttons-area">{/* buttons area */}</div>
    </div>
  );
}

export default Header;
