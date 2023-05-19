import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <p>Single toy details page</p>
        </div>
    );
};

export default SingleToyDetails;