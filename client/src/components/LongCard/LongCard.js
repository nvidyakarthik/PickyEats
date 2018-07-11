import React from "react";
import "./longCard.css";

const LongCard = props => (
    <div className="menuItem">
        <img className="itemPic" src={props.img} alt="pic" />
        <div className="itemWords">
            <div className="itemName">{props.name}</div>
            <div className="itemDescription">{props.description}</div>
            <div className="priceRating">{props.price}</div>
            <div className="priceRating">Rating: {props.rating}</div>
        </div>
    </div>
);

export default LongCard;