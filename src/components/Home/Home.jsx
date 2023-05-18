import React, { useEffect, useState } from 'react';
import Banner from '../../Shared/Banner/Banner';
import GalleryCard from '../../Shared/GalleryCard/GalleryCard';
import 'react-tabs/style/react-tabs.css';
import TabLayout from '../TabLayout/TabLayout';

const Home = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div className='py-3'>
            <Banner />
            {/* gallery section */}
            <section>
                <h3 className='font-bold text-center text-2xl md:text-4xl pt-10'>Gallery Section</h3>
                <div className="divider"></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    {/* <GalleryCard/> */}
                    {
                        images.map(image => <GalleryCard key={image._id}
                            image={image.images}></GalleryCard>)
                    }
                </div>
            </section>
            {/* Shop by category */}
            <section>
                <h3 className='font-bold text-center text-2xl md:text-4xl pt-10 pb-4'>Shop By Category</h3>
                <TabLayout/>
            </section>
        </div>
    );
};

export default Home;