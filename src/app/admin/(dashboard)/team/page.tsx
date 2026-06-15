import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import DeleteButton from "@/components/admin/DeleteButton";
import type { TeamMemberRow } from "@/types/team";

const SECTION_LABELS: Record<string, string> = {
  leadership: "Leadership",
  core: "Core Team",
  community: "Community Leads",
};

export default async function AdminTeamPage() {
  const supabase = await createClient();
  const { data: members, error } = await supabase
    .from("team_members")
    .select("*")
    .order("section", { ascending: true })
    .order("display_order", { ascending: true });

  return (
    <>
      <div className="admin-header-row">
        <div>
          <h1>Team</h1>
          <p className="admin-page-subtitle">
            Manage the leadership, core team, and community leads shown on the Our Team page.
          </p>
        </div>
        <Link href="/admin/team/new" className="admin-btn admin-btn-primary">
          + New Team Member
        </Link>
      </div>

      {error && <div className="admin-error">{error.message}</div>}

      <table className="admin-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Section</th>
            <th>Role</th>
            <th>Order</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {(members as TeamMemberRow[] | null)?.map((member) => (
            <tr key={member.id}>
              <td>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.image} alt="" className="admin-table-thumb" />
              </td>
              <td>{member.name}</td>
              <td>{SECTION_LABELS[member.section] ?? member.section}</td>
              <td>{member.role ?? "—"}</td>
              <td>{member.display_order}</td>
              <td className="admin-table-actions">
                <Link
                  href={`/admin/team/${member.id}/edit`}
                  className="admin-btn admin-btn-sm"
                >
                  Edit
                </Link>
                <DeleteButton
                  table="team_members"
                  id={member.id}
                  confirmMessage={`Delete "${member.name}"?`}
                />
              </td>
            </tr>
          ))}
          {members?.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", color: "var(--text)" }}>
                No team members yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
