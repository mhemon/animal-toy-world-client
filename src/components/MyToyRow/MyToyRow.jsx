import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import React, { useState } from 'react';
import Swal from "sweetalert2";

const MyToyRow = ({ toy }) => {
    const { _id, name, subCategory, price, quantity, details } = toy
    const detailsCopy = details
    const ellipsis = "...";
    const output = detailsCopy.split('').slice(0, 30).join('') + ellipsis

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

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
                    <button className="btn btn-square btn-primary btn-outline"> <FaEdit size="1.2rem" /></button>
                </div>
                <div className="divider divider-horizontal"></div>
                <div className="tooltip tooltip-top" data-tip="Delete">
                    <button onClick={handleDelete} className="btn btn-square btn-error btn-outline"> <AiOutlineDelete size="1.2rem" /></button>
                </div>
            </th>
        </tr>
    );
};

export default MyToyRow;