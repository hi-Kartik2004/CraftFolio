import { SignIn, SignedIn, SignedOut, currentUser } from "@clerk/nextjs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import React from "react";
import Editor from "@/app/components/Editor";

async function EditBlog({ params }) {
  const user = await currentUser();

  const blogRef = doc(db, "blogs", params.id);
  const snapshot = await getDoc(blogRef);

  const data = snapshot.data();

  const blogData = data;
  console.log("Blog Data", blogData);

  return (
    <>
      <SignedIn>
        <div>
          <div className="container">
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

      <SignedOut>
        <div className="flex justify-center items-center min-h-screen">
          <SignIn afterSignInUrl="manage-blogs" />
        </div>
      </SignedOut>
    </>
  );
}

export default EditBlog;
