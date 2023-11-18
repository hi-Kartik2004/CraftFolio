"use client";
import { useEffect, useState } from "react";
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
import { Badge } from "@/app/components/ui/badge";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { Textarea } from "@/app/components/ui/textarea";
import { Toaster } from "./ui/toaster";
import { AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { currentUser, useUser } from "@clerk/nextjs";
import data from "@/app/utilpages/defaultFirebaseTemplate";
import { useToast } from "./ui/use-toast";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/firebase/config";

function EditPortfolio() {
  const { isLoaded, user } = useUser();

  // Add a check for user before proceeding
  if (!isLoaded) return null;

  const [blogCode, setBlogCode] = useState("");
  const [textareaValue, setTextareaValue] = useState(
    sessionStorage.getItem("portfolioCode") || ""
  );
  const [loading, setLoading] = useState(true);

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
        title: "Some error occurred while initializing your portfolio",
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
          description: `Your portfolio is updated successfully, might take up to few minutes to go live!`,
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
        description: `Visit our GitHub repo for more information.`,
      });
    }
  }

  if (!blogCode) {
    getBlogFromFirestore();
  }

  useEffect(() => {
    getBlogFromFirestore();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container mt-6">
        <Skeleton className="w-full h-[60vh]" />
      </div>
    );
  }

  return (
    <div className="mt-6">
      <Toaster />
      <div className="mb-4 flex flex-wrap justify-between items-center">
        <Badge>
          <p>users/{user.username}.js</p>
        </Badge>

        <div className="flex gap-4 items-center flex-wrap">
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
                  you are about to edit your portfolio; you can refresh to get
                  back to the state of your last modified, however, you cannot
                  undo this modification once made.
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

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Ask Ai</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="h-[90vh]">
              <iframe
                src="https://chat.openai.com/c/a40b8ffd-6578-4be9-9392-2f583050c471"
                width="100%"
                height="575px"
              ></iframe>

              <AlertDialogFooter className="p-0 m-0">
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
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
