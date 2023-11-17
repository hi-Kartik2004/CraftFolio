"use client";
import React from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { useToast } from "@/app/components/ui/use-toast";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Blog from "@/app/components/Blog";
import { Skeleton } from "@/app/components/ui/skeleton";
import Foot from "@/app/components/Foot";

function page({ params }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);
  const [data, setData] = useState([]);

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
    setLoading(false);
  }, []);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogDocRef = doc(db, "blogs", params.id);
        const blogSnapshot = await getDoc(blogDocRef);

        if (blogSnapshot.exists()) {
          const blogData = blogSnapshot.data();
          setBlogData(blogData);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [params.id]);

  return (
    <>
      <Navbar data={data} />
      {loading ? (
        <div className="container">
          <Skeleton className="w-full h-[90vh] " />
        </div>
      ) : (
        <div className="container mt-4">
          <div className="flex justify-between flex-wrap items-center">
            <p className="text-xs text-muted-foreground">id: {params.id}</p>
            <Button variant="secondary">
              <Link
                href={`https://github.com/hi-Kartik2004/CraftFolio/issues/new?assignees=&labels=&projects=&template=report-blog.md&title=Blog Report Aganist:${params.username} | id: ${params.id}`}
                target="_blank"
              >
                Report
              </Link>
            </Button>
          </div>
          {blogData && (
            <div className="mt-4">
              <div className="object-cover w-full lg:h-[200px] h-[150px] overflow-hidden">
                <img
                  src={`https://source.unsplash.com/random/900x700/?${encodeURIComponent(
                    blogData.title
                  )}/1920X1080`}
                  className="w-full h-full object-cover rounded-lg"
                  alt="inside blog image"
                />
              </div>
              <div className="mt-6">
                <h1 className="text-4xl font-bold">{blogData.title}</h1>
                <p className="text-muted-foreground mt-4">
                  {blogData.description}
                </p>
              </div>

              <div className="mt-6">
                <Blog code={blogData.blog} />
              </div>
            </div>
          )}

          <Foot />
        </div>
      )}
    </>
  );
}

export default page;
