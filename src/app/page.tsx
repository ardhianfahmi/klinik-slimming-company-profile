"use client";
import { useStore } from "@/store/useStore";
import { motion } from "framer-motion";

export default function Home() {
  const { count, increase, decrease } = useStore();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <motion.h1
        className="text-6xl font-bold"
        animate={{ scale: count > 0 ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {count}
      </motion.h1>

      <div className="flex gap-2">
        <button className="btn btn-primary rounded" onClick={increase}>+</button>
        <button className="btn btn-secondary rounded" onClick={decrease}>-</button>
      </div>
    </div>
  );
}
