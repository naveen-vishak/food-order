import ItemsList from "./ItemsList";

const RestaurantCategory = ({data, showItems, setShowIndex, setShowIndexNull}) => {
    const handle = () => {
        showItems ? setShowIndexNull() : setShowIndex();
    }
    return (
        <div className="w-6/12 h-auto mx-auto my-4 p-4 bg-gray-100 shadow-md">
            <div className="flex justify-between cursor-pointer" onClick={handle}>
                <span className="font-bold">
                    {data.title}({data?.itemCards?.length})
                </span>
                <span>
                    ↓
                </span>
            </div>
            {showItems && <ItemsList items={data?.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;