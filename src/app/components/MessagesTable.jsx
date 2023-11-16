import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "./ui/label";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Alert } from "./ui/alert";

function MessagesTable({ messages }) {
  async function deleteFunctionFromFirestore() {
    console.log("delete function called");
  }
  return (
    <div className="container my-10">
      <UserButton afterSignOutUrl="/" />

      <Table>
        <TableCaption>A list of your recent messages.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="text-right">Time</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((message, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{message.name}</TableCell>
              <TableCell>
                <Button variant="link">
                  <Link href={`mailto:${message.email}`}>{message.email}</Link>{" "}
                </Button>
              </TableCell>
              <TableCell>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div className="flex flex-col gap-2">
                      {message.message.length > 20
                        ? `${message.message.slice(0, 20)}...`
                        : message.message}
                      {message.message.length > 20 && (
                        <Button variant="outline">Read Message</Button>
                      )}
                    </div>
                  </AlertDialogTrigger>

                  <AlertDialogContent className="mx-2">
                    <p>{message.message}</p>
                    <div className="flex justify-end">
                      <AlertDialogCancel>Close</AlertDialogCancel>
                    </div>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
              <TableCell className="text-right">
                {new Date(message.timestamp).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  hour12: false, // Use 24-hour format
                })}
              </TableCell>{" "}
              <TableCell className="flex justify-end">
                <Button
                  variant="destructive"
                  onClick={deleteFunctionFromFirestore}
                >
                  Delete {message.id}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MessagesTable;
