import { About1 } from "@/components/About";
import { Donate1 } from "@/components/Donate";
import { Faq1 } from "@/components/Faq";
import { HeroSlider1 } from "@/components/HeroSlider";
import { Service1 } from "@/components/Service";
import { Team1 } from "@/components/Team";
import DanboxLayout from "@layout/DanboxLayout";

const page = () => {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/assets/img/hero/banner.jpg"
        fetchPriority="high"
      />
      <DanboxLayout>
        <HeroSlider1 />
        <About1 />
        <Service1 />
        <Faq1 />
        <Donate1 />
        <Team1 />
      </DanboxLayout>
    </>
  );
};

export default page;
