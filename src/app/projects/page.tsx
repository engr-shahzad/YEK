import type { Metadata } from "next";
import { CausesTab } from "@/components/Causes";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import { createClient } from "@/lib/supabase/public";
import type { ProjectRow } from "@/types/project";

export const metadata: Metadata = {
  title: "Our Projects",
};

const CausesPage = async () => {
  const supabase = createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true });

  return (
    <DanboxLayout>
      <PageBanner pageName="Our Projects" />
      <CausesTab projects={(projects as ProjectRow[]) ?? []} />
    </DanboxLayout>
  );
};

export default CausesPage;
