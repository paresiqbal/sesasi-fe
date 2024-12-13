import { Project, Task } from "@/types/projectTypes";

const API_BASE_URL = "https://test-fe.sidak.co.id/api";

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE_URL}/projects`);
  if (!response.ok) throw new Error("Failed to fetch projects");
  return response.json();
}

export async function addProject(
  project: Omit<Project, "id">
): Promise<Project> {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  if (!response.ok) throw new Error("Failed to add project");
  return response.json();
}

export async function getTasks(projectId: number): Promise<Task[]> {
  const response = await fetch(`${API_BASE_URL}/projects/${projectId}/tasks`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  return response.json();
}

export async function addTask(
  projectId: number,
  task: Omit<Task, "id" | "projectId">
): Promise<Task> {
  const response = await fetch(`${API_BASE_URL}/projects/${projectId}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error("Failed to add task");
  return response.json();
}

export async function updateTaskStatus(
  taskId: number,
  status: Task["status"]
): Promise<Task> {
  const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error("Failed to update task status");
  return response.json();
}
