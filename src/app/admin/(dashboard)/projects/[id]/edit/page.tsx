import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";
import { createClient } from "@/lib/supabase/server";
import type { ProjectRow } from "@/types/project";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (!project) notFound();

  return (
    <>
      <h1>Edit Project</h1>
      <p className="admin-page-subtitle">{project.title}</p>
      <ProjectForm project={project as ProjectRow} />
    </>
  );
}
