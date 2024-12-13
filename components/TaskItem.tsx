"use client";

import { useState } from "react";
import { Task } from "@/types/projectTypes";
import { updateTaskStatus } from "@/utils/api";

interface TaskItemProps {
  task: Task;
  onTaskUpdated: () => void;
}

export default function TaskItem({ task, onTaskUpdated }: TaskItemProps) {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = async (newStatus: Task["status"]) => {
    setIsUpdating(true);
    try {
      await updateTaskStatus(task.id, newStatus);
      onTaskUpdated();
    } catch (error) {
      console.error("Failed to update task status:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border rounded shadow">
      <div>
        <h4 className="font-semibold">{task.name}</h4>
        <p className="text-sm text-gray-600">Status: {task.status}</p>
      </div>
      <select
        value={task.status}
        onChange={(e) => handleStatusChange(e.target.value as Task["status"])}
        disabled={isUpdating}
        className="ml-4 rounded border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
}
