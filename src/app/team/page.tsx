import PageBanner from "@/components/PageBanner";
import { Volunter} from "@/components/Volunter";
import DanboxLayout from "@/layout/DanboxLayout";

const CausesPage = () => {
  return (
    <DanboxLayout>
      {/* <PageBanner pageName="Volunteer" pageTitle="Our Volunteer" /> */}
      <Volunter />
    </DanboxLayout>
  );
};

export default CausesPage;
