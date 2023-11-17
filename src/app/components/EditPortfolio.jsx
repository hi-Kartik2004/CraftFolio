"use client";
import { Textarea } from "@/app/components/ui/textarea";
import { Badge } from "@/app/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { currentUser, useUser } from "@clerk/nextjs";
import data from "@/app/utilpages/defaultFirebaseTemplate";

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { use, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { db } from "@/firebase/config";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";

function EditPortfolio() {
  const { isLoaded, user } = useUser();
  if (!isLoaded) return null;
  const [blogCode, setBlogCode] = useState("");
  const [textareaValue, setTextareaValue] = useState(
    sessionStorage.getItem("portfolioCode") || ""
  );

  const { toast } = useToast();

  // Function to handle textarea changes
  const handleTextareaChange = (event) => {
    const newValue = event.target.value;

    // Update state
    setTextareaValue(newValue);

    // Store the value in sessionStorage
    sessionStorage.setItem("portfolioCode", newValue);
  };

  async function getBlogFromFirestore() {
    try {
      const portFolioCollection = collection(db, "portfolios");

      const q = query(portFolioCollection, where("user", "==", user.username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No matching documents.");
        addBlogForEmptyResponseFromFirestore();
        setBlogCode(null);
        return;
      }

      const portFolioDoc = querySnapshot.docs[0];
      const portFolioData = portFolioDoc.data();

      const portFolioCode = portFolioData.portfolioCode;
      console.log("Portfolio Code:", portFolioCode);
      setTextareaValue(JSON.stringify(portFolioCode, null, 2));
      setBlogCode(portFolioCode, querySnapshot.id);
    } catch (error) {
      console.error("Error getting blog:", error);
      throw error;
    }
  }

  async function addBlogForEmptyResponseFromFirestore() {
    try {
      const collectionRef = collection(db, "portfolios");
      const snapShot = await addDoc(collectionRef, {
        portfolioCode: data || "empty",
        user: user.username,
        timestamp: Date.now(),
      });

      console.log("portfolio Code added successfully with id:", snapShot.id);
      toast({
        title: "Welcome, we are glad to have you here first time",
        description: `Your portfolio id is ${snapShot.id}`,
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Some error occured while initialising your portfolio",
        description: `${err}`,
      });
    }
  }

  async function updateProtfolioCodeInFireStore() {
    const portfolioCollection = collection(db, "portfolios");
    const querySnapshot = await getDocs(
      query(portfolioCollection, where("user", "==", user.username))
    );

    if (!querySnapshot.empty) {
      // Assuming you want to update the first matching document
      const documentSnapshot = querySnapshot.docs[0];
      const documentRef = doc(portfolioCollection, documentSnapshot.id);

      try {
        await updateDoc(documentRef, {
          portfolioCode: JSON.parse(sessionStorage.getItem("portfolioCode")),
          timestamp: Date.now(),
        });

        console.log("Document updated successfully!");
        toast({
          title: "Portfolio Updated Successfully",
          description: `Your portfolio is updated successfully, might take upto few minutes to go live!`,
        });
      } catch (err) {
        console.error("Error updating document:", err);
        toast({
          title: "Error updating portfolio",
          description: `${err}`,
        });
      }
    } else {
      console.log("No matching documents found.");
      toast({
        title: "No matching document found",
        description: `Visit our github repo for more inforamtion.`,
      });
    }
  }

  if (!blogCode) {
    getBlogFromFirestore();
  }

  useEffect(() => {
    getBlogFromFirestore();
  }, []);

  return (
    <div className="mt-6">
      <Toaster />
      <div className="mb-4 flex flex-wrap justify-between items-center">
        <Badge>
          <p>users/{user.username}.js</p>
        </Badge>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Modify</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <h2 className="text-xl font-bold">Are you sure?</h2>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <p>
                your are about to edit your portfolio, you can refresh to get
                back to state your last modifed, however you cannot undo this
                modification once made.
              </p>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={updateProtfolioCodeInFireStore}>
                Modify
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Textarea
        rows="20"
        value={textareaValue}
        onChange={handleTextareaChange}
        placeholder="Everything cleared or loading..."
      />
    </div>
  );
}

export default EditPortfolio;
