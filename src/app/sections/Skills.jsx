"use client";
import userNotFoundData from "@/app/utilpages/UserNotFoundApi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiCode } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import CodeSnippet from "../components/CodeSnippet";
import CustomSizeSkeleton from "../components/CustomSizeSkeleton";
import SectionHeading from "../components/SectionHeading";
import SkillsCard from "../components/SkillsCard";
import { Button } from "../components/ui/button";

const code = `function Skills() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.skillsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const MockCode = { code: "import something\ndo something\nNext Line here" };
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
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
      className="container relative"
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
      <div className="flex justify-between flex-wrap items-center">
        <SectionHeading
          badge={data.SkillsBadge}
          title={data.SkillsTitle}
          gradientText={data.SkillsTitleGradient}
          description={data.SkillsDescription}
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
              >
                <SkillsCard
                  key={index}
                  badgeText={skill.badgeText}
                  title={skill.title}
                  description={skill.description}
                  progress={skill.progress}
                />
              </motion.div>
            ))}
          </div>
          {/* Pagination buttons */}
          <div className="gap-4 flex">
            {Array.from(
              { length: Math.ceil(data.skillsData.length / cardsPerPage) },
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
    </motion.section>
  );
}`;

function Skills({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  data = data || userNotFoundData;
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

  const cardsPerPage = 5;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.skillsData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
      className="container relative"
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
      <div className="flex justify-between flex-wrap items-center">
        <SectionHeading
          badge={data.SkillsBadge}
          title={data.SkillsTitle}
          gradientText={data.SkillsTitleGradient}
          description={data.SkillsDescription}
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
              >
                <SkillsCard
                  key={index}
                  badgeText={skill.badgeText}
                  title={skill.title}
                  description={skill.description}
                  progress={skill.progress}
                />
              </motion.div>
            ))}
          </div>
          {/* Pagination buttons */}
          <div className="gap-4 flex">
            {Array.from(
              { length: Math.ceil(data.skillsData.length / cardsPerPage) },
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
    </motion.section>
  );
}

export default Skills;
