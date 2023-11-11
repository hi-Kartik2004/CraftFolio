"use client";
import { BsGithub } from "react-icons/bs";
import ProjectTab from "../components/ProjectTab";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import SectionHeading from "../components/SectionHeading";
import SearchTech from "../components/SearchTech";
import { BiCode } from "react-icons/bi";
import CodeSnippet from "../components/CodeSnippet";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const projectDetails = [
  {
    projectId: 0,
    projectName: "Project1",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    projectImage:
      "https://user-images.githubusercontent.com/111000515/251038755-3eed0115-7085-4b5c-8bee-9952b18adc09.png",
    projectType: "fullstack",
    projectTechStack: ["react", "nextjs", "tailwindcss"],
    projectGithubLink: "https://github.com/hi-kartik2004",
    projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  },
  {
    projectId: 1,
    projectName: "Project1",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    projectImage:
      "https://user-images.githubusercontent.com/111000515/282149083-1d053699-0281-4c93-a6fb-2b646d7bbd1b.png",
    projectType: "fullstack",
    projectTechStack: ["react", "nextjs", "tailwindcss"],
    projectGithubLink: "https://github.com/hi-kartik2004",
    projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  },
  {
    projectId: 2,
    projectName: "Project2",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    projectImage: "https://i.postimg.cc/sDqdnrwS/image.png",
    projectType: "frontend",
    projectTechStack: ["react", "nextjs", "tailwindcss"],
    projectGithubLink: "https://github.com/hi-kartik2004",
    projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  },
  {
    projectId: 5,
    projectName: "Project5",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    projectImage: "https://i.postimg.cc/NFVs7rK2/image.png",
    projectType: "frontend",
    projectTechStack: ["react", "nextjs", "tailwindcss"],
    projectGithubLink: "https://github.com/hi-kartik2004",
    projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  },

  {
    projectId: 4,
    projectName: "frontend",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    projectImage: "https://i.postimg.cc/mkr31K92/image.png",
    projectType: "frontend",
    projectTechStack: ["react", "nextjs", "tailwindcss"],
    projectGithubLink: "https://github.com/hi-kartik2004",
    projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  },
  {
    projectId: 3,
    projectName: "Project3",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
    projectImage:
      "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/thumbnail-default@2x.png",
    projectType: "backend",
    projectTechStack: ["react", "nextjs", "tailwindcss"],
    projectGithubLink: "https://github.com/hi-kartik2004",
    projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  },
  // {
  //   projectId: 6,
  //   projectName: "Project3",
  //   projectDescription:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
  //   projectImage:
  //     "https://hi-kartik2004.github.io/Portfolio/assets/img/wie_v13-02.png",
  //   projectType: "design",
  //   projectTechStack: ["react", "nextjs", "tailwindcss"],
  //   projectGithubLink: "https://github.com/hi-kartik2004",
  //   projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  // },
  // {
  //   projectId: 7,
  //   projectName: "Project3",
  //   projectDescription:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure molestiae necessitatibus.",
  //   projectImage:
  //     "https://i.postimg.cc/cC9QZTrg/image.png",
  //   projectType: "design",
  //   projectTechStack: ["react", "nextjs", "tailwindcss"],
  //   projectGithubLink: "https://github.com/hi-kartik2004",
  //   projectHostedLink: "https://hi-kartik2004.github.io/Portfolio",
  // },
];

const code = `const [showCode, setShowCode] = useState(false);

function handleShowCode() {
  setShowCode(!showCode);
}
return (
  <section className="container mt-12 relative">
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
    <div className="flex flex-wrap justify-between items-center gap-4">
      <SectionHeading
        title="My"
        gradientText="Projects!"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita laboriosam quidem!"
        badge="hi-kartik2004"
        githubBadge={true}
      />

      <SearchTech />
    </div>
    {showCode ? (
      <div className="my-4">
        <CodeSnippet text={code} />
      </div>
    ) : (
    <div className="mt-10">
      <Tabs defaultValue="all">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
        </div>

        <div className="my-6">
          <ProjectTab projectDetails={projectDetails} value="all" />
          <ProjectTab projectDetails={projectDetails} value="frontend" />
          <ProjectTab projectDetails={projectDetails} value="fullstack" />
          <ProjectTab projectDetails={projectDetails} value="backend" />
          <ProjectTab projectDetails={projectDetails} value="design" />
        </div>
      </Tabs>
    </div>)}
  </section>`;

function Projects() {
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }
  return (
    <section className="container mt-12 relative">
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
      <div className="flex flex-wrap justify-between items-center gap-4">
        <SectionHeading
          title="My"
          gradientText="Projects!"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi expedita laboriosam quidem!"
          badge="hi-kartik2004"
          githubBadge={true}
        />

        <SearchTech />
      </div>
      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <div className="mt-10">
          <Tabs defaultValue="all">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
            </div>

            <div className="my-6">
              <ProjectTab projectDetails={projectDetails} value="all" />
              <ProjectTab projectDetails={projectDetails} value="frontend" />
              <ProjectTab projectDetails={projectDetails} value="fullstack" />
              <ProjectTab projectDetails={projectDetails} value="backend" />
              <ProjectTab projectDetails={projectDetails} value="design" />
            </div>
          </Tabs>
        </div>
      )}
    </section>
  );
}

export default Projects;
