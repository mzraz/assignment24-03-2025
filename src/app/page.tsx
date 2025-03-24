"use client";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import FilterButtons from "../components/FilterButtons";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow text-white">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4 text-center text-white">
        Task Manager
      </h1>
      <TaskInput />
      <FilterButtons />
      <TaskList />
    </div>
  );
}
