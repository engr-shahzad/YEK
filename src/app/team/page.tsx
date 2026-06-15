import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { Volunter } from "@/components/Volunter";
import DanboxLayout from "@/layout/DanboxLayout";
import { createClient } from "@/lib/supabase/public";
import type { TeamMemberRow } from "@/types/team";

export const metadata: Metadata = {
  title: "Our Team",
};

const TeamPage = async () => {
  const supabase = createClient();
  const { data: members } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  const all = (members as TeamMemberRow[]) ?? [];

  return (
    <DanboxLayout>
      <PageBanner pageName="Our Team" />
      <Volunter
        leadership={all.filter((m) => m.section === "leadership")}
        core={all.filter((m) => m.section === "core")}
        community={all.filter((m) => m.section === "community")}
      />
    </DanboxLayout>
  );
};

export default TeamPage;
