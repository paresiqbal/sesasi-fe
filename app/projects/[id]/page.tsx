import { Suspense } from "react";
import AddTaskForm from "@/components/AddForm";
import { getTasks } from "@/utils/api";
import TaskList from "@/components/TaskList";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const projectId = parseInt(params.id, 10);
  const tasks = await getTasks(projectId);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Tasks</h1>
      <Suspense fallback={<div>Loading tasks...</div>}>
        <TaskList tasks={tasks} onTaskUpdated={() => {}} />
      </Suspense>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Add New Task</h2>
      <AddTaskForm projectId={projectId} onTaskAdded={() => {}} />
    </main>
  );
}
