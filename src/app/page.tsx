import { FeaturesSection } from '@/components/Features';
import { HeroSection } from '@/components/Hero';
import { HeroImage } from '@/components/HeroImage';
import { Logo, Navbar } from '@/components/Navbar';
import { BackgroundPattern } from '@/components/pattern';
import { Testimonial } from '@/components/Testimonials';
import { cn } from '@/lib/utils';

export default function Page() {
  return (
    <BackgroundPattern>
      <Container>
        <Navbar />
        <HeroSection />
        <HeroImage />
        <SectionSeparator className='-mt-24 relative z-10' />
        <FeaturesSection />
        <SectionSeparator />
        <Testimonial />
      </Container>
    </BackgroundPattern>
  );
}

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='max-w-5xl mx-auto space-y-20'>{children}</div>;
};

const SectionSeparator = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'mx-auto flex h-8 w-full max-w-xs md:max-w-[596px] items-center gap-6 px-4 mb-32',
        className
      )}
    >
      <div className='relative h-px w-full flex-1 bg-border'>
        <div className='absolute z-30 w-2 h-2 bg-white border border-border left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 ' />
        <div className='absolute z-30 w-2 h-2 bg-white border border-border right-0 top-1/2 -translate-y-1/2 translate-x-1/2' />
      </div>
      <Logo className='size-4 shrink-0' />
      <div className='relative h-px w-full flex-1 bg-border'>
        <div className='absolute z-30 w-2 h-2 bg-white border border-border left-0 top-1/2 -translate-x-1/2 -translate-y-1/2' />
        <div className='absolute z-30 w-2 h-2 bg-white border border-border right-0 top-1/2 -translate-y-1/2 translate-x-1/2' />
      </div>
    </div>
  );
};
