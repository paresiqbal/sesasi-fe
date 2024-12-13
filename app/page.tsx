"use client";

import { useState, useEffect } from "react";
import { getProjects } from "@/utils/api";
import ProjectList from "@/components/ProjectList";
import AddProjectForm from "@/components/AddProject";
import { Project } from "@/types/projectTypes";

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    } catch {
      setError("Failed to fetch projects. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleProjectAdded = () => {
    fetchProjects();
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Project Management App</h1>
      {isLoading ? (
        <div>Loading projects...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <ProjectList projects={projects} />
      )}
      <h2 className="text-2xl font-semibold mt-8 mb-4">Add New Project</h2>
      <AddProjectForm onProjectAdded={handleProjectAdded} />
    </main>
  );
}
