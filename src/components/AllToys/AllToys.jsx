
const AllToys = () => {
    const handleSearch = (event) => {
        event.preventDefault()
        const form = event.target
        const searchWord = form.search.value
        console.log(searchWord);
    }
    return (
        <div>
            {/* search section */}
            <section className="flex justify-center py-2">
                <form onSubmit={handleSearch}>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" name="search" placeholder="Search…" className="input input-bordered md:w-96" />
                            <button type="submit" className="btn btn-primary btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AllToys;