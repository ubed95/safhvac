import React from 'react';
import Typography from './Typography';
import { FaAngleRight } from "react-icons/fa";

type Props = {
  name: string;
  desc: string;
  imgUrl: string;
};

const FeaturedCard: React.FC<Props> = ({ name, desc, imgUrl }) => {
  return (
    <article className="card card-bordered bg-base-100 w-full h-full">
      <figure className='max-w-full'>
        <img
          src={imgUrl}
          alt={name}
          className='border-b'
        />
      </figure>
      <div className="card-body">
        <Typography.h3>{name}</Typography.h3>
        <Typography.p className='text-lg text-slate-600 font-normal mt-6'>{desc}</Typography.p>
        <div className="card-actions justify-start mt-16">
          <button className="btn btn-secondary btn-md btn-outline rounded-xl hover:!text-white">KNOW MORE <FaAngleRight /></button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;
