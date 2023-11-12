"use client";
import React from "react";
import LogosTooltip from "./LogosTooltip";
import Marquee from "react-fast-marquee";

const logosData = [
  { icon: "TbBrandNextjs", message: "Nextjs 14" },
  { icon: "FaReact", message: "Reactjs" },
  { icon: "SiTailwindcss", message: "Tailwind css" },
  { icon: "DiCss3", message: "CSS3" },
  { icon: "RiJavascriptFill", message: "Javascript" },
  { icon: "AiFillHtml5", message: "HTML5" },
  { icon: "SiMysql", message: "MySQL" },
  { icon: "SiPrisma", message: "Prisma" },
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
function SingleLogos({ direction }) {
  return (
    <Marquee direction={direction} className="flex gap-6">
      <div className="flex gap-6">
        {logosData.map((logo, index) => (
          <LogosTooltip key={index} icon={logo.icon} message={logo.message} />
        ))}
      </div>
    </Marquee>
  );
}

export default SingleLogos;
