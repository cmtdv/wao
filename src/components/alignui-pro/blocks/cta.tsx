'use client';

import { RiArrowRightUpLongLine } from '@remixicon/react';

import * as Button from '@/components/ui/button';
const Logo = ({ className }: { className?: string }) => (
  <svg
    width='64'
    height='64'
    viewBox='0 0 64 64'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M32 21.3333L22.9333 16V5.33333L32 0L41.0667 5.33333V16L32 21.3333Z'
      className='fill-primary-base'
    />
    <path
      d='M50.1333 32L41.0667 26.6667V16L50.1333 10.6667L59.2 16V26.6667L50.1333 32Z'
      className='fill-primary-base'
    />
    <path
      d='M41.0667 48V37.3333L50.1333 32L59.2 37.3333V48L50.1333 53.3333L41.0667 48Z'
      className='fill-primary-base'
    />
    <path
      d='M22.9333 48L32 42.6667L41.0667 48V58.6667L32 64L22.9333 58.6667V48Z'
      className='fill-primary-base'
    />
    <path
      d='M13.8667 32L22.9333 37.3333V48L13.8667 53.3333L4.79999 48V37.3333L13.8667 32Z'
      className='fill-primary-base'
    />
    <path
      d='M13.8667 32L22.9333 26.6667V16L13.8667 10.6667L4.79999 16V26.6667L13.8667 32Z'
      className='fill-primary-base'
    />
  </svg>
);

export default function Cta01() {
  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 w-full'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-7'>
        <Logo className='text-information-base size-12 lg:size-16' />
        <div className='flex flex-1 flex-col gap-2'>
          <div className='text-title-h4 lg:text-title-h5 xl:text-title-h4 text-text-strong-950 !font-[550]'>
            Ready to move your work forward?
          </div>
          <div className='text-text-sub-600 text-paragraph-md xl:text-paragraph-lg'>
            Turn your ideas into results with less effort.
          </div>
        </div>
        <Button.Root
          variant='primary'
          mode='filled'
          size='medium'
          className='shadow-complex-7 border-static-white/[0.24] w-fit cursor-pointer gap-1.5 rounded-xl border pr-4.5 pl-5 transition-all duration-300 hover:[background:linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_100%),#335CFF]'
        >
          Start your free trial
          <Button.Icon
            as={RiArrowRightUpLongLine}
            className='text-static-white/[0.64] size-5'
          />
        </Button.Root>
      </div>
    </div>
  );
}