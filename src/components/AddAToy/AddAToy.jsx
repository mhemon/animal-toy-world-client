import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddAToy = () => {
    const { user } = useContext(AuthContext)

    const [selectedValue, setSelectedValue] = useState('');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleAddToys = (event) => {
        event.preventDefault()
        const form = event.target

    }
    return (
        <div>
            <h3 className="text-2xl text-center py-2 font-semibold">Add a new Toys</h3>
            <form onSubmit={handleAddToys}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" placeholder="Please enter toy name" name="toyName" className="input input-bordered input-primary" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" placeholder="Please enter toy picture url" name="toyPictureURL" className="input input-bordered input-primary" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="sellerName" defaultValue={user?.displayName} placeholder="Please enter your name" className="input input-bordered input-primary" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} className="input input-bordered input-primary" disabled required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select className="select w-full input-primary" value={selectedValue} onChange={handleChange}>
                            <option>Teddy bear</option>
                            <option>Dinosaur</option>
                            <option>Horse</option>
                            <option>Dogs</option>
                            <option>Cat</option>
                            <option>Unicorn</option>
                            <option>Cows</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="please enter toy price" className="input input-bordered input-primary" name="price" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" placeholder="please enter toy rating 1 to 10" className="input input-bordered input-primary" min="1" max="10" step="0.01" name="rating" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" placeholder="please enter toy quantity" className="input input-bordered input-primary" name="quantity" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Details Description</span>
                        </label>
                        <textarea name="details" className="textarea input-primary" placeholder="Write Toy Details....." required/>
                    </div>
                </div>
                <div className="form-control my-6">
                    <input className="btn btn-primary btn-outline btn-block" type="submit" value="Add Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;