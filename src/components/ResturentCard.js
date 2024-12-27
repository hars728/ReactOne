import { CARD_URL } from "../utils/Constants";

const ResturentCard = (props) => {
    const { resdata } = props;
    return (
        <div className="p-4 m-4 w-[240px] bg-gray-200 hover:bg-gray-300 h-[417px] border rounded-md">
            <div className="">
                <img className="w-[240px] h-[160px] rounded-md" src={CARD_URL +
                    resdata.info.cloudinaryImageId}
                />
            </div>
            <h3 className="font-bold py-3">{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(" , ")}</h4>
            <h4>{resdata.info.locality}</h4>
            <h4>{resdata.info.areaName}</h4>
            <h4>Within {resdata.info.sla.slaString}</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.avgRatingString} Star rating</h4>


        </div>
    );
};


export default ResturentCard;