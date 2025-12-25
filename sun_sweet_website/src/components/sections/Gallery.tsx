import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/components/animations/variants";

const galleryImages = [
  { src: "/src/assets/images/gallery-1.jpg", alt: "Hotel Room" },
  { src: "/src/assets/images/gallery-2.jpg", alt: "Lobby" },
  { src: "/src/assets/images/gallery-3.jpg", alt: "Swimming Pool" },
  { src: "/src/assets/images/gallery-4.jpg", alt: "Exterior View" },
];

const Gallery = () => {
  return (
    <Section className="bg-light">
      <Heading
        title="Our Gallery"
        subtitle="A glimpse into the comfort and style of Sun Sweet Hotel."
      />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            variants={fadeIn()}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export { Gallery };
