import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useState } from 'react';
import Swal from "sweetalert2";

const MyToyRow = ({ toy, handleDelete, updateToys }) => {
    const { _id, name, subCategory, price, quantity, details } = toy
    const detailsCopy = details
    const ellipsis = "...";
    const output = detailsCopy.split('').slice(0, 30).join('') + ellipsis

    return (
        <tr>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                {subCategory}
            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                {output}
            </td>
            <th className='flex'>
                <div className="tooltip tooltip-top" data-tip="Update">
                    <button onClick={() => updateToys(_id)} className="btn btn-square btn-primary btn-outline"> <FaEdit size="1.2rem" /></button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="tooltip tooltip-top" data-tip="Delete">
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-error btn-outline"> <AiOutlineDelete size="1.2rem" /></button>
                </div>
            </th>
        </tr>
    );
};

export default MyToyRow;