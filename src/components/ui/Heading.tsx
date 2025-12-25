import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/animations/variants";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, className }) => {
  return (
    <motion.div
      className={cn("text-center mb-12", className)}
      variants={fadeIn("down")}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
};

export { Heading };
