'use client';

import { useRef, useState } from 'react';
import {
  RiArrowLeftLongLine,
  RiArrowRightLongLine,
  RiArrowRightUpLongLine,
} from '@remixicon/react';
import Image from '@repo/registry/next-image-mock';
import type { Swiper as SwiperType } from 'swiper';
import { EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as Badge from '@/components/ui/badge';
import * as LinkButton from '@/components/ui/link-button';

import 'swiper/css';
import 'swiper/css/effect-fade';
const testimonials = [
  {
    name: 'Arthur Taylor',
    title: 'Director of Implementation',
    quote:
      'We reduced late payments by 90% after using the smart scheduling tools.',
    highlight: 'That alone was worth it.',
    stats: [
      {
        value: '16%',
        label: 'Faster invoice approvals',
      },
      {
        value: '22%',
        label: 'More on-time payments',
      },
      {
        value: '41%',
        label: 'Less manual work',
      },
    ],
  },
  {
    name: 'Sarah Mitchell',
    title: 'Head of Operations',
    quote: 'The automation features saved our team over 20 hours per week.',
    highlight: 'It transformed how we work.',
    stats: [
      {
        value: '17%',
        label: 'Faster invoice approvals',
      },
      {
        value: '22%',
        label: 'More on-time payments',
      },
      {
        value: '41%',
        label: 'Less manual work',
      },
    ],
  },
  {
    name: 'David Chen',
    title: 'CFO at TechCorp',
    quote: 'Invoice management has never been this seamless and efficient.',
    highlight: 'Our cash flow improved significantly.',
    stats: [
      {
        value: '16%',
        label: 'Faster invoice approvals',
      },
      {
        value: '22%',
        label: 'More on-time payments',
      },
      {
        value: '41%',
        label: 'Less manual work',
      },
    ],
  },
  {
    name: 'Emily Rodriguez',
    title: 'Finance Manager',
    quote:
      'The reporting dashboard gives us real-time insights we never had before.',
    highlight: 'Decision-making is now data-driven.',
    stats: [
      {
        value: '16%',
        label: 'Faster invoice approvals',
      },
      {
        value: '22%',
        label: 'More on-time payments',
      },
      {
        value: '41%',
        label: 'Less manual work',
      },
    ],
  },
];

export default function Testimonials01() {
  const swiperRef = useRef<SwiperType | null>(null);
  const swiperStatsRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='bg-bg-white-0 py-10 lg:py-20 xl:py-24 w-full'>
      <div className='mx-auto mb-6 flex max-w-[808px] flex-col gap-4 px-6 lg:mb-12 lg:flex-row lg:items-end lg:gap-6 lg:px-0'>
        <div className='flex flex-col gap-3'>
          <Badge.Root
            variant='lighter'
            className='text-label-sm text-text-sub-600 bg-bg-weak-50 h-7 w-fit rounded-[9px] px-2.5 normal-case'
          >
            Real voices from real users
          </Badge.Root>
          <h3 className='text-title-h4 lg:text-title-h3 text-text-strong-950 !font-[550]'>
            Why people trust us with their money
          </h3>
        </div>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <p className='text-label-md text-text-sub-600'>
            Thousands of users streamline their finances with Apex every day.
          </p>
          <LinkButton.Root
            className='text-label-md text-text-strong-950 hover:text-text-strong-950 group h-auto cursor-pointer justify-start gap-1 whitespace-break-spaces transition-all duration-300'
            asChild
          >
            <a href='#'>
              Get started free
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className='text-text-soft-400 group-hover:text-text-strong-950 size-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </a>
          </LinkButton.Root>
        </div>
      </div>
      <div className='mx-auto flex max-w-7xl flex-col gap-1 px-6 lg:px-7'>
        <Swiper
          modules={[Navigation, EffectFade]}
          effect='fade'
          fadeEffect={{ crossFade: true }}
          spaceBetween={4}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            setActiveIndex(swiper.activeIndex);
          }}
          className='relative w-full rounded-t-3xl rounded-b-xl'
        >
          <Image
            src='https://alignui.com/images/blocks/testimonials-1-logo-1.svg'
            alt='testimonials logo'
            width={480}
            height={480}
            className='absolute -top-27.5 -right-73 z-1 h-67.75 w-76.5 shrink-0 -translate-x-1/2 dark:hidden lg:-top-50 lg:-right-30 lg:h-100 lg:w-100 xl:-top-70 xl:-right-39 xl:h-120 xl:w-120'
          />
          <Image
            src='https://alignui.com/images/blocks/testimonials-1-logo-1-dark.svg'
            alt='testimonials logo'
            width={480}
            height={480}
            className='absolute -top-27.5 -right-73 z-1 hidden h-67.75 w-76.5 shrink-0 -translate-x-1/2 dark:block lg:-top-50 lg:-right-30 lg:h-100 lg:w-100 xl:-top-70 xl:-right-39 xl:h-120 xl:w-120'
          />
          <div className='absolute bottom-5 left-5 z-10 flex lg:right-12 lg:bottom-12 lg:left-auto'>
            <Image
              src='https://alignui.com/images/blocks/testimonials-1-image-1.svg'
              alt='testimonials image'
              width={104}
              height={24}
              className='h-auto w-26 shrink-0 dark:hidden'
            />
            <Image
              src='https://alignui.com/images/blocks/testimonials-1-image-1-dark.svg'
              alt='testimonials image'
              width={104}
              height={24}
              className='hidden h-auto w-26 shrink-0 dark:block'
            />
          </div>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='flex !h-auto'>
              <div className='bg-bg-weak-50 relative flex h-full w-full flex-col gap-8 overflow-hidden rounded-t-3xl rounded-b-xl p-5 pb-19 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:p-12'>
                <div className='relative z-10 flex flex-col gap-8 lg:gap-12'>
                  <div
                    className={`flex flex-col transition-all duration-500 ease-out lg:gap-0.5 ${activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                    style={{
                      transitionDelay: activeIndex === index ? '0s' : '0s',
                    }}
                  >
                    <div className='text-label-md text-text-strong-950'>
                      {testimonial.name}
                    </div>
                    <div className='text-label-sm text-text-soft-400'>
                      {testimonial.title}
                    </div>
                  </div>
                  <h4
                    className={`text-title-h6 lg:text-title-h5 xl:text-title-h4 text-text-sub-600 w-full transition-all duration-500 ease-out lg:w-[60%] ${activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                    style={{
                      transitionDelay: activeIndex === index ? '0.2s' : '0s',
                    }}
                  >
                    {testimonial.quote}{' '}
                    <span className='text-text-strong-950 lg:flex'>
                      {testimonial.highlight}
                    </span>
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='bg-bg-weak-50 flex w-full flex-col gap-4 rounded-t-xl rounded-b-3xl p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-13 lg:py-8'>
          <Swiper
            modules={[Navigation, EffectFade]}
            effect='fade'
            fadeEffect={{ crossFade: true }}
            spaceBetween={4}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperStatsRef.current = swiper;
            }}
            allowTouchMove={false}
            className='w-full'
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10'>
                  {testimonial.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className={`flex flex-col gap-1 pb-4 transition-all duration-500 ease-out lg:pr-10 lg:pb-0 ${statIndex === testimonial.stats.length - 1 ? '' : 'border-stroke-soft-200 border-b lg:border-r lg:border-b-0'} ${activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                      style={{
                        transitionDelay:
                          activeIndex === index
                            ? `${0.4 + statIndex * 0.2}s`
                            : '0s',
                      }}
                    >
                      <div className='text-label-lg text-text-strong-950'>
                        {stat.value}
                      </div>
                      <div className='text-label-sm text-text-soft-400'>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex items-center gap-2'>
            <button
              onClick={() => {
                swiperRef.current?.slidePrev();
                swiperStatsRef.current?.slidePrev();
              }}
              disabled={isBeginning}
              className='border-stroke-soft-200 bg-bg-soft-200 group disabled:bg-bg-weak-50 flex h-10 w-full cursor-pointer items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed lg:w-10'
            >
              <RiArrowLeftLongLine
                className={`size-5 transition-all duration-300 ${isBeginning ? 'text-text-soft-400' : 'text-text-sub-600 group-hover:text-text-sub-600'}`}
              />
            </button>
            <button
              onClick={() => {
                swiperRef.current?.slideNext();
                swiperStatsRef.current?.slideNext();
              }}
              disabled={isEnd}
              className='border-stroke-soft-200 bg-bg-soft-200 group disabled:bg-bg-weak-50 flex h-10 w-full cursor-pointer items-center justify-center rounded-full border transition-all duration-300 disabled:cursor-not-allowed lg:w-10'
            >
              <RiArrowRightLongLine
                className={`size-5 transition-all duration-300 ${isEnd ? 'text-text-soft-400' : 'text-text-sub-600 group-hover:text-text-sub-600'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}