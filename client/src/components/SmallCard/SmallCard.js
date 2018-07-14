import React from "react";
import "./smallCard.css";

const Card = props => (
    <div className="featuredCard">
        <img src={props.img} alt="restaurant" className="smlCardImg"/>
        <div className="restaurantinfo">
            <h4 className="smlCardName"><b>{props.name}</b></h4>
            <p className="smlCardInfo">{props.info}</p>
            <button className="btn" onClick={()=>props.onClick(props.id)}>{props.linkTitle}</button>
        </div>
    </div>
);

export default Card;