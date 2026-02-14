import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import OurStorySection from "../components/OurStorySection";
import PhotoMemoriesSection from "../components/PhotoMemoriesSection";
import LoveLettersSection from "../components/LoveLettersSection";
import PlaylistSection from "../components/PlaylistSection";
import FinalMessageSection from "../components/FinalMessageSection";
import FloatingHearts from "../components/FloatingHearts";

const Index = () => {
  return (
    <div className="relative">
      <FloatingHearts />
      <Navigation />
      <main>
        <HeroSection />
        <OurStorySection />
        <PhotoMemoriesSection />
        <LoveLettersSection />
        <PlaylistSection />
        <FinalMessageSection />
      </main>
    </div>
  );
};

export default Index;
