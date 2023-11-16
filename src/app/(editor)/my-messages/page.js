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
import React from "react";

import { db } from "@/firebase/config";
import { getDocs, query, where, collection } from "firebase/firestore";
import MessagesTable from "@/app/components/MessagesTable";

async function getMessagesFromFirestore(username) {
  try {
    const messagesCollection = collection(db, "messages");
    const q = query(messagesCollection, where("to", "==", username));
    const querySnapshot = await getDocs(q);

    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });

    return messages;
  } catch (error) {
    console.error("Error getting messages from Firestore:", error);
    return [];
  }
}

function AddBlog() {
  const [messages, setMessages] = React.useState([]);
  const { isLoaded, user } = useUser();
  console.log(user);

  if (!isLoaded) {
    return null;
  }

  if (user) {
    getMessagesFromFirestore(user.username)
      .then((messages) => {
        console.log("messages", messages);
        setMessages(messages);
      })
      .catch((error) => {
        console.error("Error getting messages from Firestore:", error);
      });
  }

  return (
    <div className="">
      <SignedIn>
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

export default AddBlog;
