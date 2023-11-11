"use client";
import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import SearchTech from "../components/SearchTech";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";
import { Button } from "../components/ui/button";
import SkillsCard from "../components/SkillsCard";
import { BiCode } from "react-icons/bi";
import CodeSnippet from "../components/CodeSnippet";
import { IoIosArrowBack } from "react-icons/io";

const code = `const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 5;

const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = skillsData.slice(indexOfFirstCard, indexOfLastCard);

const paginate = (pageNumber) => setCurrentPage(pageNumber);
const MockCode = { code: "import something\ndo something\nNext Line here" };
const [showCode, setShowCode] = useState(false);

function handleShowCode() {
  setShowCode(!showCode);
}

return (
  <section className="container relative">
    {showCode ? (
      <IoIosArrowBack
        className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
        onClick={handleShowCode}
      />
    ) : (
      <BiCode
        className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
        onClick={handleShowCode}
      />
    )}
    <div className="flex justify-between flex-wrap items-center">
      <SectionHeading
        title="My "
        gradientText="Skills!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas autem nostrum."
        badge="Full Stack Developer Student"
      />

      {/* <div className="my-4">
        <SearchTech />
      </div> */}
    </div>
    {showCode ? (
      <div className="my-4">
        <CodeSnippet text={code} />
      </div>
    ) : (
      <div className="my-10 flex justify-center gap-10 items-center flex-wrap">
        <div className="flex justify-center gap-10 items-center flex-wrap">
          {currentCards.map((skill, index) => (
            <SkillsCard
              key={index}
              badgeText={skill.badgeText}
              title={skill.title}
              description={skill.description}
              progress={skill.progress}
            />
          ))}
        </div>
        {/* Pagination buttons */}
        <div className="gap-4 flex">
          {Array.from(
            { length: Math.ceil(skillsData.length / cardsPerPage) },
            (_, i) => (
              <Button
                variant="outline"
                key={i}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </Button>
            )
          )}
        </div>
      </div>
    )}
  </section>
);`;

const skillsData = [
  {
    badgeText: "500+ DSA & CP Questions solved",
    title: "C and C++",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 90,
  },
  {
    badgeText: "Advanced",
    title: "HTML 5",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 90,
  },
  {
    badgeText: "Advanced",
    title: "CSS 5",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 90,
  },
  {
    badgeText: "Intermediate",
    title: "JavaScript",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 75,
  },
  {
    badgeText: "Intermediate",
    title: "PHP",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 75,
  },
  {
    badgeText: "Intermediate",
    title: "MySql",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 75,
  },
  {
    badgeText: "Intermediate",
    title: "NextJs",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 75,
  },
  {
    badgeText: "Intermediate",
    title: "Firebase",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 75,
  },
  {
    badgeText: "Advanced",
    title: "Radix",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 95,
  },
  {
    badgeText: "Advanced",
    title: "Git & Github",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 95,
  },
  {
    badgeText: "Beginner",
    title: "Docker",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 50,
  },
  {
    badgeText: "Beginner",
    title: "Angular",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 50,
  },
  {
    badgeText: "Advanced",
    title: "Figma & Adobe Illustrator",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 80,
  },
  {
    badgeText: "Intermediate",
    title: "Video Editing",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 60,
  },
  {
    badgeText: "Advanced",
    title: "Content Creation/Curation",
    description: "lorem niing nirngi nrin ginri gnirn ignring irnign irng",
    progress: 90,
  },
  // Add other SkillsCard objects as needed
];

function Skills() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = skillsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const MockCode = { code: "import something\ndo something\nNext Line here" };
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  return (
    <section className="container relative">
      {showCode ? (
        <IoIosArrowBack
          className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
          onClick={handleShowCode}
        />
      ) : (
        <BiCode
          className="absolute right-2 top-0 text-xl bg-muted rounded-sm cursor-pointer"
          onClick={handleShowCode}
        />
      )}
      <div className="flex justify-between flex-wrap items-center">
        <SectionHeading
          title="My "
          gradientText="Skills!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptas autem nostrum."
          badge="Full Stack Developer Student"
        />

        {/* <div className="my-4">
          <SearchTech />
        </div> */}
      </div>
      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <div className="my-10 flex justify-center gap-10 items-center flex-wrap">
          <div className="flex justify-center gap-10 items-center flex-wrap">
            {currentCards.map((skill, index) => (
              <SkillsCard
                key={index}
                badgeText={skill.badgeText}
                title={skill.title}
                description={skill.description}
                progress={skill.progress}
              />
            ))}
          </div>
          {/* Pagination buttons */}
          <div className="gap-4 flex">
            {Array.from(
              { length: Math.ceil(skillsData.length / cardsPerPage) },
              (_, i) => (
                <Button
                  variant="outline"
                  key={i}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
