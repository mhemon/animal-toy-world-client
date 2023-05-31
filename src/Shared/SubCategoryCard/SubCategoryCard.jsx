import React from 'react';
import { Rating } from '@smastrom/react-rating'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";


const SubCategoryCard = ({ toy }) => {
    const { _id, images, name, price, rating } = toy
    return (
        <div className="card card-compact md:w-96 bg-base-100 shadow-xl mt-2">
            <div className='relative group'>
                <img className='relative z-10 w-11/12 h-56 mx-auto rounded-md' src={images} alt="Shoes" />
                <div className="absolute -bottom-1 left-5 h-full w-full transform translate-x-2 translate-y-2">
                    <div className="absolute h-full w-11/12 bg-primary  rounded-md"></div>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-start font-semibold'>Price : ${price}</p>
                <div className='flex items-center gap-2'><Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                /> <span className='text-lg'>{rating}</span></div>
                <div className="card-actions justify-end">
                    <Link to={`/toy/${_id}`}>
                        <button className="btn btn-outline btn-primary normal-case">View Details <AiOutlineArrowRight style={{ marginLeft: '10px' }} /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;