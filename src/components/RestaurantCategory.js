import React, { useState } from "react"
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItem,setShowIndex})=>{
    const {title} = data;
    // const [showItem,setShowItem] = useState(false);
    const handleClick = ()=>{
        setShowIndex();
    }
    return(
        <div>
            {/* Accordion Header */}
            <div className="w-6/12 mx-auto bg-gray-50 rounded-md">
                <div className="justify-between flex bg-gray-100 p-4 my-4  shadow-md rounded-md cursor-pointer"
                onClick={handleClick}>
                    <span className="font-bold text-md">{title} ({data.itemCards.length})</span>
                    <span className="text-sm">Down Arrow</span>
                </div>
                {/* Accordion Body */}
               { showItem && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory