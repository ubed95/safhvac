import {
    Splide,
    SplideTrack,
    SplideSlide,
    // @ts-expect-error IDK: Need to Look
} from '@splidejs/react-splide';
import { TESTIMONIALS } from '../../data';
import Typography from '../Typography';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Testimonials = () => {
  return (
      <section className="testimonials px-4 py-12 lg:px-0 bg-testimonials bg-cover">
          <Typography.h2 className="text-center tracking-wider text-white">
              Testimonials
          </Typography.h2>
        <Splide
            options={{
                arrows: true,
                perPage: 1,
                pagination: false,
            }}
            hasTrack={false}
            tag="section"
            className="max-w-7xl mx-auto mt-16"
            aria-label="section"
        >
            <SplideTrack>
                {TESTIMONIALS.map(test => <SplideSlide>
                    <Typography.h4 className='text-white'>{test.text}</Typography.h4>
                    <Typography.p className='text-white mt-8 text-xl'>{test.name}</Typography.p>
                </SplideSlide>)}
            </SplideTrack>
            <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev btn btn-ghost btn-circle btn-xs lg:btn-sm text-white lg:text-2xl absolute right-0 -bottom-1"><FaLongArrowAltRight /></button>
                  <button className="splide__arrow splide__arrow--next btn btn-ghost btn-circle btn-xs lg:btn-sm text-white lg:text-2xl absolute right-8 -bottom-1"><FaLongArrowAltLeft /></button>
            </div>
        </Splide>
    </section>
  )
}

export default Testimonials