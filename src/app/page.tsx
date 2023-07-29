"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="w-full h-screen flex">
      <div className="mx-auto my-auto mt-40 text-center flex flex-col gap-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600"
        >
          Latch
        </motion.h1>
        <p className="text-xl">
          Everyone&lsquo;s a critic.
        </p>
        <Button
          className="w-fit mx-auto">
          Sign Up
        </Button>
      </div>
    </div>
  );
}