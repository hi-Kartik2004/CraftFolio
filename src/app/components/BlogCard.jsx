"use client";

import { Badge } from "@/app/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { motion } from "framer-motion";
import { DeleteIcon } from "lucide-react";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { GoLinkExternal } from "react-icons/go";
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog,
  AlertDialogCancel,
} from "./ui/alert-dialog";
import { AiFillDelete } from "react-icons/ai";
import { Button } from "./ui/button";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useToast } from "./ui/use-toast";
import { Toaster } from "./ui/toaster";
import { revalidatePath } from "next/cache";

function BlogCard({
  index,
  length,
  id,
  description,
  title,
  blog,
  username,
  link,
  editIcon,
  deleteIcon,
}) {
  const { toast } = useToast();

  async function deleteBlog() {
    console.log("Blog deleted");
    const blogRef = doc(db, "blogs", id);
    const res = await deleteDoc(blogRef);

    toast({
      title: `Blog Deleted Successfully`,
      description: `Blog with title ${title} was deleted successfully, refresh to see changes`,
    });
  }

  return (
    <>
      <Toaster />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 10 },
        }}
      >
        <Card className="bg-card xs:w-[350px] w-[280px] h-[400px] hover:bg-primary-foreground duration-500 items-baseline flex-col flex justify-between overflow-hidden">
          <CardHeader className="h-full w-full">
            <div className="mb-2 flex justify-between">
              <Badge className="bg-right-gradient">
                {Math.ceil(length / 500)} minutes read.
              </Badge>

              <Link href={link}>{editIcon && <BiEdit size={25} />}</Link>

              <Link href={`/${username}/blogs/${id}`}>
                <GoLinkExternal size={25} />
              </Link>

              {deleteIcon && (
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <AiFillDelete size={25} />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure? This step is irreversible.
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        One you delete this blog, you cannot undo it.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction variant="destructive" asChild>
                        <Button variant="destructive" onClick={deleteBlog}>
                          Delete Blog
                        </Button>
                      </AlertDialogAction>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>

            <CardTitle className="text-lg">
              <Link href={link}>{title || "No title provided"}</Link>
            </CardTitle>
            <div className="line-clamp-2">
              <p className="text-sm text-muted-foreground break-words">
                {description || "No description provided"}
              </p>
            </div>
          </CardHeader>
          <CardContent className="w-full">
            <img
              src={`https://source.unsplash.com/random/350X350/?${title}`}
              alt="coming from unsplash"
              className="bg-secondary-foreground rounded-md h-[200px] w-full object-cover object-top"
            />
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}

export default BlogCard;
