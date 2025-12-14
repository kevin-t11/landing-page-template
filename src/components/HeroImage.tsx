import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='w-full h-full rounded-2xl ring-12 ring-sky-800/30'>
        <Image
          className='w-full h-full object-cover rounded-2xl'
          src='/Dashboard.png'
          alt='Hero'
          width={1000}
          height={1000}
          draggable={false}
        />
        <div className='absolute inset-x-0 bottom-0 h-60 w-full bg-linear-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none'></div>
      </div>
    </div>
  );
};
