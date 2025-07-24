import { todo } from "@/type";
import { redirect } from "next/navigation";
import React from "react";
import styles from "@/app/page.module.css";

export default async function TodosList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const todos: todo[] = await res.json();

  const { userId, status } = await searchParams;

  if (
    status != undefined &&
    status != "all" &&
    status != "completed" &&
    status != "uncompleted"
  ) {
    if (userId !== undefined) redirect(`/todos?userId=${userId}`);
    else redirect(`/todos`);
  }

  if (userId !== undefined && isNaN(Number(userId))) {
    if (status !== undefined) redirect(`/todos?status=${status}`);
    else redirect(`/todos`);
  }

  const filteredTodos = todos.filter((todo) => {
    const matchesUser =
      userId !== undefined ? todo.userId === Number(userId) : true;

    const matchesStatus =
      status === undefined ||
      status === "all" ||
      (status === "completed" && todo.completed) ||
      (status === "uncompleted" && !todo.completed);

    return matchesUser && matchesStatus;
  });

  return (
    <>
      {filteredTodos.map((todo) => (
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
      ))}
    </>
  );
}
