import { CARD_URL } from "../utils/Constants";

const ResturentCard = (props) => {
    const { resdata } = props;
    return (
        <div className="res-card">
            <div className="card-ima">
                <img className="card-img" src={CARD_URL +
                    resdata.info.cloudinaryImageId}
                />
            </div>
            <h3>{resdata.info.name}</h3>
            <h4>{resdata.info.cuisines.join(" , ")}</h4>
            <h4>{resdata.info.locality}</h4>
            <h4>Within {resdata.info.sla.slaString}</h4>
            <h4>{resdata.info.costForTwo}</h4>
            <h4>{resdata.info.avgRatingString} Star rating</h4>


        </div>
    );
};


export default ResturentCard;