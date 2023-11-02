"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import LogosTooltip from "./LogosTooltip";

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
  const logoWidth = 110; // Width of each logo in pixels
  const gap = 25; // Gap between logos in pixels

  const logosContainerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    // Calculate total width of the logos container dynamically based on rendered logos
    const containerWidth = logosContainerRef.current.offsetWidth;
    const totalLogosWidth =
      logosData.length * logoWidth + (logosData.length - 1) * gap;

    // Calculate the number of logos to fill the container
    const logosToFillContainer = Math.ceil(containerWidth / (logoWidth + gap));
    const requiredLogosWidth = logosToFillContainer * (logoWidth + gap);

    // Calculate total width based on the number of logos required to fill the container
    setTotalWidth(
      requiredLogosWidth > totalLogosWidth
        ? requiredLogosWidth
        : totalLogosWidth
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={logosContainerRef}>
        <motion.div
          style={{
            display: "flex",
            gap: `${gap}px`,
          }}
          initial={{ x: "0px" }}
          animate={{
            x: [`${totalWidth}px`, `-${totalWidth}px`],
          }}
          transition={{
            duration: totalWidth / 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logosData.map((logo, index) => (
            <LogosTooltip key={index} icon={logo.icon} message={logo.message} />
          ))}
        </motion.div>
      </div>

      <div ref={logosContainerRef}>
        <motion.div
          style={{
            display: "flex",
            gap: `${gap}px`,
          }}
          animate={{
            x: [`${2 * totalWidth}px`, `-${totalWidth}px`],
          }}
          transition={{
            duration: totalWidth / 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logosData.map((logo, index) => (
            <LogosTooltip key={index} icon={logo.icon} message={logo.message} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default LeftLogos;
