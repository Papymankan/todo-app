import Form from "@/components/form";
import React, { Suspense } from "react";
import styles from "@/app/page.module.css";
import {} from "@/type";
import TodosList from "@/components/todosList";
import Header from "@/components/header";

export default async function Page() {
  return (
    <>
      <Header />

      <div className="h-full flex items-start space-x-8 min-h-screen">
        <div className={`rounded-xl sticky top-4 p-5 ${styles.filterBox}`}>
          <h1 className="text-2xl font-bold">Filters</h1>
          <Form />
        </div>

        <div className="flex-1 overflow-auto px-4">
          <Suspense fallback={<p>Loading ...</p>}>
            <TodosList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
