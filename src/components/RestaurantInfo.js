import Shimmer from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantInfo = () => {
    const [showIndex, setShowIndex] = useState(null);
    const resInfo = useRestaurantMenu();
    const { 
        name,
        cuisines,
        costForTwoMessage
    } = resInfo?.cards[2]?.card?.card?.info ?? {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?? {};
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
            c?.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'); 

    return !resInfo ? <Shimmer/> : (
        <div className="restaurant-info-container text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(', ')} - {costForTwoMessage}
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