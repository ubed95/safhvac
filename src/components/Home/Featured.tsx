import Typography from '../Typography';
import '@splidejs/react-splide/css/core';
import {
  Splide,
  SplideTrack,
  SplideSlide,
  // @ts-expect-error IDK: Need to Look
} from '@splidejs/react-splide';
import { FEATURED_PRODUCTS } from '../../data';
import FeaturedCard from '../FeaturedCard';

const Featured = () => {
  return (
    <section className="featured max-w-7xl px-4 py-12 lg:px-0 mx-auto">
      <Typography.h2 className="text-center tracking-wider">Featured Products</Typography.h2>
      <Splide
        options={{
          autoplay: true,
          rewind: true,
          arrows: false,
          perPage: 1,
          mediaQuery: 'min',
          breakpoints: {
            600: {
                perPage: 2,
                gap: '1rem'
            },
            1024: {
                perPage: 3,
            }
          },
          paginationDirection: 'ltr',
          classes: {
            page: 'splide__pagination__page btn btn-secondary btn-circle btn-xs [&.is-active]:bg-white',
          },
        }}
        hasTrack={false}
        className='mt-16'
        tag="section"
      >
        <SplideTrack>
          {FEATURED_PRODUCTS.map((prod) => (
            <SplideSlide>
              <FeaturedCard key={prod.name} {...prod} />
            </SplideSlide>
          ))}
        </SplideTrack>

        <ul className="splide__pagination flex gap-2 mt-4"></ul>
      </Splide>
    </section>
  );
};

export default Featured;
