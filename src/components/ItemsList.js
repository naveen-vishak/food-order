const ItemsList = ({ items }) => {
    return (
        <div>
            {items.map(item => {
                return <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>
                                {item.card.info.name}
                            </span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price
                                    : item.card.info.defaultPrice}
                            </span>
                        </div>
                        <p className="text-xs">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div className="relative ">
                        <div className="absolute right-0 bottom-0">
                            <button className="bg-black text-white rounded-lg px-2 py-1">Add+</button>
                        </div>
                        <img className="w-[130] h-[130]" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + item.card.info.imageId}/>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ItemsList;