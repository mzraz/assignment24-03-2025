"use client";
import { useState } from "react";
import { useTaskStore } from "../Store/TaskForm";

const TaskInput: React.FC = () => {
  const [title, setTitle] = useState("");
  const addTask = useTaskStore((state) => state.addTask);

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a task..."
        className="border p-2 rounded w-full text-black placeholder-gray-500"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
