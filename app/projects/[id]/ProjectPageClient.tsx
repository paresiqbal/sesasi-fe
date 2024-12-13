"use client";

import { useState, useEffect, useCallback } from "react";
import { getTasks } from "@/utils/api";
import TaskList from "@/components/TaskList";
import { Task } from "@/types/projectTypes";
import AddTaskForm from "@/components/AddForm";

export default function ProjectPageClient({ id }: { id: string }) {
  const projectId = parseInt(id, 10);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedTasks = await getTasks(projectId);
      setTasks(fetchedTasks);
    } catch {
      setError("Failed to fetch tasks. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [projectId]);

  useEffect(() => {
    fetchTasks();
  }, [projectId, fetchTasks]);

  const handleTaskAdded = () => {
    fetchTasks();
  };

  const handleTaskUpdated = () => {
    fetchTasks();
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Tasks</h1>
      {isLoading ? (
        <div>Loading tasks...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <TaskList tasks={tasks} onTaskUpdated={handleTaskUpdated} />
      )}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Add New Task</h2>
      <AddTaskForm projectId={projectId} onTaskAdded={handleTaskAdded} />
    </main>
  );
}
