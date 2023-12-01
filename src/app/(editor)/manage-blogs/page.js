import { SignIn, SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import React from "react";
import BlogCard from "@/app/components/BlogCard";
import Navbar from "@/app/components/Navbar";
import UserNotFound from "@/app/components/UserNotFound";

async function ManageBlogs() {
  const user = await currentUser();
  let blogsData = [];

  if (user) {
    const blogsRef = collection(db, "blogs");
    const q = query(
      blogsRef,
      where("user", "==", user.username),
      orderBy("timestamp", "desc")
    );
    const blogsCollection = await getDocs(q);
    blogsData = blogsCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

  return (
    <>
      <SignedIn>
        <div className="container">
          <Navbar showProfile={1} username={user.username} className="my-4" />
          <h1 className="my-6 text-3xl font-bold">
            <span className="bg-gradient-to-r from-left-gradient to-right-gradient text-clip bg-clip-text text-transparent">
              {(user && user.username) || "Not found"}'s
            </span>{" "}
            Blogs
          </h1>
          <div className="container my-6 flex flex-wrap justify-around gap-4">
            {user &&
              blogsData.map((blog, index) => (
                <div key={index}>
                  <BlogCard
                    length={blog.blog.length}
                    title={blog.title}
                    description={blog.description}
                    link={`edit-blog/${blog.id}`}
                    username={user.username || "Not found"}
                    editIcon={1}
                    deleteIcon={1}
                    id={blog.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <UserNotFound />
      </SignedOut>
    </>
  );
}

export default ManageBlogs;
