import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToyRow from "../MyToyRow/MyToyRow";
import Swal from "sweetalert2";
import { AiFillFilter, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const MyToys = () => {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  const [sortOrder, setSortOrder] = useState('ascending');
  const URL = `https://animal-toy-world-server.vercel.app/mytoys?email=${user?.email}&sort=${sortOrder}`;
  const [mytoys, setMyToys] = useState([])

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          logout()
            .then(() => {
              localStorage.removeItem('token')
              navigate('/')
            })

        } else {
          setMyToys(data)
        }

      })
  }, [URL, logout, navigate])

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
        fetch(`https://animal-toy-world-server.vercel.app/mytoys/${id}`, {
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
    fetch(`https://animal-toy-world-server.vercel.app/toy/${id}`)
      .then(res => res.json())
      .then(data => {
        const { price, quantity, details } = data
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
            const updatedToyInfo = { price: price, quantity: quantity, details: description }
            //   update operation into db
            fetch(`https://animal-toy-world-server.vercel.app/mytoys/${id}`, {
              method: 'PATCH',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(updatedToyInfo)
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
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
                } else {
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

  const handleAsc = () => {
    if (sortOrder === 'ascending') {
      Swal.fire('Data already in Asc Order')
      return
    }
    setSortOrder('ascending')
  };

  const handleDes = () => {
    if (sortOrder === 'descending') {
      Swal.fire('Data already in Des Order')
      return
    }
    setSortOrder('descending')
  }

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h3 className="text-2xl text-center py-2 font-semibold mx-auto">My Toys: {mytoys.length}</h3>
          </div>
          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-square btn-outline btn-error m-1">
                <AiFillFilter />
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <button onClick={handleAsc}>Asc <AiOutlineArrowUp /></button>
                </li>
                <li>
                  <button onClick={handleDes}>Des <AiOutlineArrowDown /> </button>
                </li>
              </ul>
            </div>
          </div>
        </div>


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