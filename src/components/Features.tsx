import { cn } from '@/lib/utils';
import { AiScriptStudio } from './features/ai-script-studio';
import { CompetitiveSignals } from './features/competitive-signals';
import { CreatorIntellegence } from './features/creator-intellegence';
import { HookStyle } from './features/hook-style';
import { PersonaCreation } from './features/persona-creation';
import { ViralVideoXRay } from './features/viral-video-xray';
import { DottedGlowBackground } from './ui/dotted-glow-background';

export const FeaturesSection = () => {
  const features = [
    {
      title: 'Creator Intelligence Search',
      description: 'Find winners before everyone else',
      skeleton: <CreatorIntellegence />,
      className: 'col-span-3',
    },
    {
      title: 'Viral Video X-Ray',
      description: 'See exactly why a video worked',
      skeleton: <ViralVideoXRay />,
      className: 'col-span-2',
    },
    {
      title: 'Hook & Style Vault',
      description: 'Turn viral content into reusable assets',
      skeleton: <HookStyle />,
      className: 'col-span-2',
    },
    {
      title: 'AI Script Studio',
      description: 'Create high-performing scripts within seconds',
      skeleton: <AiScriptStudio />,
      className: 'col-span-3',
    },
    {
      title: 'Persona-Based Creation',
      description: 'Content that sounds like you',
      skeleton: <PersonaCreation />,
      className: 'col-span-3',
    },
    {
      title: 'Competitive Signals',
      description: "Spot trends before they're saturated",
      skeleton: <CompetitiveSignals />,
      className: 'col-span-2',
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center -mt-14 gap-2'>
      <span className='text-sm font-medium bg-linear-to-r ring-2 ring-offset-1 ring-offset-sky-200 ring-sky-400 from-sky-500 to-sky-600 rounded-full px-4 py-1 text-white hover:brightness-110 active:scale-95'>
        Features
      </span>
      <h2 className='text-4xl font-bold text-center tracking-tight max-w-xl mx-auto font-sans'>
        Built for Creators Who Move Early
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-full gap-4 my-10'>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({
  title,
  description,
  skeleton,
  className,
}: {
  title: string;
  description: string;
  skeleton: React.ReactNode;
  className: string;
}) => {
  return (
    <div
      className={cn(
        'border border-muted rounded-xl px-4 pt-4 relative overflow-hidden ',
        className
      )}
    >
      <DottedGlowBackground
        opacity={0.1}
        backgroundOpacity={0.02}
        color='#00bcff'
      />
      <div className='relative z-10'>
        <div className='space-y-1'>
          <FeatureCardTitle title={title} />
          <FeatureCardDescription description={description} />
        </div>
        <FeatureCardSkeleton>{skeleton}</FeatureCardSkeleton>
      </div>
    </div>
  );
};

const FeatureCardTitle = ({ title }: { title: string }) => {
  return (
    <h3 className='text-xl font-bold text-left tracking-tight max-w-xl mx-auto font-sans text-shadow-xs text-shadow-neutral-300/80'>
      {title}
    </h3>
  );
};

const FeatureCardDescription = ({ description }: { description: string }) => {
  return (
    <p className='text-muted-foreground text-sm text-left font-medium'>
      {description}
    </p>
  );
};

const FeatureCardSkeleton = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full h-60'>{children}</div>;
};
