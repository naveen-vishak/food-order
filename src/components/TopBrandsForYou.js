import { Link } from "react-router-dom";
import PromotedRestaurantCard from "./RestaurantCard";

const TopBrandsForYou = ({ topBrandsForYou }) => {
    return <div className="flex justify-center p-4 m-2">
        <div className="w-[1200px]">
            <h1 className="font-bold p-2 m-2">Top Restaurants</h1>
            <div className="flex justify-center">
                <div className="flex flex-wrap justify-center">
                    {topBrandsForYou.map(data => {
                        const { id } = data?.info;        
                        return <Link to={`/restaurants/${id}`} key={id}>
                            <PromotedRestaurantCard key={id} data={data}/>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default TopBrandsForYou;