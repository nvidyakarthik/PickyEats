import React, { Component } from "react";
import Container from "../../components/Container";
import SmallCard from "../../components/SmallCard";
import { Link } from "react-router-dom";
import "./home.css";
import API from "../../utils/API";



class Home extends Component {
	state = {
		restaurantName: "",
		city: "",
		categories: [],
		//categories: ["Chinese", "Mexican", "Korean", "American", "Steakhouse", "Italian", "Seafood", "Breakfast", "Pizza", "Burger", "Thai", "Japanese", "Vietnamese", "Sandwiches", "Sushi Bar"],
		restaurants: [
			{
				id: "https://steak44.com/",
				img: "https://media-cdn.tripadvisor.com/media/photo-w/05/e9/32/0f/steak-44.jpg",
				name: "Steak 44",
				info: "5101 N 44th St, Phoenix, AZ 85018"
			},
			{
				id: "http://bobbyq.net/",
				img: "https://media-cdn.tripadvisor.com/media/photo-w/03/da/64/32/bobby-q-s.jpg",
				name: "Bobby Q",
				info: "8501 N 27th Ave, Phoenix, AZ 85051"
			},
			{
				id: "http://pomopizzeria.com/",
				img: "https://media-cdn.tripadvisor.com/media/photo-o/04/1a/eb/f6/bufala-verace.jpg",
				name: "Pomo Pizzeria",
				info: "705 N 1st St, Suite 120, Phoenix, AZ 85004"
			},
			{
				id: "http://www.carolinasmex.com/?utm_source=tripadvisor&utm_medium=referral",
				img: "https://media-cdn.tripadvisor.com/media/photo-w/07/5c/99/18/authentic-food.jpg",
				name: "The Original Carolina's",
				info: "1202 E Mohave St, Phoenix, AZ 85034"
			},
			{
				id: "http://www.sweetrepublic.com/stores?utm_source=tripadvisor&utm_medium=referral",
				img: "https://media-cdn.tripadvisor.com/media/photo-p/08/6c/f2/8b/s-mores-sundae.jpg",
				name: "Sweet Republic",
				info: "6054 N 16th St, Phoenix, AZ 85016"
			},
			{
				id: "https://pappadeaux.com/home/",
				img: "https://media-cdn.tripadvisor.com/media/photo-w/0e/8a/4c/c8/meal.jpg",
				name: "Pappadeaux Seafood",
				info: "11051 N Black Canyon Hwy, Phoenix, AZ 85029"
			},
		]
	};

	componentDidMount() {
		this.loadCategories();

	}

	loadCategories = () => {
		API.getCategories().then(response => {
			console.log(response.data)
			this.setState({
				categories: response.data
			});
        }).catch(err => console.log(err)); 

	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	seachByNameCity = () => {
		const searchData={
			restaurantName:this.state.restaurantName,
			city:this.state.city
		}
		API.getRestByNameCity(searchData).then(response => {
			console.log("city search"+response.data)
			this.props.history.push("/searchbyname/"+this.state.restaurantName+"/"+this.state.city); 
        }).catch(err => console.log(err)); 
		
	}

	takeMeTo = (site) => {
		return window.location = site;
	}

	render() {
		return (
			<div>
				<div className="jumbotron">
					<h1 id="mainTitle">Welcome to Picky Eats!</h1>

					<h3 id="subtitle">The search for your next favorite dish starts here!</h3>

					<input
						name="restaurantName"
						type="text"
						className="homeSearch"
						placeholder="Search by Restaurant..."
						value={this.state.restaurantName}
						onChange={this.handleInputChange}
					/>
					<input
						name="city"
						type="text"
						className="homeSearch"
						placeholder="City"
						value={this.state.city}
						onChange={this.handleInputChange} />
					<button className="btn" onClick={this.seachByNameCity}>Search</button>

					<div></div>

					<div className="dropdown">
						<button className="dropbtn">I'm in the mood for</button>
						<div className="dropdown-content">
							{this.state.categories.map(category => (								
								<Link to={'/ressearch/' + category._id} key={this.state.categories.id} >
									{category.categoryName}
								</Link>
							))}
						</div>
					</div>
				</div>

				<Container>
					<div className="featuredRestaurants">
						<h1 className="title">Featured Restaurants</h1>
						{this.state.restaurants.map(restaurant => (
							<SmallCard
								id={restaurant.id}
								name={restaurant.name}
								img={restaurant.img}
								info={restaurant.info}
								linkTitle="Website"
								onClick={this.takeMeTo}
							/>
						))}
					</div>
				</Container>
			</div>
		)
	};

};

export default Home;