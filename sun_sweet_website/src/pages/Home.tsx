import { PageWrapper } from "@/components/layout/PageWrapper";
import { Hero } from "@/components/sections/Hero";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { CallToAction } from "@/components/sections/CallToAction";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <Amenities />
      <Gallery />
      <CallToAction />
    </PageWrapper>
  );
};

export default Home;
