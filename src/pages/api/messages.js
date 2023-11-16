import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(req, res) {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = userId ? await clerkClient.users.getUser(userId) : null;

  // use the user object to decide what data to return

  return res.status(200).json({});
}
