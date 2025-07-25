import Image from "next/image";
import React from "react";
import image from "@/public/pngaaa.com-7713344.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full p-2 bg-blue mb-8 mt-4 rounded-2xl flex justify-between items-center">
      <Link href={"/"} className="flex items-center space-x-3">
        <Image src={image} alt="Logo" width={40} height={40} />

        <h2 className="text-xl text-white">Todo App</h2>
      </Link>

      <Link href={"/"} className="mr-2 py-2 px-3 rounded-2xl text-blue bg-white hover:bg-gray-300 duration-200">
        Contact us
      </Link>
    </div>
  );
}
