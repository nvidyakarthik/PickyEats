import React, { Component } from "react";
import Container from "../../components/Container";
import "./home.css";


class Home extends Component {
	state = {
		categories: ["Chinese", "Mexican", "Korean", "American", "Steakhouse", "Italian", "Seafood", "Breakfast", "Pizza", "Burger", "Thai", "Japanese", "Vietnamese", "Sandwiches", "Sushi Bar"],
		restaurants: [
			{
				name: "Restaurant 1",
				info: "Restaurant 1 info",
			},
			{
				name: "Restaurant 2",
				info: "Restaurant 2 info",
			},
			{
				name: "Restaurant 3",
				info: "Restaurant 3 info",
			},
			{
				name: "Restaurant 4",
				info: "Restaurant 4 info",
			},
			{
				name: "Restaurant 5",
				info: "Restaurant 5 info",
			},
			{
				name: "Restaurant 6",
				info: "Restaurant 6 info",
			},
		]
	};

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 id="mainTitle">Welcome to Picky Eats!</h1>

					<h3 id="subtitle">Start searching for your next dish by entering the restaurants name or what you're in the mood for!</h3>

					<input type="text" placeholder="Search by Restaurant..." />
					<input type="text" placeholder="City" />
					<button className="btn">Search</button>

					<div></div>


					<div className="dropdown">
						<button className="dropbtn">I'm in the mood for</button>
						<div className="dropdown-content">
							{this.state.categories.map(category => (
								<a href="" value={category}>{category}</a>
							))}
						</div>
					</div>
				</div>

				<Container>
					<div className="featuredRestaurants">
						<h1 className="title">Featured Restaurants</h1>
						{this.state.restaurants.map(restaurant => (
							<div className="featuredCard">
								<img src="" alt="restaurant" />
								<div className="restaurantinfo">
									<h4><b>{restaurant.name}</b></h4>
									<p>{restaurant.info}</p>
									<button className="btn">Menu</button>
								</div>
							</div>
						))}
					</div>
				</Container>
			</div>
		)
	};

};

export default Home;