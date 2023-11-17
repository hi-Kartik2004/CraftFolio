"use client";
import { useEffect, useState } from "react";
import CodeSnippet from "../components/CodeSnippet";

import { BiCode } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import SectionHeading from "../components/SectionHeading";
// import data from `@/app/users/${localStorage.getItem("username")}`;
import { motion } from "framer-motion";
import CustomSizeSkeleton from "../components/CustomSizeSkeleton";
import userNotFoundData from "@/app/utilpages/UserNotFoundApi";

const code = `function AboutMe() {
  const [showCode, setShowCode] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <CustomSizeSkeleton code={code} />;
  }

  function handleShowCode() {
    setShowCode(!showCode);
  }

  const rotateStyle =
    window.innerWidth <= 640 ? { rotate: -12 } : { rotate: 0 };

  const rotateStyleRight =  window.innerWidth <= 640 ? { rotate: 12 } : { rotate: 0 };

  return (
    <motion.section
      className="container mt-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
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
      <SectionHeading
        title={data.AboutTitle}
        description={data.AboutDescription}
        gradientText={data.AboutTitleGradient}
        badge={data.AboutBadge}
      />

      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <>
          <div className="mt-4 flex justify-center flex-col items-center">
            <div className="flex max-w-[750px]  my-10 w-full relative justify-center">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0, ...rotateStyle },
                  hidden: { opacity: 0, x: 10, ...rotateStyle },
                }}
                src={data.AboutImageLeft}
                alt="dp"
                className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[150px] h-[150px] bg-red-500 rounded-md absolute left-1 -rotate-12 md:rotate-0"
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
                src={data.AboutImageCenter}
                alt="dp"
                className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[150px] h-[150px] bg-blue-500 rounded-md rotate-0 absolute m-auto left-0 right-0 z-10"
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0, ...rotateStyleRight },
                  hidden: { opacity: 0, x: 10, ...rotateStyleRight },
                }}
                src={data.AboutImageRight}
                alt="dp"
                className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[150px] h-[150px] bg-green-500 rounded-md absolute right-1 rotate-12 md:rotate-0"
              />
            </div>

            <div className="flex flex-wrap w-full lg:flex-nowrap md:flex-row-reverse gap-4 items-start mt-[150px] sm:mt-[225px] mx-2 ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
                className="w-full lg:max-w-[420px]"
              >
                <CodeSnippet text={data.AboutMockCode} />
              </motion.div>

              <div className="mt-6 max-w-[1050px] w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 10 },
                  }}
                  className="text-muted-foreground"
                >
                  {data.AboutMainDescription()}

                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 10 },
                    }}
                    className="mt-6"
                  >
                    {data.AboutOtherDescription()}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
}`;

function AboutMe({ data }) {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);

  data = data || userNotFoundData;

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading || !data) {
    return <CustomSizeSkeleton code={code} />;
  }

  const rotateStyle =
    window.innerWidth <= 640 ? { rotate: -12 } : { rotate: 0 };

  const rotateStyleRight =
    window.innerWidth <= 640 ? { rotate: 12 } : { rotate: 0 };

  return (
    <motion.section
      className="container mt-12 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
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
      <SectionHeading
        title={data.AboutTitle}
        description={data.AboutDescription}
        gradientText={data.AboutTitleGradient}
        badge={data.AboutBadge}
      />

      {showCode ? (
        <div className="my-4">
          <CodeSnippet text={code} />
        </div>
      ) : (
        <>
          <div className="mt-4 flex justify-center flex-col items-center">
            <div className="flex max-w-[750px]  my-10 w-full relative justify-center">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0, ...rotateStyle },
                  hidden: { opacity: 0, x: 10, ...rotateStyle },
                }}
                src={data.AboutImageLeft}
                alt="dp"
                className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[150px] h-[150px] bg-red-500 rounded-md absolute left-1 -rotate-12 md:rotate-0"
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -10 },
                }}
                src={data.AboutImageCenter}
                alt="dp"
                className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[150px] h-[150px] bg-blue-500 rounded-md rotate-0 absolute m-auto left-0 right-0 z-10"
              />
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0, ...rotateStyleRight },
                  hidden: { opacity: 0, x: 10, ...rotateStyleRight },
                }}
                src={data.AboutImageRight}
                alt="dp"
                className="sm:w-[220px] overflow-hidden sm:h-[220px] w-[150px] h-[150px] bg-green-500 rounded-md absolute right-1 rotate-12 md:rotate-0"
              />
            </div>

            <div className="flex flex-wrap w-full lg:flex-nowrap md:flex-row-reverse gap-4 items-start mt-[150px] sm:mt-[225px] mx-2 ">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 },
                }}
                className="w-full lg:max-w-[420px]"
              >
                <CodeSnippet text={data.AboutMockCode} />
              </motion.div>

              <div className="mt-6 max-w-[1050px] w-full">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 10 },
                  }}
                  className="text-muted-foreground"
                >
                  {data.AboutMainDescription}

                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 10 },
                    }}
                    className="mt-6"
                  >
                    {data.AboutOtherDescription}
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
}

export default AboutMe;
