import React from "react";
import { Badge } from "../components/ui/badge";
import { BsGithub } from "react-icons/bs";

function SectionHeading({
  badge,
  title,
  gradientText,
  description,
  githubBadge,
}) {
  return (
    <div>
      <Badge className="my-2">
        {" "}
        {githubBadge ? <BsGithub className="mr-2" /> : ""} {badge}
      </Badge>
      <h1 className="font-bold text-2xl mb-2">
        {title}
        <span className="bg-gradient-to-b from-left-gradient to-right-gradient bg-clip-text text-transparent">
          {gradientText}
        </span>
      </h1>
      <p className=" text-muted-foreground">{description}</p>
    </div>
  );
}

export default SectionHeading;
