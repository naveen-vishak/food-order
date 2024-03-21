import { useState, useEffect } from "react";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import Carousal from "./Carousal";
import TopBrandsForYou from "./TopBrandsForYou";
import RestaurantGridListing from "./RestaurantGridListing";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Replace with your chosen CORS proxy service
        const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/'; // Replace with your target URL

        const data = await fetch(targetUrl);
        const json = await data.json();
        // const json = restaurantsData;
        return json;
    }

    useEffect(() => {
        fetchData().then(data => {
            setListOfRestaurants(data);
        })
    }, []);

    const whatsOnYourMind = !listOfRestaurants ? []
    : listOfRestaurants?.data?.cards?.filter(c => 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" && c?.card?.card?.id === "whats_on_your_mind")[0]?.
        card?.card?.gridElements?.infoWithStyle?.info;

    const restaurantGridListing = !listOfRestaurants ? []
    : listOfRestaurants?.data?.cards?.filter(c => 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" && c?.card?.card?.id === "restaurant_grid_listing")[0]?.
        card?.card?.gridElements?.infoWithStyle?.restaurants;

    const topBrandsForYou = !listOfRestaurants ? []
    : listOfRestaurants?.data?.cards?.filter(c => 
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" && c?.card?.card?.id === "top_brands_for_you")[0]?.
        card?.card?.gridElements?.infoWithStyle?.restaurants;

    if(!onlineStatus) return <h2>Looks like you're offline!</h2>

    return <div className="Body">
        {whatsOnYourMind && <Carousal whatsOnYourMind={whatsOnYourMind}/>}
        {topBrandsForYou && <TopBrandsForYou topBrandsForYou={topBrandsForYou}/>}
        {restaurantGridListing && <RestaurantGridListing restaurantGridListing={restaurantGridListing}/>}
    </div>
}

export default Body;