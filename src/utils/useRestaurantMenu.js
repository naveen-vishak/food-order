import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import nagerkovilAryaBhvn from "../mockData/nagerkovilAryaBhvn.json";

export const useRestaurantMenu = () => {
    const {resId} = useParams();
    const [restaurantInfo, SetRestaurantInfo] = useState(null);
    const fetchData = async() => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.0168445&lng=76.9558321&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        // const json = nagerkovilAryaBhvn;
        return json?.data;
    }
    useEffect(() => {
        fetchData().then(data => {
            SetRestaurantInfo(data);
        });
    }, []);
    return restaurantInfo;
}