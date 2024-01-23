import { Box } from '@mantine/core';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { AboutSection } from '@/components/AboutSection/AboutSection';
import { RoadmapSection } from '@/components/RoadmapSection/RoadmapSection';
import { TeamSection } from '@/components/TeamSection/TeamSection';
import { FaqSection } from '@/components/FaqSection/FaqSection';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Slider } from '@/components/Slider/Slider';

export default function HomePage() {
  return (
    <Box style={{ overflow: 'hidden' }}>
      <Header />
      <HeroSection />
      <Box style={{ background: '#E50B0B', height: '30px' }} />
      <Box style={{ position: 'relative' }}>
        <AboutSection />
        <Box className="myBox">
          <Slider />
        </Box>
      </Box>
      <RoadmapSection />
      <TeamSection />
      <FaqSection />
      <Footer />
    </Box>
  );
}
