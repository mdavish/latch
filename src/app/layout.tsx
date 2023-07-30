import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import { getServerSession } from "next-auth";
import HomePage from "@/components/HomePage";
import Navigation from "@/components/Navigation";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latch",
  description: "Everyone's a critic.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <AuthProvider>
      <html lang="en">
        <body className={cn(inter.className, "h-screen w-full flex flex-row")}>
          {!session ? (
            <HomePage />
          ) : (
            <>
              <Navigation />
              {children}
            </>
          )}
        </body>
      </html>
    </AuthProvider>
  );
}
