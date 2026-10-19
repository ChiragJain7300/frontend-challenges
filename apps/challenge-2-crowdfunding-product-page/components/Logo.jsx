import React from "react";

const Logo = ({ fillBg, fillIcon, className = "" }) => (
  <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <g fill="current" fill-rule="evenodd">
      <circle fill={fillBg} cx="28" cy="28" r="28" />
      <path fill={fillIcon} d="M23 19v18l5-5.058L33 37V19z" />
    </g>
  </svg>
);

export default Logo;


// #2F2F2F", "#B1B1B1"
