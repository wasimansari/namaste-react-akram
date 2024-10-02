import React from "react";
import { ShimmerThumbnail,ShimmerSectionHeader,ShimmerPostList } from "react-shimmer-effects";
ShimmerUi=()=>{
    return(
        <div className="shimmer-container">
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        <ShimmerThumbnail className="shimmer-card" height={350} width={234} rounded />
        {/* <ShimmerPostList postStyle="STYLE_FOUR" col={5} row={3} gap={30} />; */}
        </div>
    )
}

export default ShimmerUi