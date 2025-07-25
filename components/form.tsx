"use client";

import React, { useState } from "react";
import styles from "@/components/form.module.css";
import { useSearchParams, useRouter } from "next/navigation";

export default function Form() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [userId, setUserId] = useState(searchParams.get("userId") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (userId) params.set("userId", userId);
    if (status && status !== "all") params.set("status", status);
    else if (status === "all") params.delete("status");

    router.push(`/todos?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div className="flex space-x-2 mt-6">
        <input
          type="radio"
          name="status"
          value="all"
          id="status-3"
          checked={status === "all"}
          onChange={() => setStatus("all")}
        />
        <label htmlFor="status-3">all</label>
      </div>

      <div className="flex space-x-2">
        <input
          type="radio"
          name="status"
          value="completed"
          id="status-1"
          checked={status === "completed"}
          onChange={() => setStatus("completed")}
        />
        <label htmlFor="status-1">completed</label>
      </div>

      <div className="flex space-x-2">
        <input
          type="radio"
          name="status"
          value="uncompleted"
          id="status-2"
          checked={status === "uncompleted"}
          onChange={() => setStatus("uncompleted")}
        />
        <label htmlFor="status-2">uncompleted</label>
      </div>

      <button className="px-5 py-2 bg-blue rounded-xl text-white hover:bg-blue-700 duration-300 cursor-pointer mt-8">
        Submit
      </button>
    </form>
  );
}
