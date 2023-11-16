"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { db } from "@/firebase/config";
import { collection, addDoc } from "firebase/firestore";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

async function addMessageToFirestore(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      to: sessionStorage.getItem("username"),
      name: name,
      email: email,
      message: message,
      timestamp: Date.now(),
    });
    console.log("Document written with ID ", docRef.id);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export default function ContactMeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values, event) {
    event.preventDefault();
    setSubmitting(true);
    // Make an HTTP request to the server-side function (mocked endpoint)
    console.log(values);
    let isDocAdded = await addMessageToFirestore(
      values.name,
      values.email,
      values.message
    );
    isDocAdded ? setSubmitted(true) : setSubmitted(false);
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="text-center h-full mt-24 gap-4 flex flex-col justify-center">
        <BsCheck2Circle size={50} />
        <div className="p-2 rounded-md border">
          <p className="text-start">
            Thanks for Filling the form I shall get back to you ASAP, however
            you could also reach me on my other socials for faster response.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Beautiful Name" {...field} />
              </FormControl>
              <FormDescription>
                It would be nicer if I know your name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
              <FormDescription>
                I would reach out to you on this email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            // <FormItem>
            //   <FormLabel>Email</FormLabel>
            //   <FormControl>
            //     <Input placeholder="shadcn" {...field} />
            //   </FormControl>
            //   <FormDescription>
            //     I would reach out to you on this email.
            //   </FormDescription>
            //   <FormMessage />
            // </FormItem>
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Hi Kartikeya, ..." {...field} />
              </FormControl>
              <FormDescription>
                I would reach out to you on this email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
