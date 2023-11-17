import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { db } from "@/firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";

function MessagesTable({ messages }) {
  const { toast } = useToast();

  async function deleteFunctionFromFirestore(documentId, name) {
    const documentRef = doc(db, "messages", documentId);

    try {
      await deleteDoc(documentRef);

      toast({
        title: "Message Deleted Successfully",
        description: `Message from ${name} with id ${documentId} was deleted successfully.}`,
      });
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  }
  
  return (
    <div className="container my-10">
      <Toaster />
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
                      {message.message.length > 40
                        ? `${message.message.slice(0, 40)}...`
                        : message.message}
                      {message.message.length > 40 && (
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
              <TableCell className="flex justify-end items-center">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure, you want to delete?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete message will remove the data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="p-0">
                        {" "}
                        <Button
                          variant="destructive"
                          className="w-full"
                          onClick={() => {
                            deleteFunctionFromFirestore(
                              message.id,
                              message.name
                            );
                          }}
                        >
                          Delete {message.id}
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MessagesTable;
