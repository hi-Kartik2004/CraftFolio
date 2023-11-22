"use client";
import React, { useEffect, useState } from "react";
import CustomSizeSkeleton from "./CustomSizeSkeleton";
import Link from "next/link";
import { BiLogoGithub } from "react-icons/bi";
import { Button } from "./ui/button";

const code = `function Foot() {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, [sessionStorage]);

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
    <div className="bg-primary-foreground p-2 rounded-sm">
      <p className="text-sm text-muted-foreground text-center">{data.FootTitle} </p>
    </div>
  );
}`;

// async function fetchData() {
//   const username = sessionStorage.getItem("username") || "default";

//   try {
//     const userData = await import(`@/app/users/${username}`);
//     return userData.default || userData;
//   } catch (error) {
//     console.error("Error fetching data from users folder:", error);

//     const defaultData = await import(`@/app/data`);
//     return defaultData.default || defaultData;
//   }
// }

function Foot() {
  const [loading, setLoading] = useState(true);
  const [showCode, setShowCode] = useState(false);
  const [data, setData] = useState(null); // Initialize data as null

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  function handleShowCode() {
    setShowCode(!showCode);
  }

  if (loading) {
    return <CustomSizeSkeleton code={code} />;
  }

  return (
    <div className="bg-primary-foreground p-2 rounded-sm">
      <div className="container flex justify-center flex-wrap">
        <p className="text-sm text-muted-foreground text-center flex flex-wrap gap-2 items-center">
          💖{" "}
          <Button variant="link" className="p-0 m-0 font-sm">
            <Link
              href="https://github.com/hi-kartik2004/craftfolio"
              className="flex-wrap flex gap-2 items-center"
              target="_blank"
            >
              Visit our Github Repo <BiLogoGithub size={17} />
            </Link>
          </Button>{" "}
          Crafted with Next.js 14, Tailwind CSS, Framer Motion, Shadcn UI, Radix
          UI, and React Icons
        </p>
      </div>
    </div>
  );
}

export default Foot;
