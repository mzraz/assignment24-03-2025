import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskStore {
  tasks: Task[];
  filter: 'all' | 'completed' | 'pending';
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  setFilter: (filter: 'all' | 'completed' | 'pending') => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      filter: 'all',

      addTask: (title) => set((state) => ({
        tasks: [...state.tasks, { id: Date.now(), title, completed: false }]
      })),

      toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      })),

      deleteTask: (id) => {
        set((state) => {
          const taskToDelete = state.tasks.find((task) => task.id === id);
          const updatedTasks = state.tasks.filter((task) => task.id !== id);

          toast((t) => (
            <div className="flex items-center gap-2">
              <span>Task deleted</span>
              <button
                onClick={() => {
                  set((state) => ({
                    tasks: [...state.tasks, taskToDelete!]
                  }));
                  toast.dismiss(t.id);
                }}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Undo
              </button>
            </div>
          ), { duration: 4000 });

          return { tasks: updatedTasks };
        });
      },

      setFilter: (filter) => set({ filter }),
    }),
    { name: 'task-storage' }
  )
);
