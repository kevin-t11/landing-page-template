import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className='relative flex items-center justify-center px-8 md:px-0'>
      <div className='w-full max-w-5xl aspect-4/3 md:aspect-video rounded-2xl ring-8 md:ring-12 ring-sky-800/30'>
        <Image
          className='md:size-full object-cover rounded-2xl'
          src='/Dashboard.png'
          alt='Hero'
          width={1000}
          height={1000}
          draggable={false}
        />
        <div className='absolute inset-x-0 -bottom-4 md:bottom-0 md:h-60 h-40 w-full bg-linear-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none'></div>
      </div>
    </div>
  );
};
