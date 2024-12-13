import { Suspense } from "react";
import { getProjects } from "@/utils/api";
import ProjectList from "@/components/ProjectList";
import AddProjectForm from "@/components/AddProject";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Management App</h1>
      <Suspense fallback={<div>Loading projects...</div>}>
        <ProjectList projects={projects} />
      </Suspense>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Add New Project</h2>
      <AddProjectForm onProjectAdded={() => {}} />
    </main>
  );
}
