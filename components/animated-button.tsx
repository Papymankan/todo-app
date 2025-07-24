"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" bg-blue text-white rounded-lg"
    >
      <Link href={"/todos"} className="block px-8 py-4">View Your Todos</Link>
    </motion.div>
  );
}
