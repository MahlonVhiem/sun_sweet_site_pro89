import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { siteConfig } from "@/config/siteConfig";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <PageWrapper>
      <Section>
        <Heading title="Contact Us" subtitle="We'd love to hear from you." />
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="text-gray-600">
                For reservations or any inquiries, please feel free to contact us
                using the information below.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone size={20} className="mr-4 mt-1 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">{siteConfig.contact.phone}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail size={20} className="mr-4 mt-1 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-600 hover:text-primary transition-colors">
                {siteConfig.contact.email}
              </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="mr-4 mt-1 text-secondary" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <a 
                      href={siteConfig.contact.googleMapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {siteConfig.contact.address}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
              <p className="text-gray-600">
                Our contact form is currently under construction. Please use the contact details to get in touch.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Contact;
