import React from "react";
import "./smallCard.css";

const Card = props => (
    <div className="featuredCard">
        <img src={props.img} alt="restaurant" />
        <div className="restaurantinfo">
            <h4><b>{props.name}</b></h4>
            <p>{props.info}</p>
            <button className="btn" onClick={()=>props.onClick(props.id)}>{props.link}</button>
        </div>
    </div>
);

export default Card;