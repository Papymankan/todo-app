import React from "react";
import styles from "@/components/form.module.css";

export default function Form() {
  return (
    <form action="">
      <div className="flex flex-col mt-4">
        <label htmlFor="userIdInput" className="text-sm">userId</label>
        <input
          type="text"
          name="userId"
          id="userIdInput"
          className={`border-b ${styles.userIdInput} border-blue text-sm`}
          placeholder="for example 1"
        />
      </div>

      <div className="flex space-x-2 mt-6">
        <input type="radio" name="status" value={"all"} id="status-3" defaultChecked />
        <label htmlFor="status-3">all</label>
      </div>

      <div className="flex space-x-2">
        <input type="radio" name="status" value={"completed"} id="status-1" />
        <label htmlFor="status-1">completed</label>
      </div>

      <div className="flex space-x-2">
        <input type="radio" name="status" value={"uncompleted"} id="status-2" />
        <label htmlFor="status-2">uncompleted</label>
      </div>

      <button className="px-5 py-2 bg-blue rounded-xl text-white hover:bg-blue-700 duration-300 cursor-pointer mt-8">
        Submit
      </button>
    </form>
  );
}
