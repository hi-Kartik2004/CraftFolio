"use client";
import Navbar from "@/app/components/Navbar";
import { Alert, AlertDescription } from "@/app/components/ui/alert";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
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
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiNoSignal } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";

function Blogs({ params }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [userBlogs, setUserBlogs] = useState([]);
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);

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
      // toast({
      //   title: "Data Fetched",
      //   description: "Our APIs are working fine!",
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

  useEffect(() => {
    const getUserBlogsFromFirestore = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(
          blogsRef,
          where("user", "==", params.username),
          orderBy("timestamp", "desc")
        );
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
        // toast({
        //   title: `Loaded ${params.username}'s Blogs`,
        //   description: `You can visit their portfolio out at the /${params.username} route`,
        // });
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

  if (loading || fetching) {
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
      <div className="container my-4">
        <Button variant={"link"} asChild>
          <Link
            href={`/${params.username == "default" ? "" : params.username}`}
          >
            {" "}
            &larr;{" "}
            {params.username == "default" ? "home" : "/" + params.username}
          </Link>
        </Button>
      </div>
      <div className="container my-6 flex flex-wrap justify-around gap-4">
        {userBlogs.map((blog, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 10 },
            }}
            key={index}
          >
            <Card className="bg-card xs:w-[350px] w-[280px] h-[400px] hover:bg-primary-foreground duration-500 items-baseline flex-col flex justify-between overflow-hidden">
              <CardHeader className="h-full w-full">
                <div className="mb-2 flex justify-between">
                  <Badge className="bg-right-gradient">
                    {Math.ceil(blog.blog.length / 500)} minutes read.
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
                <div className="line-clamp-2">
                  <p className="text-sm text-muted-foreground break-words">
                    {blog.description || "No description provided"}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="w-full">
                <img
                  src={`https://source.unsplash.com/random/350X350/?${blog.title}`}
                  alt="coming from unsplash"
                  className="bg-secondary-foreground rounded-md h-[200px] w-full object-cover object-top"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {userBlogs.length === 0 && (
          <Alert className="flex items-center gap-2">
            <BiNoSignal size={20} />
            <AlertDescription className="flex items-center">
              <p className="text-lg">
                User Has got no blogs or incorrect username!
              </p>
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}

export default Blogs;
