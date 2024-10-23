import React from "react";
import "./Button.css";

const Button = ({
  children,
  size,
  variant,
  color,
  customBg,
  customColor,
  loading,
  loadingText,
  ...props
}) => {
  const classes = `btn ${variant} ${size} ${color} ${loading ? "loading" : ""}`;
  return (
    <button
      className={classes}
      style={{
        backgroundColor: customBg,
        color: customColor,
      }}
    >
      {/* add loading animation*/}
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
