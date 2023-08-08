import { ProfileForm } from "./ProfileForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    throw new Error("Not authenticated");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return (
    <div className="pt-10 px-10 w-full">
      <h1 className="text-3xl font-medium text-slate-800">My Profile</h1>
      <ProfileForm name={user.name!} profile={user.profile!} />
    </div>
  );
}
