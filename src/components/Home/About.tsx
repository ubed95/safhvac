import about from '../../assets/about.svg';
import Typography from '../Typography';

const About = () => {
  return (
    <section className='about max-w-7xl px-4 py-12 lg:px-0 mx-auto flex flex-col-reverse lg:flex-row lg:items-center lg:gap-x-8'>
      <div className="about-left w-full h-full flex-1">
        <img src={about} alt="About Image" />
      </div>
      <div className="about-right flex-1">
        <Typography.h2 className='mb-6 tracking-wider'>
            About Saf<span className='text-secondary font-bold'>HVAC</span>
        </Typography.h2>
        <Typography.p className='text-base text-slate-700 font-medium'>
            SafHVAC is a fast-growing deep-tech company developing innovative products for global customers.
        </Typography.p>
        <Typography.p className='text-base text-slate-500 tracking-wide mt-4'>
            Aeron offers a range of products and solutions under Inertial Navigation and Industrial Internet of Things verticals.
        </Typography.p>
        <Typography.p className='text-base text-slate-500 tracking-wide mt-2'>
            Aeron is supplying indigenously developed Inertial Navigation Systems for drones, robots, aircraft, armored vehicles in the defense sector, and safety sensors for heavy vehicles in the automotive sector.
            Under its Internet of Things product portfolio, Aeron offers high-quality Wireless Data Loggers & Gateways along with Environment Monitoring Solutions like Weather Monitoring, Air Quality Monitoring, and Water Quality Monitoring.
        </Typography.p>
        <Typography.p className='text-base text-slate-500 tracking-wide mt-2'>
            Backed by strong technical know-how, refined algorithms, and domain research, Aeron’s products offer premium features at attractive price points.
        </Typography.p>

        <button className="btn btn-secondary btn-outline rounded-lg hover:!text-white mt-4">
          Discover More
        </button>
      </div>
    </section>
  );
};

export default About;
