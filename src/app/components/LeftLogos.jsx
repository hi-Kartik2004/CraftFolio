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
];

function LeftLogos() {
  return (
    <Marquee direction="left" className="flex gap-6">
      <div className="flex gap-4">
        {logosData.map((logo, index) => (
          <LogosTooltip key={index} icon={logo.icon} message={logo.message} />
        ))}
      </div>
    </Marquee>
  );
}

export default LeftLogos;
