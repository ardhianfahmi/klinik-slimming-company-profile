"use client";

import { motion } from "framer-motion";

export default function AnimatedCard() {
  return (
    <motion.div
      className="card bg-base-100 shadow-xl rounded-xl max-w-md mx-auto mt-20 p-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-4 text-primary">
        Welcome to Klinik Slimming
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        This card uses Tailwind CSS for layout, DaisyUI for styling, and Framer Motion for animation.
      </p>
      <div className="flex justify-center gap-4">
        <button className="btn btn-primary">Get Started</button>
        <button className="btn btn-outline btn-secondary">Learn More</button>
      </div>
    </motion.div>
  );
}
