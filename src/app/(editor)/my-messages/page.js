"use client";
import { Skeleton } from "@/app/components/ui/skeleton";
import {
  ClerkLoading,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  currentUser,
  useUser,
} from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

import { db } from "@/firebase/config";
import {
  getDocs,
  query,
  where,
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import MessagesTable from "@/app/components/MessagesTable";
import Navbar from "@/app/components/Navbar";
function AddBlog() {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const { isLoaded, user } = useUser();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      const unsubscribe = listenToMessages(user.username, (newMessages) => {
        setMessages(newMessages);
      });

      return () => {
        // Unsubscribe when the component unmounts
        unsubscribe();
      };
    }
  }, [user]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center flex-col container">
        <Skeleton className={`w-full h-[100px] rounded-lg`} />
        <Skeleton className="w-full h-[80vh] my-2" />
      </div>
    );
  }

  return (
    <div className="container">
      <SignedIn>
        {user && (
          <Navbar showProfile={1} username={user.username} className="my-4" />
        )}
        <h1 className="text-4xl font-bold mt-6">
          {" "}
          <span className="bg-gradient-to-r from-left-gradient to-right-gradient bg-clip-text text-transparent">
            {user && user.username}'s
          </span>{" "}
          Messages{" "}
        </h1>
        <MessagesTable messages={messages} />
      </SignedIn>

      <SignedOut>
        <ClerkLoading>
          <div className="flex justify-center items-center min-h-[80vh]">
            <Skeleton className="w-[280px] h-[280px] rounded-lg" />
          </div>
        </ClerkLoading>
        <div className="flex justify-center items-center min-h-[80vh]">
          <SignIn afterSignInUrl="/my-messages" />
        </div>
      </SignedOut>
    </div>
  );
}

// Function to listen for changes in messages
function listenToMessages(username, callback) {
  const messagesCollection = collection(db, "messages");
  const q = query(
    messagesCollection,
    where("to", "==", username),
    orderBy("timestamp", "desc")
  );

  return onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    console.log(messages);
    callback(messages);
  });
}

export default AddBlog;
