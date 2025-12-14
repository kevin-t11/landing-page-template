import { FeaturesSection } from '@/components/Features';
import { HeroSection } from '@/components/Hero';
import { HeroImage } from '@/components/HeroImage';
import { Navbar } from '@/components/Navbar';
import { BackgroundPattern } from '@/components/pattern';

export default function Page() {
  return (
    <BackgroundPattern>
      <Container>
        <Navbar />
        <HeroSection />
        <HeroImage />
        <FeaturesSection />
      </Container>
    </BackgroundPattern>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='max-w-5xl mx-auto space-y-20'>{children}</div>;
};
