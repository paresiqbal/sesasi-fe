import Link from "next/link";
import { Project } from "@/types/projectTypes";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div key={project.id} className="p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <Link
            href={`/projects/${project.id}`}
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View Tasks
          </Link>
        </div>
      ))}
    </div>
  );
}
