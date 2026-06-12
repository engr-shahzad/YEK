import type { Metadata } from "next";
import { CausesTab } from "@/components/Causes";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "Our Projects",
};

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Our Projects" />
      <CausesTab />
    </DanboxLayout>
  );
};

export default CausesPage;
