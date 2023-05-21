import React from 'react';

const GalleryCard = ({ image }) => {
    return (
        <div className="shadow-xl border-2" data-aos="fade-left">
            <img className='w-full h-full' src={image} alt="Shoes" />
        </div>
    );
};

export default GalleryCard;