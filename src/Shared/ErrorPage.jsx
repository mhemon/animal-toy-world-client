import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { BiConfused, BiArrowBack } from "react-icons/bi";

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='h-full'>
            <div className='flex justify-center align-center'>
                <BiConfused size="15em" color='#FF6666' />
            </div>
            <div className='text-center'>
                <h2 className='mb-8 font-bold'>
                    <span className='text-lg'>Error</span> {status || 404}
                </h2>
                <p className='fw-semibold mb-8'>
                    {error?.message}
                </p>
                <Link to='/'>
                    <button className="btn btn-error text-white"> <BiArrowBack style={{marginRight: '10px'}}/> Back to homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;