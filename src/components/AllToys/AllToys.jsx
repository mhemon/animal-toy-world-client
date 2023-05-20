import { useEffect, useState } from "react";
import AllToyRow from "../../Shared/AllToyRow/AllToyRow";

const AllToys = () => {

    const [toys, setToys] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    console.log(toys);
    useEffect(() => {
        fetch(`http://localhost:5000/alltoys?limit=20`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setSearchResults(data)
            })
    }, [])

    const handleSearch = (event) => {
        event.preventDefault()
        const form = event.target
        const searchWord = form.search.value
        const filteredResults = toys.filter((toy) => {
            // Modify the condition based on your search requirements
            return toy.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        setSearchResults(filteredResults);
    }

    return (
        <div>
            {/* search section */}
            <section className="flex justify-center py-2">
                <form onSubmit={handleSearch}>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Search…" className="input input-bordered md:w-96"/>
                            <button type="submit" className="btn btn-primary btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            {/* card section */}
            <section>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* dynamic rows */}
                            {
                                searchResults.length > 0 ? (
                                    searchResults.map((toy) => (
                                        <AllToyRow key={toy._id} toy={toy} />
                                    ))
                                ) : (
                                    toys.map((toy) => (
                                        <AllToyRow key={toy._id} toy={toy} />
                                    ))
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllToys;