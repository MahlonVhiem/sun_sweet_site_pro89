import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/components/animations/variants";

import gallery1 from "@/assets/images/gallery-1.jpg";
import gallery2 from "@/assets/images/gallery-2.jpg";
import gallery3 from "@/assets/images/gallery-3.jpg";
import gallery4 from "@/assets/images/gallery-4.jpg";

const galleryImages = [
  { src: gallery1, alt: "Beautifully designed hotel room with a plush bed and modern decor." },
  { src: gallery2, alt: "Elegant hotel lobby with a comfortable seating area and stylish lighting." },
  { src: gallery3, alt: "Luxurious swimming pool with crystal clear water and relaxing lounge chairs." },
  { src: gallery4, alt: "Striking exterior view of the hotel, showcasing its modern architecture." },
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
