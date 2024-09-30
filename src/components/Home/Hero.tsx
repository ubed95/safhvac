import '@splidejs/react-splide/css/core';
import {
  Splide,
  SplideTrack,
  SplideSlide,
  // @ts-expect-error IDK: Need to Look
} from '@splidejs/react-splide';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Typography from '../Typography';
const Hero = () => {
  return (
    <Splide
      options={{
        autoplay: true,
        rewind: true,
        arrows: true,
        perPage: 1,
        paginationDirection: 'ltr',
        classes: {
          page: 'splide__pagination__page btn btn-secondary btn-circle btn-xs [&.is-active]:bg-white [&.is-active]:border-white',
        }
        // pagination: true,
        // perPage: 1,
      }}
      hasTrack={false}
      tag="section"
      className="carousel w-full h-[100dvh]"
      aria-label="section"
    >
      <SplideTrack className='w-full h-full'>
        <SplideSlide className='w-full h-full'>
          <article className="relative slide slide-1 w-full h-full bg-[url('./assets/home/hero-1.jpg')] bg-cover animate-fadeImage bg-no-repeat bg-top before:absolute before:inset-0 before:bg-black before:bg-opacity-35">
            <div className="slide-content w-full max-w-5xl absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
              <Typography.h1>
                Renewable & Environment Monitoring
              </Typography.h1>
              <Typography.p className='mt-6 tracking-wider text-white'>
                Monitoring | Data Analytics | Remote Management
              </Typography.p>
            </div>
          </article>
        </SplideSlide>
        <SplideSlide className='w-full h-full'>
          {/* <div
            id="slide2"
            className="carousel-item relative w-full before:absolute before:inset-0 before:bg-black before:bg-opacity-35"
          >
          </div> */}
          <article className="relative slide slide-2 w-full h-full bg-[url('./assets/home/hero-2.jpg')] bg-cover animate-fadeImage bg-no-repeat bg-top before:absolute before:inset-0 before:bg-black before:bg-opacity-35">
            <div className="slide-content w-full max-w-5xl absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
              <Typography.h1>
                Aiding Future
              </Typography.h1>
              <Typography.p className='mt-6 tracking-wider text-white'>
                For more than a decade
              </Typography.p>
            </div>
          </article>
        </SplideSlide>
        <SplideSlide className='w-full h-full'>
          <article className="relative slide slide-3 w-full h-full bg-[url('./assets/home/hereo-3.jpg')] bg-cover animate-fadeImage bg-no-repeat bg-top before:absolute before:inset-0 before:bg-black before:bg-opacity-35">
            <div className="slide-content w-full max-w-5xl absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
              <Typography.h1>
                Inertial Navigation Systems
              </Typography.h1>
              <Typography.p className='mt-6 tracking-wider text-white'>
                Inertial Navigation Systems for Guidance, Navigation and Control
                use cases for Airborne, Land and Naval applications
              </Typography.p>
            </div>
          </article>
        </SplideSlide>
      </SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev btn btn-secondary btn-circle btn-sm lg:btn-md text-white lg:text-2xl absolute top-2/4 -translate-y-2/4 right-4 lg:right-8"><FaAngleRight /></button>
        <button className="splide__arrow splide__arrow--next btn btn-secondary btn-circle btn-sm lg:btn-md text-white lg:text-2xl absolute top-2/4 -translate-y-2/4 left-4 lg:left-8"><FaAngleLeft /></button>
      </div>

      <ul className="splide__pagination absolute left-2/4 -translate-x-2/4 bottom-10 flex gap-2"></ul>
    </Splide>
  );
};

export default Hero;
