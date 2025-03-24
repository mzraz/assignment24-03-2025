"use client";
import { useTaskStore } from "../Store/TaskForm";

const FilterButtons: React.FC = () => {
  const { setFilter, filter } = useTaskStore();

  return (
    <div className="flex justify-center gap-4 my-4">
      {["all", "completed", "pending"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f as "all" | "completed" | "pending")}
          className={`px-4 py-2 rounded ${
            filter === f ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
