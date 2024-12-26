
import ResturentCard from "./ResturentCard";
import restaurants from "../utils/StaticData";
import { useEffect, useState } from "react";
import Shimmers from "./Shimmers";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listofRestu, setlistofRestu] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [searchResult, setsearchResult] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.9924669&lng=85.3636758&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


        const jsonData = await data.json();
        console.log(jsonData);
        setlistofRestu(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setsearchResult(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
        return (
            <h1>no working</h1>
        );

    if (listofRestu.length === 0) {
        return <Shimmers />
    }
    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box" type="text" value={searchText} onChange={(e) => setsearchText(e.target.value)} />
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredList = listofRestu.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setsearchResult(filteredList);
                    }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterData = listofRestu.filter(
                            (res) => res.info.avgRating > 4.4
                        );
                        console.log("btn click");
                        setlistofRestu(filterData);
                        console.log(filterData);

                    }}
                >
                    Top rated resturant
                </button>

            </div>
            <div className="card-container">
                {searchResult.map((restaura) => (
                    <Link
                        className="colorofthis"
                        key={restaura.info.id}
                        to={"/resturent/" + restaura.info.id}
                    >
                        <ResturentCard resdata={restaura} />
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default Body; 