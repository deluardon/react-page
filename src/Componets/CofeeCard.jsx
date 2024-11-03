import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CofeeCard = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [coffeeData, setCoffeeData] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredData = data.filter(card => card.category === category);
            setCoffeeData(filteredData);
        }
        else{
            setCoffeeData(data);
        }
    }, [data, category]); // Added data and category as dependencies

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coffeeData.map(coffee => (
                <Card key={coffee._id} coffee={coffee} />
            ))}
        </div>
    );
};

export default CofeeCard;
