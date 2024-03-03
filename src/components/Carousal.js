const Carousal = ({ whatsOnYourMind }) => {
    return (<div className="flex justify-center">
        <div className="w-[1200px]">
            <h1 className="font-bold p-2 m-2">What's on your mind?</h1>
            <div className="flex flex-wrap">
                {!whatsOnYourMind.length
                ? <></>
                : whatsOnYourMind.map(data => {
                    const {imageId, id} = data;
                    return <div key={id} className="w-[150px] cursor-pointer">
                        <img className="" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+imageId}/>
                    </div>
                })}
            </div>
        </div>
    </div>)
}

export default Carousal;