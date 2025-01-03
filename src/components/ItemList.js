import { CARD_URL } from "../utils/Constants";
const ItemList = ({ items }) => {

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>   Rs {item.card.info.price / 100}</span>
                        </div>
                        <div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>

                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                                Add +
                            </button>
                        </div>
                        <img src={CARD_URL + item.card.info.imageId} className="w-full" />
                    </div>

                </div>
            ))}
        </div>
    )
}


export default ItemList;