import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />

      {/* Persistent WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          variant="secondary"
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => window.open(`https://wa.me/${siteConfig.contact.whatsapp}`, "_blank")}
          aria-label="Book via WhatsApp"
        >
          <MessageCircle size={28} />
        </Button>
      </div>
    </div>
  );
}

export default App;
