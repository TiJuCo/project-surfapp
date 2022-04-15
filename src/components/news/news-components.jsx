import React from "react";
import nazare from '../../images/nazare.jpg';
import './news.css';



function CreateNewsCard(props) {

    const {title, date, author, image,} = props;
    
    return (
        <div className="newsCards">
            <div className="newsCard" >
                <h1>{title}</h1>
                <h3>{date}</h3>
                <h4>by {author}</h4>
            </div>
        </div>
    )

}

export default CreateNewsCard;