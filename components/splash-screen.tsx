"use client";
import React, { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    const timeOut = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      {show ? (
        <div className="fixed inset-0 z-50 bg-amber-200 flex justify-center items-center text-2xl">
          splash-screen
        </div>
      ) : null}
    </>
  );
}
