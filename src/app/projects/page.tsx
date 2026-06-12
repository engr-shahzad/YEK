import type { Metadata } from "next";
import { CausesTab } from "@/components/Causes";
import { Cta1 } from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "Our Projects",
};

const CausesPage = () => {
  return (
    <DanboxLayout>

      <CausesTab />
    </DanboxLayout>
  );
};

export default CausesPage;
