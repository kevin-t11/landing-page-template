'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      "View Count is a great company for webflow, framer and other types of website development. We hired an independent contractor to work on the site. There were many issues and mistakes that View Count fixed. They have excellent management tools for transparency and they have excellent client comms. I will be using their services in the future for additional development work. Don't hesitate to hire this team, you will get more than you pay for.",
    name: 'Kash Badami',
    role: 'Founder & COO at Paystreet.com',
    image:
      'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfDJ8MHx8fDA%3D',
  },
  {
    quote:
      'Working with View Count exceeded our expectations, blending professionalism with a seamless experience across all aspects of our project. From efficient management to innovative design and flawless execution, their team demonstrated exceptional expertise. Their attention to detail, commitment to customer satisfaction, and exceptional value for money stand out. We highly recommend them for any project and look forward to future collaborations.',
    name: 'Thorsten J. Gorny',
    role: 'Co-founder & CEO at Sanctions.io',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF2YXRhcnN8ZW58MHx8MHx8fDA%3D$0',
  },
  {
    quote:
      "Working with View Count on Upwork was fantastic. They were great at talking things through, open to my ideas for my website, and skilled at making everything just right. They were professional and always made sure I was happy with how things were going. I'm totally happy with the result and highly recommend them for any project.",
    name: 'Lincoln Turner',
    role: 'Co-Founder at Whizzimo.com',
    image:
      'https://images.unsplash.com/photo-1640951613773-54706e06851d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfDJ8MHx8fDA%3D',
  },
  {
    quote:
      "View Count delivered a high-quality product that met the client's satisfaction. They were also highly responsive and communicative, providing constant updates on the project's progress, including design iteration times. Their choice of design was superb.",
    name: 'Kyle Dunn',
    role: 'Co-Founder & CEO at Miranah Health',
    image:
      'https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww',
  },
  {
    quote:
      "I'm the founder of Cyrano, and I found the View Count team incredibly friendly and very engaged. I felt like I could tap them for an update or a question any time, day or night, and got a pretty quick response. And they did terrific, quick work.",
    name: 'Kerry L.',
    role: 'Founder & CEO at Cyrano.xyz',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    quote:
      "View Count helped me redesign my website exactly as I wanted it and delivered great results on time. They were attentive to my specifications and extremely responsive and accessible. They also took the initiative to propose different solutions than what I initially planned, and I'm glad I followed their advice. It was a pleasure working with them and I would do it again.",
    name: 'Marie-Josee Privyk',
    role: 'ESG Advisor',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
  },
];

export function Testimonial() {
  const [active, setActive] = useState(0);

  return (
    <div className='w-full px-6 max-w-4xl mx-auto -mt-12'>
      <div className='flex flex-col items-center gap-8'>
        <span className='text-sm font-medium bg-linear-to-r ring-2 ring-offset-1 ring-offset-sky-200 ring-sky-400 from-sky-500 to-sky-600 rounded-full px-4 py-1 text-white hover:brightness-110 active:scale-95'>
          Testimonials
        </span>

        <h2 className='text-center text-4xl md:text-5xl max-w-xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-t from-neutral-700 to-neutral-900'>
          Explore what our clients say about us
        </h2>

        <p className='text-center text-lg text-neutral-500 max-w-2xl mx-auto'>
          Check our a few our top reviews from Clutch, Upwork & Testimonials
          from clients
        </p>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-6'>
        <div className='flex items-center justify-center -space-x-2'>
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                'relative w-11 h-11 md:w-10 md:h-10 rounded-full overflow-hidden',
                'ring-2 ring-background transition-all duration-300 ease-out',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                active === i
                  ? 'z-10 scale-110 grayscale-0'
                  : 'grayscale hover:grayscale-0 hover:scale-105'
              )}
            >
              <Image
                src={t.image || '/vercel.svg'}
                alt={t.name}
                fill
                className='object-cover'
              />
            </button>
          ))}
        </div>

        <div className='hidden md:block h-8 w-px bg-border/60' />
        <div className='md:hidden h-px w-20 bg-border/60' />

        <div className='grid min-h-[44px] text-center md:text-left'>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                'col-start-1 row-start-1 flex flex-col justify-center gap-0.5',
                'transition-all duration-300 ease-out',
                active === i
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-1 pointer-events-none'
              )}
            >
              <span className='text-[15px] font-medium text-foreground'>
                {t.name}
              </span>
              <span className='text-[13px] text-muted-foreground'>
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className='relative min-h-[80px] mt-4 md:p-0 mx-4'>
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={cn(
              'absolute inset-0 text-xl md:text-2xl font-light leading-relaxed text-foreground text-balance',
              'transition-all duration-500 ease-out',
              active === i
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-4 blur-sm pointer-events-none'
            )}
          >
            &quot;{t.quote}&quot;
          </p>
        ))}
      </div>
    </div>
  );
}
