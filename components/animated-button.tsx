"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-blue text-white rounded-lg"
    >
      <Link href={"/todos"}>View Your Todos</Link>
    </motion.div>
  );
}
