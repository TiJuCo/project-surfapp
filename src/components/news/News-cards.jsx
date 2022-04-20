import React from "react";
import './News-grid.css';

function CreateCards(props) {

    const {title, date, author, image,} = props;
    
    return (
        <div className="bg-img" style={{ background: `url(${image})` }}>
            <div className="news-headlines">
                <h1>{title}</h1>
                <h4>{date}</h4>
                <h5>by {author}</h5>
            </div>
        </div>
    )
}

export default CreateCards;