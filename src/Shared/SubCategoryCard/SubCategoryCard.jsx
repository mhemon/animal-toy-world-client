import React from 'react';
import { Rating } from '@smastrom/react-rating'

const SubCategoryCard = ({ toy }) => {
    const { images, name, price, rating } = toy
    return (
        <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
            <figure className="h-64"><img src={images} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-start font-semibold'>Price : ${price}</p>
                <div className='flex items-center gap-2'><Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                /> <span className='text-lg'>{rating}</span></div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryCard;