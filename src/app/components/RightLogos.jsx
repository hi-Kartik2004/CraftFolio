"use client";

const logosData = [
  {
    icon: "BiLogoPhp", // Icon name for PHP
    message: "PHP",
  },
  {
    icon: "SiCplusplus", // Icon name for C++
    message: "C++",
  },
  {
    icon: "TbBrandFramerMotion", // Icon name for Framer Motion
    message: "Framer Motion",
  },
  {
    icon: "BsGit", // Icon name for Git
    message: "Git",
  },
  {
    icon: "SiRadixui", // Icon name for Radix UI
    message: "Radix UI",
  },
  {
    icon: "BiLogoFigma", // Icon name for Figma
    message: "Figma",
  },
  {
    icon: "FaUbuntu", // Icon name for Ubuntu
    message: "Ubuntu",
  },
  {
    icon: "BsWindows", // Icon name for Windows
    message: "Windows",
  },
];

import React from "react";
import LogosTooltip from "./LogosTooltip";
import Marquee from "react-fast-marquee";

const Marquee1 = () => {
  return (
    <Marquee direction="right" className="flex gap-6">
      <div className="flex gap-4">
        {logosData.map((logo, index) => (
          <LogosTooltip key={index} icon={logo.icon} message={logo.message} />
        ))}
      </div>
    </Marquee>
  );
};

const App = () => {
  return (
    <div className="flex gap-6">
      <Marquee1 />
    </div>
  );
};

export default App;
