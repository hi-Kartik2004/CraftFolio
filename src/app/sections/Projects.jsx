"use client";
import ProjectTab from "../components/ProjectTab";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import SectionHeading from "../components/SectionHeading";
import SearchTech from "../components/SearchTech";
import { BiCode } from "react-icons/bi";
import CodeSnippet from "../components/CodeSnippet";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect, useState } from "react";
import data from "../data";
import CustomSizeSkeleton from "../components/CustomSizeSkeleton";

const code = `<section className="container mt-12 relative">
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
    title={data.ProjectTitle}
    gradientText={data.ProjectTitleGradient}
    description={data.ProjectDescription}
    badge={data.ProjectBadge}
    githubBadge={true}
  />

  <SearchTech technologies={data.ProjectTechnologies} />
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
        <ProjectTab projectDetails={data.projectDetails} value="all" />
        <ProjectTab
          projectDetails={data.projectDetails}
          value="frontend"
        />
        <ProjectTab
          projectDetails={data.projectDetails}
          value="fullstack"
        />
        <ProjectTab
          projectDetails={data.projectDetails}
          value="backend"
        />
        <ProjectTab projectDetails={data.projectDetails} value="design" />
      </div>
    </Tabs>
  </div>
)}
</section>`;

function Projects() {
  const [showCode, setShowCode] = useState(false);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  if (loading) {
    return <CustomSizeSkeleton code={code} />;
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
          title={data.ProjectTitle}
          gradientText={data.ProjectTitleGradient}
          description={data.ProjectDescription}
          badge={data.ProjectBadge}
          githubBadge={true}
        />

        <SearchTech technologies={data.ProjectTechnologies} />
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
              <ProjectTab projectDetails={data.projectDetails} value="all" />
              <ProjectTab
                projectDetails={data.projectDetails}
                value="frontend"
              />
              <ProjectTab
                projectDetails={data.projectDetails}
                value="fullstack"
              />
              <ProjectTab
                projectDetails={data.projectDetails}
                value="backend"
              />
              <ProjectTab projectDetails={data.projectDetails} value="design" />
            </div>
          </Tabs>
        </div>
      )}
    </section>
  );
}

export default Projects;
