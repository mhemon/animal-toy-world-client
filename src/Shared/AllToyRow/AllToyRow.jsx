import React from 'react';

const AllToyRow = ({ toy }) => {
    const { sellerName, name, subCategory, price, quantity } = toy
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
                <button className="btn btn-ghost btn-xs">View Details</button>
            </th>
        </tr>
    );
};

export default AllToyRow;