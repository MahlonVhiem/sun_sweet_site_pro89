import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Wifi, Tv, Coffee, Wind } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations/variants";

const amenities = [
  {
    icon: <Wifi size={40} className="text-secondary" />,
    title: "Free High-Speed Wi-Fi",
    description: "Stay connected with our complimentary high-speed internet.",
  },
  {
    icon: <Tv size={40} className="text-secondary" />,
    title: "Smart TVs",
    description: "Enjoy your favorite shows and movies on modern smart TVs.",
  },
  {
    icon: <Coffee size={40} className="text-secondary" />,
    title: "In-Room Coffee & Tea",
    description: "Start your day right with our in-room coffee and tea makers.",
  },
  {
    icon: <Wind size={40} className="text-secondary" />,
    title: "Air Conditioning",
    description: "Individual climate control for your comfort.",
  },
];

const Amenities = () => {
  return (
    <Section>
      <Heading
        title="Our Amenities"
        subtitle="We provide everything you need for a comfortable and relaxing stay."
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {amenities.map((amenity, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="text-center p-6 bg-gray-50 rounded-lg shadow-sm"
          >
            <div className="flex justify-center mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
            <p className="text-gray-600">{amenity.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export { Amenities };
