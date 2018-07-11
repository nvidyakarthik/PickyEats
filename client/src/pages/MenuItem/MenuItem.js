import React, { Component } from "react";
import Popup from "reactjs-popup";
import Container from "../../components/Container";
import "./menuItem.css";

class MenuItem extends Component {
	state = {
        menu: [
            {
                id: 1,
                name: "Lindsey H.",
                description: "This dish is my absolute favorite! I always get it when I'm here; it's my go to dish. I would recommend it to anyone!",

                rating: "5/5"
            },
            {
                id: 2,
                name: "Mike P.",
                description: "I don't really get the hype of this dish, but it's not bad.",

                rating: "3/5"
            },
            {
                id: 3,
                name: "Chad C.",
                description: "Maybe I got a bad serving of it but I don't understand how this has such good reviews. Terrible. Would not get again!",

                rating: "1/5"
            }
        ]
    };

    handleRateIt = event => {
        event.preventDefault();
        alert("Submit clicked");
    };


    render() {
        return (
            <div id="menuItemPage">
                <div className="menuJumbo">
                    <div className="restaurantinfo">
    					<h1 id="mainTitle">Menu Item Name</h1> 
 					</div>
                </div>

                <div id="topInfo">
					<p id="topItem">Item Disc</p>
					<img src="http://via.placeholder.com/550x250" alt="top item"/>

					<p id="topdisc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			
				</div> 

                <div id="reviewTitle" className="title">Reviews</div>
                {this.state.menu.map(item => (
                    <Container>

                        <div className="genReviews">

                            <img className="itemPic" src="http://placehold.it/100x100" alt="pic" />
                            <div className="itemWords">
                                <div className="itemName">{item.name}</div>
                                <div className="itemDescription">{item.description}</div>
                                <div className="priceRating">Rating: {item.rating}</div>
                            </div>
                        </div>
                    </Container>
                ))}

                <div id="restDirect">
					<div className="modalButtons">

					
                		<button className="resButton">Go to Restaurant Page</button>
                		
            		</div>
				</div>
            </div>
        );
    };
};

export default MenuItem;