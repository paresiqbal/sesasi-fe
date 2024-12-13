import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Link href={`/project/${project.id}`}>View Tasks</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
