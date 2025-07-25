import React from "react";
import styles from "@/components/form.module.css";
import { redirect } from "next/navigation";

export default async function Form({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { userId, status } = await searchParams;

  async function submit(formData: FormData) {
    "use server";
    const status = formData.get("status");
    const userId = formData.get("userId");

    if (status && userId) redirect(`/todos?status=${status}&userId=${userId}`);
    else if (userId) redirect(`/todos?userId=${userId}`);
    else if (status) redirect(`/todos?status=${status}`);
  }

  return (
    <form action={submit}>
      <div className="flex flex-col mt-4">
        <label htmlFor="userIdInput" className="text-sm">
          user id :
        </label>
        <input
          type="number"
          min={0}
          name="userId"
          id="userIdInput"
          className={`border-b ${styles.userIdInput} border-blue text-sm`}
          placeholder="set empty to no filter"
        />
      </div>

      <div className="flex space-x-2 mt-6">
        <input
          type="radio"
          name="status"
          value="all"
          id="status-3"
          defaultChecked={!status || status === "all"}
        />
        <label htmlFor="status-3">all</label>
      </div>

      <div className="flex space-x-2">
        <input
          type="radio"
          name="status"
          value="completed"
          id="status-1"
          defaultChecked={status === "completed"}
        />
        <label htmlFor="status-1">completed</label>
      </div>

      <div className="flex space-x-2">
        <input
          type="radio"
          name="status"
          value="uncompleted"
          id="status-2"
          defaultChecked={status === "uncompleted"}
        />
        <label htmlFor="status-2">uncompleted</label>
      </div>

      <button className="px-5 py-2 bg-blue rounded-xl text-white hover:bg-blue-700 duration-300 cursor-pointer mt-8">
        Submit
      </button>
    </form>
  );
}
