import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { staggerContainer, slideUp } from "@/components/animations/variants";
import { siteConfig } from "@/config/siteConfig";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="relative h-screen flex items-center justify-center"
    >
      {/* Add your background image here */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/hero-bg.jpg')" }} // Placeholder
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative text-center text-white z-10 px-4">
        <motion.h1
          variants={slideUp}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Welcome to {siteConfig.name}
        </motion.h1>
        <motion.p
          variants={slideUp}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Experience tranquility and luxury in the heart of the city.
        </motion.p>
        <motion.div variants={slideUp}>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open("https://wa.me/5978689478", "_blank")}
          >
            Book Your Stay
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export { Hero };
