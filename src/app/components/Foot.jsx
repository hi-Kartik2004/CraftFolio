"use client";
import React, { useEffect, useState } from "react";
import CustomSizeSkeleton from "./CustomSizeSkeleton";

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

async function fetchData() {
  const username = sessionStorage.getItem("username") || "default";

  try {
    const userData = await import(`@/app/users/${username}`);
    return userData.default || userData;
  } catch (error) {
    console.error("Error fetching data from users folder:", error);

    const defaultData = await import(`@/app/data`);
    return defaultData.default || defaultData;
  }
}

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

  if (loading || !data) {
    return <CustomSizeSkeleton code={code} />;
  }

  return (
    <div className="bg-primary-foreground p-2 rounded-sm">
      <p className="text-sm text-muted-foreground text-center">
        {data.FootTitle}{" "}
      </p>
    </div>
  );
}

export default Foot;
