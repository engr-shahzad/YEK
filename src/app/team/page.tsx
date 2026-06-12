import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { Volunter} from "@/components/Volunter";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "Our Team",
};

const CausesPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="Our Team" />
      <Volunter />
    </DanboxLayout>
  );
};

export default CausesPage;
