export type TeamSection = "leadership" | "core" | "community";

export type TeamMemberRow = {
  id: string;
  section: TeamSection;
  name: string;
  role: string | null;
  image: string;
  linkedin: string | null;
  show_role: boolean;
  display_order: number;
  created_at: string;
};
