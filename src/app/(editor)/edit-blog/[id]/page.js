import { SignIn, SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import React from "react";
import Editor from "@/app/components/Editor";
import Navbar from "@/app/components/Navbar";
import UserNotFound from "@/app/components/UserNotFound";

async function EditBlog({ params }) {
  const user = await currentUser();

  const blogRef = doc(db, "blogs", params.id);
  const snapshot = await getDoc(blogRef);

  const data = snapshot.data();

  const blogData = data;
  console.log("Blog Data", blogData);

  if (!user) {
    return <UserNotFound />;
  }

  return (
    <>
      <SignedOut>
        <UserNotFound />
      </SignedOut>

      <SignedIn>
        <div>
          <div className="container">
            <Navbar showProfile={1} username={user.username} className="my-4" />
            <Editor
              gradient="Edit"
              sectionTitle="your blog"
              buttonText="Confirm Edit"
              buttonType="edit"
              blogId={params.id}
              blogCode={blogData.blog}
              blogTitle={blogData.title}
              blogDescription={blogData.description}
            />
          </div>
        </div>
      </SignedIn>
    </>
  );
}

export default EditBlog;
