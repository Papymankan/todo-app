import Form from "@/components/form";
import React from "react";
import styles from "@/app/page.module.css"

export default function page() {
  return (
    <div className="h-full flex space-x-4 px-8 py-4">
      <div className={`rounded-xl p-5 fixed ${styles.filterBox}`}>
        <h1 className="text-2xl font-bold">Filters</h1>
        <Form/>
      </div>
    </div>
  );
}
