import React, { Component } from "react";
import Container from "../../components/Container";
import SmallCard from "../../components/SmallCard";
import "./resSearchName.css";
import API from "../../utils/API";
//import MDSpinner from "react-md-spinner";

class resSearchName extends Component {
	state = {
        restaurantName: "",
        city:"",
		restaurants: []
		 /* restaurants: [
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 1",
				info: "Restaurant 1 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 2",
				info: "Restaurant 2 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 3",
				info: "Restaurant 3 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 4",
				info: "Restaurant 4 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 5",
				info: "Restaurant 5 info",
			},
			{
				img: "http://placehold.it/100x100",
				name: "Restaurant 6",
				info: "Restaurant 6 info",
			},
		]  */
	}
	 componentDidMount() {
		let restName = this.props.match.params.name;
		this.setState({restaurantName:restName})
        let city=this.props.match.params.city;
        API.getRestByNameCity({restaurantName:restName,
			city:city})
		.then(response => {
        console.log("data received "+response.data);
            this.setState({               
                restaurants: response.data
            });
          
        }).catch(err => console.log(err));
    } 
    
	viewMenu = (restaurantId) => {
		this.props.history.push("/restaurant/" + restaurantId);
	}

	render() {
		/* if(!this.state.restaurants.length){
			return <MDSpinner className="spinner" size={100}/>
		} */
		return (
			<div>
				{this.state.restaurants.length ? (
					<Container>
						<h1 className="title">Search Results for {this.state.restaurantName}</h1>
						{this.state.restaurants.map(restaurant => (

							<SmallCard
								key={restaurant._id}
								id={restaurant._id}
								name={restaurant.restaurantName}
								img={restaurant.imgpath===""?"http://placehold.it/100x100":restaurant.imgpath}
								info={restaurant.street + " " + restaurant.city}
								onClick={this.viewMenu}
								linkTitle="Menu"

							/>
						))}
					</Container>

				) : (
						<Container>
							<h1 className="title">No restaurants available to display</h1>
						</Container>
					)}
			</div>
		)
	}
};

export default resSearchName;