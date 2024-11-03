const Card = ({ coffee }) => {
    console.log(coffee); // Changed 'card' to 'coffee'
    const { name, image, category, ingredient } = coffee;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img className="w-full h-[200px] m-4" src={image} alt={name} /> {/* Updated alt for better accessibility */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes, whose shoes does he choose?</p> {/* You might want to update this text to be relevant to coffee */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
