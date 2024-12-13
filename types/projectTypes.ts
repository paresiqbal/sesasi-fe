export interface Project {
  id: number;
  name: string;
  description: string;
}

export interface Task {
  id: number;
  projectId: number;
  name: string;
  status: "To Do" | "In Progress" | "Completed";
}
