import type { Metadata } from "next";
import { About1, AboutStory } from "@/components/About";
import { Cta5 } from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import { Team1 } from "@/components/Team";
import DanboxLayout from "@/layout/DanboxLayout";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <DanboxLayout>
      <PageBanner pageName="About Us" />
      <About1 />
      <AboutStory />
      <Cta5 />

      <Team1 />
    </DanboxLayout>
  );
};

export default AboutPage;
