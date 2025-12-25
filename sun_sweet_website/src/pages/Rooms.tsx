import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

const Rooms = () => {
  return (
    <PageWrapper>
      <Section>
        <Heading title="Our Rooms" subtitle="Details about our rooms will be available soon." />
        <div className="text-center">
          <p>Please check back later for more information on our comfortable and stylish rooms.</p>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Rooms;
