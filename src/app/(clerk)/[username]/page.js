"use client";
import React, { useEffect, useState } from "react";
import Home from "@/app/page";
import Portfolio from "@/app/Portfolio";
import { useToast } from "@/app/components/ui/use-toast";
import { Toaster } from "@/app/components/ui/toaster";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Skeleton } from "@/app/components/ui/skeleton";
import UserNotFound from "@/app/components/UserNotFound";
import NotFoundData from "@/app/utilpages/defaultFirebaseTemplate";
import Loader from "@/app/components/Loader";

function page({ params }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [fetching, setFetching] = useState(false);
  async function getPortfolioDetailsFromFirestore() {
    setFetching(true);
    try {
      const portFolioCollection = collection(db, "portfolios");

      const q = query(
        portFolioCollection,
        where("user", "==", params.username)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No matching documents.");
        toast({
          title: "User not found!",
          description:
            "Incorrect Username or the user has not created a portfolio yet!",
        });
        setData(NotFoundData);
        return;
      }

      const portFolioDoc = querySnapshot.docs[0];
      const portFolioData = portFolioDoc.data();

      const portFolioCode = portFolioData.portfolioCode;
      console.log("Portfolio Code:", portFolioCode);
      // toast({
      //   title: `You are viewing ${params.username}`,
      //   description: "Data Feteched, Our APIs are working fine!",
      // });
      setData(portFolioCode);
    } catch (error) {
      console.error("Error getting blog:", error);
      toast({
        title: "Something went wrong",
        description: "Head over to our github to know more",
      });
      throw error;
    }

    setFetching(false);
  }

  useEffect(() => {
    getPortfolioDetailsFromFirestore();
    setLoading(false);
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (!params.username) {
    sessionStorage.setItem("username", "hi-kartik2004");
  }

  if (typeof window !== "undefined")
    sessionStorage.setItem("username", params.username);

  return (
    <>
      <Toaster />
      <Portfolio data={data} />
    </>
  );
}

export default page;
