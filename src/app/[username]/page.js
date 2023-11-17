"use client";
import React, { useEffect, useState } from "react";
import Home from "../page";
import Portfolio from "../Portfolio";
import { useToast } from "../components/ui/use-toast";
import { Toaster } from "../components/ui/toaster";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Skeleton } from "../components/ui/skeleton";

function page({ params }) {

  const [data, setData] = React.useState(null);
  const { toast } = useToast();
  async function getPortfolioDetailsFromFirestore() {
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
        return;
      }

      const portFolioDoc = querySnapshot.docs[0];
      const portFolioData = portFolioDoc.data();

      const portFolioCode = portFolioData.portfolioCode;
      console.log("Portfolio Code:", portFolioCode);
      toast({
        title: "Data Fetched",
        description: "Our APIs are working fine!",
      });
      setData(portFolioCode);
    } catch (error) {
      console.error("Error getting blog:", error);
      toast({
        title: "Something went wrong",
        description: "Head over to our github to know more",
      });
      throw error;
    }
  }

  useEffect(() => {
    getPortfolioDetailsFromFirestore();
  }, []);



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
