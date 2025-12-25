import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const LocationPage = () => {
  return (
    <PageWrapper>
      <Section>
        <Heading
          title="Our Location"
          subtitle="Find us easily in the heart of the city."
        />
        <div className="max-w-4xl mx-auto text-center">
          <iframe 
            src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Location"
            className="rounded-lg"
          ></iframe>
          <div className="flex justify-center items-center">
            <MapPin size={24} className="mr-3 text-secondary" />
            <a 
              href={siteConfig.contact.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-colors"
            >
              {siteConfig.contact.address}
            </a>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default LocationPage;
