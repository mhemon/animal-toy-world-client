import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyRow from "../MyToyRow/MyToyRow";
import Swal from "sweetalert2";

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const URL = `http://localhost:5000/mytoys?email=${user?.email}`;
    const [mytoys, setMyToys] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [URL])

    const handleDelete = (id) => {
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
             fetch(`http://localhost:5000/mytoys/${id}`,{
                method: 'DELETE'
             })
             .then(res => res.json())
             .then(data => {
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                    const remaining = mytoys.filter(toy => toy._id !== id);
                    setMyToys(remaining);
                }
             })   
            }
          })
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
            <h3 className="text-2xl text-center py-2 font-semibold">My Toys</h3>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Toy Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* dynamic rows */}
                        {
                            mytoys.map(toy => <MyToyRow key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                            ></MyToyRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;