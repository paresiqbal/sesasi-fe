export interface Project {
  id: number;
  name: string;
  description: string;
}

export interface ProjectListProps {
  projects: Project[];
}
