"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { todo } from "@/type";
import styles from "@/app/page.module.css";

export default function TodosList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [todos, setTodos] = useState<todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      setLoading(false);
    };

    fetchTodos();
  }, []);

  const status = searchParams.get("status");
  const userId = searchParams.get("userId");

  useEffect(() => {
    if (
      status !== null &&
      status !== "all" &&
      status !== "completed" &&
      status !== "uncompleted" &&
      status !== ""
    ) {
      if (userId !== null) router.push(`/todos?userId=${userId}`);
      else router.push(`/todos`);
    }

    if ((userId !== null && isNaN(Number(userId))) || userId === "") {
      if (status !== null) router.push(`/todos?status=${status}`);
      else router.push(`/todos`);
    }
  }, [status, userId, router]);

  const filteredTodos = todos.filter((todo) => {
    const matchesUser = userId ? todo.userId === Number(userId) : true;
    const matchesStatus =
      !status ||
      status === "all" ||
      (status === "completed" && todo.completed) ||
      (status === "uncompleted" && !todo.completed);

    return matchesUser && matchesStatus;
  });

  if (loading) return <p>Loading todos...</p>;

  return (
    <>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <div
            className={`w-full py-4 px-6 rounded-xl ${styles.todo} mb-6`}
            key={todo.id}
          >
            <div className="w-full flex justify-between">
              <p className="text-xl font-bold">{todo.title}</p>
              <p>{todo.completed ? "✅" : "❌"}</p>
            </div>

            <p className="mt-4 text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sint
              numquam aliquid, nisi ad fuga maiores quibusdam voluptatem, quos
              quia beatae laborum mollitia! Obcaecati iusto, maiores accusamus
              voluptatum hic iste?
            </p>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center">
          <h1 className=" text-3xl font-bold">No Todo Found</h1>
          <p className="font-thin">try other filters</p>
        </div>
      )}
    </>
  );
}
