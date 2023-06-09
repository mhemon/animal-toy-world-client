import { Rating } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";
import { useEffect } from "react";

const SingleToyDetails = () => {

    const data = useLoaderData()

    const { price, quantity, details, name, images, rating, sellerName, sellerEmail } = data

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200" data-aos="fade-left">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={images} className="md:max-w-sm rounded-lg shadow-2xl" /> */}
                <div className='relative group'>
                    <img className='relative z-10 w-11/12 h-full mx-auto rounded-md' src={images} alt="Shoes" />
                    <div className="absolute -bottom-1 left-5 h-full w-full transform translate-x-2 translate-y-2">
                        <div className="absolute h-full w-11/12 bg-primary  rounded-md"></div>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold">{name}</h1>
                    <p className="pt-6 w-full md:w-2/3 text-justify">{details}</p>
                    <p className="py-6 font-semibold">Seller name : {sellerName}</p>
                    <p className="font-semibold">Seller Email : {sellerEmail}</p>
                    <p className="py-6 font-semibold">Price : ${price} <span className="ms-8"></span> Quantity : {quantity}</p>
                    <div className='flex items-center gap-2 pb-6'>
                        <Rating
                            style={{ maxWidth: 200 }}
                            value={rating}
                            readOnly
                        />
                        <span className='text-lg'>{rating}</span>
                    </div>
                    <div className="tooltip tooltip-right" data-tip="Mark as Favourite">
                        <button onClick={() => Swal.fire('Added to your Favourite list!')} className="btn btn-square btn-primary w-44"> <AiFillHeart size="2em" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;