"use server";
import { currentUser } from "@clerk/nextjs";

export default async function getCurrentUser() {
  const user = await currentUser();

  return user;
}
