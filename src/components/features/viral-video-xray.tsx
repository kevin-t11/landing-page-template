import Image from 'next/image';

export const ViralVideoXRay = () => {
  return (
    <div className='-mt-4'>
      <Image
        src='/input_video_xray.svg'
        alt='Viral Video X-Ray'
        width={100}
        height={100}
        className='w-full h-full object-cover scale-110'
        draggable={false}
      />
    </div>
  );
};
