import { PageWrapper } from "@/components/layout/PageWrapper";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";
import roomImage from "@/assets/images/room bd.jpeg";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

const roomFeatures = [
  "King-size bed",
  "Private balcony",
  "4K Smart TV",
  "Mini-fridge",
  "En-suite bathroom",
];

const Rooms = () => {
  return (
    <PageWrapper>
      <Section>
        <Heading
          title="Our Rooms"
          subtitle="Comfort and luxury await in every one of our rooms."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-12 items-center">
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={roomImage}
              alt="Deluxe Room"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-primary mb-4">
              Deluxe Room
            </h3>
            <p className="text-gray-600 mb-6">
              Our Deluxe Rooms offer a perfect blend of comfort and style,
              designed to be your home away from home. Relax and unwind in a
              spacious and elegantly furnished environment.
            </p>
            <ul className="space-y-3 mb-8">
              {roomFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="text-secondary mr-3" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5978689487", "_blank")}
            >
              Book Now
            </Button>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
};

export default Rooms;
