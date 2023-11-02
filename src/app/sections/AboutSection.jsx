import React from "react";
import AboutCard from "../components/AboutCard";

const aboutData = [
  {
    icon: "BsCodeSlash",
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas autem nostrum.",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas autem nostrum.",
    buttonMsg: "Check it out",
  },
  {
    icon: "BsCodeSlash",
    title:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas autem nostrum.",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas autem nostrum.",
    buttonMsg: "Check it out",
  },
];

function AboutSection() {
  return (
    <section className="container mt-12">
      <div>
        <h1 className="text-2xl font-bold">What I am doing?</h1>
        <p className="text-sm text-muted-foreground">
          {"{ name: 'Kartikeya', coding: true }"}
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        {aboutData.map((data, key) => {
          return <AboutCard key={key} {...data} />;
        })}
      </div>
    </section>
  );
}

export default AboutSection;
