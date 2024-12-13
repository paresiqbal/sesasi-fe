"use client";

import { useState } from "react";
import { addTask } from "../utils/api";

interface AddTaskFormProps {
  projectId: number;
  onTaskAdded: () => void;
}

export default function AddTaskForm({
  projectId,
  onTaskAdded,
}: AddTaskFormProps) {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await addTask(projectId, { name, status: "To Do" });
      setName("");
      onTaskAdded();
    } catch {
      setError("Failed to add task. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label
          htmlFor="taskName"
          className="block text-sm font-medium text-gray-700"
        >
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
