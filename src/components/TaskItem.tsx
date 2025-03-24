"use client";
import { motion } from "framer-motion";
import { useTaskStore } from "../Store/TaskForm";

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, completed }) => {
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <motion.div
      className="flex items-center justify-between p-2 border-b"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTask(id)}
        className="mr-2"
      />
      <span className={completed ? "line-through text-gray-500" : "text-black"}>
        {title}
      </span>
      <button
        onClick={() => deleteTask(id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        Delete
      </button>
    </motion.div>
  );
};

export default TaskItem;
