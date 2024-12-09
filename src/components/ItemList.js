import React, { useState } from "react"
import { cloudinary_Image_Path } from "../utils/constant";

const ItemList=({items})=>{
    return(
        <div>
                {
                    items.map((item)=>(
                        <div key={item.card.info.id} className="p-2 m-2 border-b-2 py-4 flex justify-between">
                            <div className="w-9/12">
                                <p className="text-left font-bold">{item.card.info.name}</p>
                                <p className="text-left">{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</p>
                                <p className="text-left text-sm">*{item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                                <p className="text-sm pr-4 text-left">{item.card.info.description}</p>
                                
                            </div>
                            <div className="w-3/12">
                                <img className="rounded-lg align-bottom shadow-xl" src={cloudinary_Image_Path+item.card.info.imageId} />
                                <button className="bg-green-600 relative bottom-4 hover:bg-green-800 px-4 py-1 rounded-md text-white">Add</button>
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}

export default ItemList;