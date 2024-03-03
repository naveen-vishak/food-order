const RestaurantCard = ({ data }) => {
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
    } = data?.info;
    const { deliveryTime } = data?.info.sla;

    return <div className="restaurant-card pt-2 mx-2 px-2 pb-4 mb-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
            className="restaurant-logo rounded-lg"
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h5>{avgRating} stars</h5>
        <h5>{deliveryTime} minutes</h5>
    </div>
}

const PromotedRestaurantCard = (props) => {
    const {data} = props;
    const {promoted} = props?.data?.info;
    return (
        <div>
            {promoted ? 
            <div>
                <label className="absolute bg-black text-white rounded-lg px-2 py-1 m-1">Prompted</label>
                <RestaurantCard data={data}></RestaurantCard>
            </div>
            : <RestaurantCard data={data}></RestaurantCard> }
        </div>
    )
}

export default PromotedRestaurantCard;