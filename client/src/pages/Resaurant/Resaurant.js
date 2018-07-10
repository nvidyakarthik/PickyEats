import React, { Component } from "react";
import Popup from "reactjs-popup";
import Container from "../../components/Container";
import "./restaurant.css";

class Restaurant extends Component {
    state = {
        menu: [
            {
                id: 1,
                name: "Burrito",
                description: "Sooo yummy. I got the beef burrito, and I'm usually very picky about burritos and this one satisfied me completely!",
                price: "5.99",
                rating: "5/5"
            },
            {
                id: 2,
                name: "Lasagna",
                description: "I could have used more sauce, but it's not bad.",
                price: "15.99",
                rating: "3/5"
            },
            {
                id: 3,
                name: "Chow Mein",
                description: "Ugh, not good at all. It was dry, flavorless, and made me sick after. Do not get.",
                price: "7.96",
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
            <div id="restaurantPage">
                <div className="restJumbotron">
                    <h1 id="restName">Restaurant Name</h1>
                </div>

                <div id="menu" className="title">Menu</div>
                {this.state.menu.map(item => (
                    <Container>
                        <div className="menuItem">
                            <img className="itemPic" src="http://placehold.it/100x100" alt="pic" />
                            <div className="itemWords">
                                <div className="itemName">{item.name}</div>
                                <div className="itemDescription">{item.description}</div>
                                <div className="priceRating">${item.price}</div>
                                <div className="priceRating">Rating: {item.rating}</div>
                                <Popup
                                    trigger={<button className="priceRating rateIt" id={item.id}>Rate it!</button>}
                                    modal
                                    closeOnDocumentClick>
                                    {close => (
                                        <div>
                                            <div className="modalTitle">{item.name}</div>
                                            <div className="modalContent">
                                                <textarea id={"review" + item.id} className="modalSection modalReview" placeholder="Your review..." />
                                                <div className="modalSection modalDiv">Your rating:</div>
                                                <select id={"rating" + item.id} className="modalSection ratingSelect">
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                            <div className="modalButtons">
                                                <button className="modalButton" onClick={() => { close() }}>Cancel</button>
                                                <button className="modalButton" onClick={this.handleRateIt}>Submit</button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        </div>
                    </Container>
                ))}

                <div id="popupContainer"></div>


            </div>
        );
    };
};

export default Restaurant;