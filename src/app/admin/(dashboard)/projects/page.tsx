import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import DeleteButton from "@/components/admin/DeleteButton";
import type { ProjectRow } from "@/types/project";

export default async function AdminProjectsPage() {
  const supabase = await createClient();
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <>
      <div className="admin-header-row">
        <div>
          <h1>Projects</h1>
          <p className="admin-page-subtitle">
            Manage the causes/projects shown on the website.
          </p>
        </div>
        <Link href="/admin/projects/new" className="admin-btn admin-btn-primary">
          + New Project
        </Link>
      </div>

      {error && <div className="admin-error">{error.message}</div>}

      <table className="admin-table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Category</th>
            <th>Slug</th>
            <th>Progress</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(projects as ProjectRow[] | null)?.map((project) => (
            <tr key={project.id}>
              <td>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.card_image}
                  alt=""
                  className="admin-table-thumb"
                />
              </td>
              <td>{project.title}</td>
              <td>{project.category}</td>
              <td>{project.slug}</td>
              <td>{project.progress}%</td>
              <td className="admin-table-actions">
                <Link
                  href={`/admin/projects/${project.id}/edit`}
                  className="admin-btn admin-btn-sm"
                >
                  Edit
                </Link>
                <DeleteButton
                  table="projects"
                  id={project.id}
                  confirmMessage={`Delete "${project.title}"?`}
                />
              </td>
            </tr>
          ))}
          {projects?.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", color: "var(--text)" }}>
                No projects yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
