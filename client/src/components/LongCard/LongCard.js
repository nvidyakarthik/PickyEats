import React from "react";
import Rating from "react-rating";
import "./longCard.css";

const LongCard = props => (
    <div className="menuItem">
        <img className="itemPic" src={props.img} id="imgId" alt="pic" />
        <div className="itemWords" id={props.id} >
            <div className="itemName">{props.name}</div>
            <div className="itemDescription">{props.description}</div>
            <div className="priceRating">{props.price}</div>
            <div className="priceRating">
                <Rating
                    stop="5"
                    initialRating={props.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                />
            </div>
        </div>
    </div>
);

export default LongCard;