"use client";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { AiFillHtml5 } from "react-icons/ai";
import { SiMysql, SiPrisma } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsGit } from "react-icons/bs";
import { SiRadixui } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { FaUbuntu } from "react-icons/fa";
import { BsWindows } from "react-icons/bs";

function LogosTooltip({ icon, message }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {icon === "TbBrandNextjs" && (
            <TbBrandNextjs
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "FaReact" && (
            <FaReact className=" opacity-50 text-muted-foreground" size={75} />
          )}
          {icon === "SiTailwindcss" && (
            <SiTailwindcss
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "DiCss3" && (
            <DiCss3 className=" opacity-50 text-muted-foreground" size={75} />
          )}
          {icon === "RiJavascriptFill" && (
            <RiJavascriptFill
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "AiFillHtml5" && (
            <AiFillHtml5
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "SiMysql" && (
            <SiMysql className=" opacity-50 text-muted-foreground" size={75} />
          )}
          {icon === "SiPrisma" && (
            <SiPrisma
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "BiLogoPhp" && (
            <BiLogoPhp
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "SiCplusplus" && (
            <SiCplusplus
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "TbBrandFramerMotion" && (
            <TbBrandFramerMotion
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "BsGit" && (
            <BsGit className=" opacity-50 text-muted-foreground" size={75} />
          )}
          {icon === "SiRadixui" && (
            <SiRadixui
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "BiLogoFigma" && (
            <BiLogoFigma
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "FaUbuntu" && (
            <FaUbuntu
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
          {icon === "BsWindows" && (
            <BsWindows
              className=" opacity-50 text-muted-foreground"
              size={75}
            />
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default LogosTooltip;
