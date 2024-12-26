
import Shimmers from "./Shimmers";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";
//10575     405798
const ResturentMenu = () => {

    const { resid } = useParams();

    const resInfo = useResturentMenu(resid);

    if (resInfo === null) return <Shimmers />;

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return (
        <div className="menu">
            <h1>Name</h1>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}-
                {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (

                    <li key={item?.card?.info?.id}
                    >{item?.card?.info?.name}{"  ==> Rs :- "}{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</li>
                ))}
            </ul>
        </div>
    )

}
export default ResturentMenu; 