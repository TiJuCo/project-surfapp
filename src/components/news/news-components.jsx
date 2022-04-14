import React from "react";



function CreateNewsCard(props) {
    const {title, date, author, image,} = props;

    return (
        <div>
            
            <img src={image} alt={`from ${title}`} />
            <h1>{title}</h1>
            <h3>{date}</h3>
            <h4>by {author}</h4>
        </div>
    )

}

export default CreateNewsCard;