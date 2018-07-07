import React, { Component } from "react";
import "./home.css";


class Home extends Component {
	state = {
		categories: ["Chinese", "Mexican", "Korean", "American", "Steakhouse", "Italian", "Seafood", "Breakfast", "Pizza", "Burger", "Thai", "Japanese", "Vietnamese", "Sandwiches", "Sushi Bar"]
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

				<div className="featuredRestaurants">
					<h1 id="fTitle">Featured Restaurants</h1>

					<div className="card">
						<img src="" alt="restaurant" />
						<div className="restaurantinfo">
							<h4><b>Restaurant Name</b></h4>
							<p>Restaurant info here</p>
							<button className="btn">Menu</button>
						</div>
					</div>

					<div className="card">
						<img src="" alt="restaurant" />
						<div className="restaurantinfo">
							<h4><b>Restaurant Name</b></h4>
							<p>Restaurant info here</p>
							<button className="btn">Menu</button>
						</div>
					</div>

					<div className="card">
						<img src="" alt="restaurant" />
						<div className="restaurantinfo">
							<h4><b>Restaurant Name</b></h4>
							<p>Restaurant info here</p>
							<button className="btn">Menu</button>
						</div>
					</div>
				</div>
			</div>
		)
	};

};

export default Home;