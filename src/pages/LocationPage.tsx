import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { MapPin } from "lucide-react";

const LocationPage = () => {
  return (
    <PageWrapper>
      <Section>
        <Heading
          title="Our Location"
          subtitle="Find us easily in the heart of the city."
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-200 h-96 w-full rounded-lg mb-8 flex items-center justify-center">
            <p className="text-gray-500">Google Map will be embedded here.</p>
          </div>
          <div className="flex justify-center items-center">
            <MapPin size={24} className="mr-3 text-secondary" />
            <p className="text-xl">123 Hotel Street, Paradise City</p>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default LocationPage;
