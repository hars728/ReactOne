
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
            <div className=" flex ">
                <div className="search m-4 p-4">
                    <input className="border border-solid border-black" type="text" value={searchText} onChange={(e) => setsearchText(e.target.value)} />
                    <button className="bg-green-200 border border-solid rounded-md px-4 py-2 m-4"
                        onClick={() => {
                            console.log(searchText);
                            const filteredList = listofRestu.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()));

                            setsearchResult(filteredList);
                        }}
                    >
                        Search
                    </button>
                </div>

                <div className=" flex items-center">

                    <button
                        className="bg-pink-400 border border-solid hover:bg-pink-500 rounded-md py-2 px-4 "
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

            </div>
            <div className="flex flex-wrap">
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