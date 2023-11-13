"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import data from "../data";
import { useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { Card } from "./ui/card";

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

export default function ContactMeForm() {
  const [submitted, setSubmitted] = useState(true);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // const client = new SMTPClient({
  //   user: 'user',
  //   password: 'password',
  //   host: 'smtp.your-email.com',
  //   ssl: true,
  // });

  function onSubmit(values) {
    // Make an HTTP request to the server-side function (mocked endpoint)
    console.log(values);
    setSubmitted(true);
    // client.send(
    //   {
    //     text: 'i hope this works',
    //     from: 'Portfolio <kudlu2004@gmail.com>',
    //     to: 'Kartikeya Saini <kudlu2004@gmail.com>',
    //     subject: 'testing emailjs',
    //   },
    //   (err, message) => {
    //     console.log(err || message);
    //   }
    // );
  }

  if (submitted) {
    return (
      <div className="text-center h-full mt-24 gap-4 flex flex-col justify-center">
        <BsCheck2Circle size={50}  />
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
