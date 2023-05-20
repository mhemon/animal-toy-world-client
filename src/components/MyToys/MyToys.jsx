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

    const updateToys = (id) => {
        fetch(`http://localhost:5000/toy/${id}`)
        .then(res => res.json())
        .then(data=> {
            const {price, quantity, details} = data
            console.log(data);
            Swal.fire({
                title: 'Update Toy Details',
                html:
                  `<div>
                  <label for="swal-price">Price:</label><br/>
                  <input id="swal-price" class="swal2-input" placeholder="Price" type="number" step="0.01" value=${price}>
                  </div>` +
                  `<div class="mt-2">
                  <label for="swal-quantity">Quantity:</label><br/>
                  <input id="swal-quantity" class="swal2-input" placeholder="Available Quantity" value=${quantity}>
                  </div>` +
                  `<div class="mt-2">
                  <label for="swal-description">Details Description:</label><br/>
                  <textarea id="swal-description" class="swal2-textarea" placeholder="Detail Description">${details}</textarea>
                  </div>
                  `,
                showCancelButton: true,
                confirmButtonText: 'Update',
                preConfirm: () => {
                  const price = parseFloat(document.getElementById('swal-price').value);
                  const quantity = parseInt(document.getElementById('swal-quantity').value);
                  const description = document.getElementById('swal-description').value;
              
                  // You can perform validation on the input values here if needed
                  if (!price || !quantity || !description) {
                    Swal.showValidationMessage('Please fill in all the fields');
                    return false;
                  }

                  return {
                    price: price,
                    quantity: quantity,
                    description: description
                  };
                },
              }).then((result) => {
                if (result.isConfirmed) {
                  const { price, quantity, description } = result.value;
                    const updatedToyInfo = {price: price, quantity: quantity, details: description}
                //   update operation into db
                fetch(`http://localhost:5000/mytoys/${id}`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedToyInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.modifiedCount > 0){
                        // update ui data using fetch
                        fetch(URL)
                        .then(res => res.json())
                        .then(data => setMyToys(data))
                        Swal.fire({
                            icon: 'success',
                            title: 'Toy Updated Success',
                            html:
                              `<p>Price: ${price}</p>` +
                              `<p>Available Quantity: ${quantity}</p>` +
                              `<p>Detail Description: ${description}</p>`,
                            confirmButtonText: 'OK'
                          });
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to modify toy details.'
                          });
                    }
                })

                }
              });  
        })        
    }

    return (
        <div>
            <div className="overflow-x-auto w-full">
            <h3 className="text-2xl text-center py-2 font-semibold">My Toys : {mytoys.length}</h3>
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
                                updateToys={updateToys}
                            ></MyToyRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;