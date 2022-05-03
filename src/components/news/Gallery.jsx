import React from "react"
import { ArticlesData } from "./NewsData"
import "./Gallery.css"


function GalleryCard(props) {
    const {index, tag, title, gallery} = props;

    return (
        <div className="gallery-container" >
            <img className="gallery-img" src={gallery} alt={title} />
        </div>
    )
}

export default GalleryCard


