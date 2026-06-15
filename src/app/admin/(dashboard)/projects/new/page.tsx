import ProjectForm from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <>
      <h1>New Project</h1>
      <p className="admin-page-subtitle">Add a new cause/project to the website.</p>
      <ProjectForm />
    </>
  );
}
