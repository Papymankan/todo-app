"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "@/public/pngaaa.com-7713344.png";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-50 bg-blue-500 flex justify-center items-center text-2xl"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <Image src={image} alt="Logo" width={100} height={100} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
