import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantInfo = () => {
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu();
    
    const v2Restaurant = resInfo?.cards?.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant");
    const v2ItemCategory = resInfo?.cards?.filter((c) => 
        c?.groupedCard
    );
    
    const {name, cuisines, costForTwoMessage} = v2Restaurant && v2Restaurant.length > 0
    ? v2Restaurant[0]?.card?.card?.info
    : {};

    const categories = v2Restaurant && v2Restaurant.length > 0
    ? v2ItemCategory[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    : [];

    return !resInfo ? <Shimmer/> : (
        <div className="restaurant-info-container text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines?.join(', ')} - {costForTwoMessage}
            </p>
            {categories.map((category, index) => {
                return <RestaurantCategory 
                    key={category.card.card.title}
                    data={category.card.card}
                    showItems={showIndex === index}
                    setShowIndex={()=>setShowIndex(index)}
                    setShowIndexNull={()=>setShowIndex(null)}
                />
            })}
        </div>
    )
}

export default RestaurantInfo;