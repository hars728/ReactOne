
import ResturentCard from "./ResturentCard";
import restaurants from "../utils/StaticData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="card-container">
                {restaurants.map((restaura) => (
                    <ResturentCard key={restaura.info.id} resdata={restaura} />
                ))}
            </div>
        </div>
    );
};

export default Body;