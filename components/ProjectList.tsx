import { ProjectListProps } from "@/types/projectTypes";

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div>
      <h2>Project List</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
