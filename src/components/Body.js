import { useState, useEffect } from "react";
import  PromotedRestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import restaurantsData from "../mockData/restaurantsData.json";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING/");
        // const json = await data.json();
        const json = restaurantsData;
        const restaurantGridListing = json?.data?.cards?.filter(c => 
            c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget" && c?.card?.card?.id === "restaurant_grid_listing")[0]?.
            card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurantGridListing);
        return restaurantGridListing;
    }

    useEffect(() => {
        fetchData().then(data => {
            setListOfRestaurants(data);
            setFilteredRestaurants(data);
        })
    }, []);

    if(!onlineStatus) return <h2>Looks like you're offline!</h2>
    return !listOfRestaurants ? <div className="app-body"><Shimmer/></div> : (<div className="app-body">
                <div className="filter flex justify-center">
                    <div className="search p-4">
                        <input
                            type="text"
                            className="border border-solid border-l-amber-950"
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                const filteredRestaurants = listOfRestaurants.filter(data => {
                                    return data.info.name.toLowerCase().includes(e.target.value.toLocaleLowerCase());
                                });
                                setFilteredRestaurants(filteredRestaurants);
                            }}
                        />
                        <button
                            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                            onClick={() => {
                                const filteredRestaurants = listOfRestaurants.filter(data => {
                                    return data.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
                                });
                                setFilteredRestaurants(filteredRestaurants);
                            }}>
                            Search
                        </button>
                    </div>
                    <div className="top-rated m-4 p-4 flex items-center">
                        <button
                            className="px-4 py-1 bg-gray-100 rounded-lg"
                            onClick={(e) => {
                                setFilteredRestaurants(filteredRestaurants.filter(data => data.info.avgRating > 4.3))
                            }}>
                            Top Rated Restaurants
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="restaurant-container flex flex-wrap w-[1120px] px-5">
                        {
                            filteredRestaurants.length === 0
                            ? <div className="text-center">
                                <p className="px-4 font-bold text-lg">No restaurant available</p>
                            </div>
                            :<>
                                <h1 className="font-bold p-2">Restaurants with online food delivery in Coimbatore</h1>
                                <div className="flex flex-wrap">
                                    {filteredRestaurants.map(data => {
                                        return (
                                            <Link to={`/restaurants/${data?.info?.id}`} key = {data?.info?.id}> 
                                                <PromotedRestaurantCard key = {data?.info?.id} data = {data} />
                                            </Link>)
                                    })}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>)
}

export default Body;