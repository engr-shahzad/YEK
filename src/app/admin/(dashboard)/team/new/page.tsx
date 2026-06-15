import TeamForm from "@/components/admin/TeamForm";

export default function NewTeamMemberPage() {
  return (
    <>
      <h1>New Team Member</h1>
      <p className="admin-page-subtitle">
        Add a new leadership, core team, or community lead member.
      </p>
      <TeamForm />
    </>
  );
}
