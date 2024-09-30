import React from 'react';
import Typography from './Typography';
import { FaAngleDown, FaAngleRight, FaCheck } from 'react-icons/fa';

type Props = {
  name: string;
  bgImg: string;
  topImg: string;
  descPoints: string[];
  handleChange(key: string): void;
  isExpanded?: boolean;
};

const ApplicationCard: React.FC<Props> = ({
  name,
  bgImg,
  descPoints,
  topImg,
  handleChange,
  isExpanded = false
}) => {
  const checkForChange = () => {
    if(isExpanded || window.innerWidth < 1024) return;

    handleChange(name);
  }

  return (
    <article onMouseEnter={checkForChange} className={`lg:min-h-96 flex-grow ${isExpanded ? 'flex-grow-[5]' : ''} py-10 px-4 lg:pt-4 relative z-[1] overflow-hidden before:absolute before:inset-0 before:bg-black before:bg-opacity-30 before:z-1`}>
      <img
        src={bgImg}
        alt={name}
        className="absolute w-full h-full object-cover top-0 left-0 -z-[1]"
      />

      <div className="relative z-[1] lg:flex-col">
        <header className={`flex gap-4 items-center lg:flex-col ${isExpanded ? '' : 'lg:gap-20'}`}>
          <img src={topImg} alt={name} className="w-12" />
          <Typography.h3 className={`text-white font-normal ${isExpanded ? '' : 'lg:rotate-90'}`}>
            {name}
          </Typography.h3>
          <button onClick={() => handleChange(isExpanded ? '' : name)} className={`ml-auto cursor-pointer transition-all duration-300 ${isExpanded ? 'rotate-180' : ''} lg:hidden`}>
            <FaAngleDown className="text-white text-xl" />
          </button>
        </header>
        <div className={`content transition-all lg:duration-500 [&>*]:overflow-hidden duration-300 grid ${isExpanded ? 'grid-rows-[1fr] mt-8 lg:grid-rows-none lg:max-w-[1000px] lg:max-h-[1000px] lg:mt-8' : 'grid-rows-[0fr] lg:grid-rows-none lg:max-w-0 lg:max-h-0'}`}>
          <div>
            <ul className="flex flex-col gap-y-4">
              {descPoints.map((point, index) => (
                <li className="flex items-center gap-4" key={index}>
                  <FaCheck className="w-5 h-5 p-1 rounded-full bg-red-600 text-white" />
                  <Typography.p className="text-white text-sm tracking-wider font-normal">
                    {point}
                  </Typography.p>
                </li>
              ))}
            </ul>
            <button className="w-max btn btn-outline border-white text-white btn-sm rounded-xl mt-6 hover:bg-white hover:text-black">
              Read More <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ApplicationCard;
