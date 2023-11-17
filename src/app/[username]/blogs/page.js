"use client";
import Navbar from "@/app/components/Navbar";
import { Badge } from "@/app/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Toaster } from "@/app/components/ui/toaster";
import { useToast } from "@/app/components/ui/use-toast";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";

function Blogs({ params }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [userBlogs, setUserBlogs] = useState([]);
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
    const getUserBlogsFromFirestore = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, where("user", "==", params.username));
        const blogsCollection = await getDocs(q);

        if (blogsCollection.empty) {
          console.log("No matching documents.");
          toast({
            title: "Blogs not found!",
            description:
              "Incorrect Username or the user has not created a blog yet!",
          });

          return;
        }

        const blogsData = blogsCollection.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setUserBlogs(blogsData);
        toast({
          title: "Data Fetched",
          description: "Our APIs are working fine!",
        });
      } catch (error) {
        console.error("Error fetching user blogs:", error);
        toast({
          title: "Something went wrong",
          description: `Head over to our github to know more about the error ${error}`,
        });
      }
    };

    // Call the function to get user blogs
    getUserBlogsFromFirestore();
    setLoading(false);
  }, [params.username]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center container">
        <Skeleton className="w-full h-[10vh] m-4" />
        <div className="flex flex-wrap justify-around items-center w-full gap-4 md:mt-10 mt-6">
          <Skeleton className="w-[300px] h-[400px] " />
          <Skeleton className="w-[300px] h-[400px]" />
          <Skeleton className="w-[300px] h-[400px]" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Toaster />
      <Navbar data={data} />
      <div className="container mt-6 flex flex-wrap justify-around gap-4">
        {userBlogs.map((blog) => (
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
            <Card className="bg-card  max-w-[400px] w-full hover:bg-primary-foreground duration-500">
              <CardHeader>
                <div className="mb-2 flex justify-between">
                  <Badge className="bg-right-gradient">
                    {blog.blog.length} characters
                  </Badge>

                  <Link href={`/${params.username}/blogs/${blog.id}`}>
                    <GoLinkExternal size={25} />
                  </Link>
                </div>

                <CardTitle className="text-lg">
                  <Link href={`/${params.username}/blogs/${blog.id}`}>
                    {blog.title || "No title provided"}
                  </Link>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {blog.description || "No description provided"}
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src={`https://source.unsplash.com/random/900×700/?${blog.title}/350x350`}
                  alt="coming from unsplash"
                  className="bg-secondary-foreground rounded-md h-[200px] w-full object-cover object-top"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
