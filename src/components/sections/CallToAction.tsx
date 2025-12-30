import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/variants";

const CallToAction = () => {
  return (
    <Section>
      <motion.div
        variants={fadeIn()}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-primary text-white p-12 rounded-lg text-center shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-4">Ready for an Unforgettable Stay?</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Contact us today to book your room or apartment and experience the best we have to offer.
        </p>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => window.open("https://wa.me/5978689487", "_blank")}
        >
          Book via WhatsApp
        </Button>
      </motion.div>
    </Section>
  );
};

export { CallToAction };
