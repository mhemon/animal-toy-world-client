import React from 'react';
import { Link } from 'react-router-dom';

const AllToyRow = ({ toy }) => {
    const { _id, sellerName, name, subCategory, price, quantity } = toy
    return (
        <tr>
            <td>
                <div>
                    <div className="font-bold">{sellerName}</div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td className='text-center'>{quantity}</td>
            <th>
                <Link to={`/toy/${_id}`}><button className="btn btn-ghost btn-xs">View Details</button></Link>
            </th>
        </tr>
    );
};

export default AllToyRow;