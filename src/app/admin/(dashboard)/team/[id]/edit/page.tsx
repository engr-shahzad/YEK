import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import TeamForm from "@/components/admin/TeamForm";
import type { TeamMemberRow } from "@/types/team";

export default async function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: member } = await supabase
    .from("team_members")
    .select("*")
    .eq("id", id)
    .single();

  if (!member) notFound();

  return (
    <>
      <h1>Edit Team Member</h1>
      <p className="admin-page-subtitle">{member.name}</p>
      <TeamForm member={member as TeamMemberRow} />
    </>
  );
}
