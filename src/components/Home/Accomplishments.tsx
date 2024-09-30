import { ACCOMPLISHMENTS } from '../../data';
import { FaPlus } from 'react-icons/fa';
import Typography from '../Typography';

const Accomplishments = () => {
  return (
    <section className="max-w-7xl px-4 py-12 lg:py-28 lg:px-0 mx-auto">
      <Typography.h2 className="text-center tracking-wider">
        Our Accomplishments
      </Typography.h2>
      <div className="grid mt-8 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-4">
        {ACCOMPLISHMENTS.map(({ count, icon: Icon, text }, index) => (
          <article className='flex flex-col items-center' key={index}>
            <div className='w-32 h-32 bg-white rounded-full border flex items-center justify-center'>
              <Icon className='w-[60%] h-[60%] text-secondary' />
            </div>
            <span className="count flex items-center gap-2 text-2xl font-medium mt-8">
              {count} <FaPlus />
            </span>
            <Typography.h4 className="text-black font-thin mt-4 text-center">{text}</Typography.h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Accomplishments;
