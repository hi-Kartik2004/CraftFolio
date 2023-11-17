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
import { motion } from "framer-motion";
import userNotFoundData from "@/app/utilpages/UserNotFoundApi";

const code = `function Projects() {
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
      className="container mt-12 relative"
    >
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
          className="mt-10"
        >
          <Tabs defaultValue="all">
            <div className="flex justify-center flex-wrap">
              <TabsList className="flex-wrap h-full">
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
        </motion.div>
      )}
    </motion.section>
  );
}`;

function Projects({ data }) {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    data = data || userNotFoundData;
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading || !data) {
    return <CustomSizeSkeleton code={code} />;
  }
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
      className="container mt-12 relative"
    >
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
          className="mt-10"
        >
          <Tabs defaultValue="all">
            <div className="flex justify-center flex-wrap">
              <TabsList className="flex-wrap h-full">
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
        </motion.div>
      )}
    </motion.section>
  );
}

export default Projects;
