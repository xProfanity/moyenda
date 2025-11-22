import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Admin() {
  const clerk = await clerkClient();
  const user = await currentUser();
  const authObject = await auth();

  const role = authObject.orgRole;

  console.log("role", role);

  return <div>Admin Page</div>;
}
