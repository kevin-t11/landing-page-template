import { cn } from '@/lib/utils';
import { AiScriptStudio } from './features/ai-script-studio';
import { CompetitiveSignals } from './features/competitive-signals';
import { CreatorIntelligence } from './features/creator-intelligence';
import { HookStyle } from './features/hook-style';
import { PersonaCreation } from './features/persona-creation';
import { ViralVideoXRay } from './features/viral-video-xray';

export const FeaturesSection = () => {
  const features = [
    {
      title: 'Creator Intelligence Search',
      description: 'Find winners before everyone else',
      skeleton: <CreatorIntelligence />,
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
      description: 'Idea → research → script, instantly',
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
      <span className='text-sm font-medium bg-linear-to-r from-sky-500 to-sky-600 rounded-full px-4 py-1 text-white hover:brightness-110 active:scale-95'>
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
    <div className={cn('border border-muted rounded-xl p-4', className)}>
      <FeatureCardSkeleton>{skeleton}</FeatureCardSkeleton>
      <div className='space-y-1'>
        <FeatureCardTitle title={title} />
        <FeatureCardDescription description={description} />
      </div>
    </div>
  );
};

const FeatureCardTitle = ({ title }: { title: string }) => {
  return (
    <h3 className='text-xl font-bold text-left tracking-tight max-w-xl mx-auto font-sans'>
      {title}
    </h3>
  );
};

const FeatureCardDescription = ({ description }: { description: string }) => {
  return (
    <p className='text-muted-foreground text-sm text-left'>{description}</p>
  );
};

const FeatureCardSkeleton = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-full h-60'>{children}</div>;
};
