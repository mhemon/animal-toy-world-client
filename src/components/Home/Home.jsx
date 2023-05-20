import React, { useEffect, useState } from 'react';
import Banner from '../../Shared/Banner/Banner';
import GalleryCard from '../../Shared/GalleryCard/GalleryCard';
import 'react-tabs/style/react-tabs.css';
import TabLayout from '../TabLayout/TabLayout';
import { Rating } from '@smastrom/react-rating'
import { toast } from 'react-toastify';
import { FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from "react-icons/fa";

const Home = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])
    return (
        <div className='py-3 px-2 md:px-4'>
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
                <TabLayout />
            </section>
            {/* popular in store */}
            <section>
                <h3 className='font-bold text-center text-2xl md:text-4xl pt-10'>Popular in Store</h3>
                <p className='text-center pt-2 text-primary'>CUSTOMERS LOVE</p>
                <div className="divider"></div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-2'>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className='md:w-1/2'>
                            <figure><img className='w-full h-full' src="https://m.media-amazon.com/images/I/615csEIOkdL._AC_UL600_FMwebp_QL65_.jpg" alt="Album" /></figure>
                        </div>
                        <div className="card-body md:w-1/2">
                            <h2 className="card-title">Flappy The Elephant Stuffed</h2>
                            <p>Flappy is an adorable singing elephant that comes to life with the push of a button, featuring two play modes to entertain baby. He now features enhanced audio and volume controls for a more customized play session!</p>
                            <p className='font-semibold'>Price : $33</p>
                            <div><Rating
                                style={{ maxWidth: 180 }}
                                value={6.7}
                                readOnly
                            /></div>
                            <div className="card-actions justify-end">
                                <button onClick={() => toast.success('Added to buy list!')} className="btn btn-primary md:btn-wide normal-case">Buy</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className='md:w-1/2'>
                            <figure><img className='w-full h-full' src="https://m.media-amazon.com/images/I/71HnZzfvoxL._AC_UL600_FMwebp_QL65_.jpg" alt="Album" /></figure>
                        </div>
                        <div className="card-body md:w-1/2">
                            <h2 className="card-title">Wild Calls Elephant stuffed</h2>
                            <p>The Elephant in the room is your desire to obtain this Wild Calls Elephant stuffed animal. The actual size of this animal plush is 8 inches, allowing you to bring the plush toy with you as you walk your dog
                            </p>
                            <p className='font-semibold'>Price : $23</p>
                            <div><Rating
                                style={{ maxWidth: 180 }}
                                value={6.7}
                                readOnly
                            /></div>
                            <div className="card-actions justify-end">
                                <button onClick={() => toast.success('Added to buy list!')} className="btn btn-primary md:btn-wide normal-case">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* new section */}
            <section className='mt-10'>
                <div className="flex flex-col md:flex-row">
                    <div className="basis-full md:basis-4/12 px-2 ">
                        <div className='text-center border space-y-2 py-4 '>
                            <h3 className='font-bold text-center text-2xl md:text-4xl'>Free Shipping</h3>
                            <p>On orders over $60.00</p>
                        </div>
                    </div>
                    <div className="basis-full md:basis-4/12 px-2">
                        <div className="basis-full md:basis-4/12 px-2">
                            <div className='text-center border space-y-2 py-4'>
                                <h3 className='font-bold text-center text-2xl md:text-4xl'>Free Returns</h3>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-full md:basis-4/12 px-2">
                        <div className="basis-full md:basis-4/12 px-2">
                            <div className='text-center border space-y-2 py-4'>
                                <h3 className='font-bold text-center text-2xl md:text-3xl'>Secure Payments</h3>
                                <div className='flex justify-center'>
                                    <FaCcMastercard size="2em" style={{ marginRight: '4px' }} />
                                    <FaCcPaypal size="2em" style={{ marginRight: '4px' }} />
                                    <FaCcStripe size="2em" style={{ marginRight: '4px' }} />
                                    <FaCcVisa size="2em" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest News section */}
            <section>
                <h3 className='font-bold text-center text-2xl md:text-4xl pt-10'>Latest News</h3>
                <p className='text-center pt-2 text-primary'>OUR NEWS & EVENTS</p>
                <div className="divider"></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {/* news 1 */}
                    <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
                        <figure className='h-64'><img src="https://m.media-amazon.com/images/I/8139L3k+9aL._AC_UL600_FMwebp_QL65_.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Animal Toy World Launches New Line of Educational Toys</h2>
                            <p>Animal Toy World, a leading retailer of animal-themed toys, has announced the launch of a new line of educational toys. The new line includes a variety of toys that are designed to help children learn about different animals and their habitats.</p>
                        </div>
                    </div>
                    {/* news 2 */}
                    <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
                        <figure className='h-64'><img src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Animal Toy World Partners with Wildlife Conservation Organization</h2>
                            <p>Animal Toy World has partnered with a wildlife conservation organization to help raise awareness about endangered animals. The partnership will include a donation from Animal Toy World to the organization, as well as a promotion of the organization's work on the Animal Toy World website.</p>
                        </div>
                    </div>
                    {/* news 3 */}
                    <div className="card card-compact md:w-96 bg-base-100 shadow-xl">
                        <figure className='h-64'><img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Animal Toy World Announces Summer Sale</h2>
                            <p>Animal Toy World is excited to announce its summer sale! The sale will feature discounts on a variety of animal-themed toys, including plush animals, teddy bears, and dinosaur toys.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;