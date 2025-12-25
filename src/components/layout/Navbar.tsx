import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut" as any,
      },
    },
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link to="/" className="text-2xl font-bold text-primary">
          {siteConfig.name}
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                `text-gray-600 hover:text-primary transition-colors ${
                  isActive ? "text-primary font-semibold" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, "_blank")}
          >
            Book Now
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full"
          >
            <div className="flex flex-col items-center space-y-4 py-8">
              {siteConfig.navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg text-gray-600 hover:text-primary transition-colors ${
                      isActive ? "text-primary font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Button
                onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, "_blank")}
                className="mt-4"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navbar };
