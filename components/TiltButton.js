import React from "react";

const TiltButton = ({
  children,
  onClick,
  btnColor = "bg-yellow-400",
  labelColor = "text-gray-900",
  type = "rounded",
  disabled = false,
  props,
}) => {
  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor || "white",
  };
  const outlineStyles = {
    border: `1px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: "white",
  };
  const outlineHoverStyle = {
    color: labelColor || "white",
    backgroundColor: btnColor,
  };

  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor || "white",
    borderRadius: "25px",
  };
  const disabledStyle = {
    cursor: "default",
    backgroundColor: btnColor,
    color: labelColor || "white",
    opacity: 0.4,
  };
  const blockStyles = {
    width: "95%",
    margin: "0 auto",
  };

  let btnStyle;
  switch (type) {
    case "rounded":
      btnStyle = roundedStyle;
      break;
    case "block":
      btnStyle = blockStyles;
      break;
    case "outline":
      if (hover) {
        btnStyle = outlineHoverStyle;
      } else {
        btnStyle = outlineStyles;
      }
      break;
    default:
      btnStyle = {
        backgroundColor: btnColor,
        color: labelColor || "white",
      };
      break;
  }

  const toggleHover = () => {};
  return (
    <button
      style={
        disabled
          ? { ...commonStyles, ...btnStyle, ...disabledStyle }
          : { ...commonStyles, ...btnStyle }
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      {...props}
      type="button"
      onClick={!disabled ? onClick : () => {}}
      className=""
    >
      {children || "button"}
    </button>
  );
};

export default TiltButton;
