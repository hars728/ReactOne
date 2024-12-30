
import Shimmers from "./Shimmers";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";
import RestaurantCategory from "./RestaurantCategory";
//10575     405798
const ResturentMenu = () => {

    const { resid } = useParams();

    const resInfo = useResturentMenu(resid);

    if (resInfo === null) return <Shimmers />;

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;



    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories);



    return (
        <div className="text-center">

            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-xl my-4">{cuisines.join(", ")}-
                {costForTwoMessage}</p>


            {categories.map((categori) => (<RestaurantCategory key={categori.card.card.title} data={categori.card.card} />))}

        </div>
    )

}
export default ResturentMenu; 