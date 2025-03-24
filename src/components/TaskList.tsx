"use client";
import TaskItem from "./TaskItem";
import { useTaskStore } from "../Store/TaskForm";

const TaskList: React.FC = () => {
  const { tasks, filter } = useTaskStore();
  const filteredTasks = tasks.filter((task) =>
    filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
  );

  return (
    <div className="space-y-2">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))
      ) : (
        <p className="text-center text-gray-400">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
