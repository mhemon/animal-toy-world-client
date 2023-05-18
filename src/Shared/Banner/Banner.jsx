const Banner = () => {
    return (
        <div className="carousel overflow-x-auto">
            <div className="carousel-inner flex space-x-4 md:space-x-8 lg:space-x-12">
                <div className="carousel-item w-full md:w-1/2 lg:w-1/3">
                    {/* Slide 1 content */}
                    <img src="https://i.ibb.co/Jqyf7pH/tim-gouw-Jsj-Xn-Wlh8-g-unsplash.jpg" alt="" />
                </div>
                <div className="carousel-item w-full md:w-1/2 lg:w-1/3">
                    {/* Slide 2 content */}
                    <img src="https://i.ibb.co/jZyc9qc/hobi-industri-x-Bx-Ew-E-TBfo-unsplash.jpg" alt="" />
                </div>
                <div className="carousel-item w-full md:w-1/2 lg:w-1/3">
                    {/* Slide 3 content */}
                    <img src="https://i.ibb.co/JxQKMZh/vale-zmeykov-3lz-ULokw-LZo-unsplash.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;