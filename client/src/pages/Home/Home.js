import React from "react";
import "./home.css";


const Home = () => (
<div>
    	<div className="jumbotron">
    		<h1>Welcome to Picky Eats!</h1>

    		<h3 id="subtitle">Start searching for your next dish by entering the restaurants name or what you're in the mood for!</h3>

    		<input type="text" placeholder="Search by Restaurant...">
    		<button className="btn">Search</button>

    		<br>
    	
    		
    	<div class="dropdown">
  			<button class="dropbtn">I'm in the mood for</button>
  				<div className="dropdown-content">
    				<a href="#">Chinese</a>
    				<a href="#">Mexican</a>
    				<a href="#">Korean</a>
    				<a href="#">American</a>
    				<a href="#">Steakhouses</a>
    				<a href="#">Italian</a>
    				<a href="#">Seafood</a>
    				<a href="#">Breakfast</a>
    				<a href="#">Pizza</a>
    				<a href="#">Burgers</a>
    				<a href="#">Thai</a>
    				<a href="#">Japanese</a>
    				<a href="#">Vietnamese</a>
    				<a href="#">Sandwiches</a>
    				<a href="#">Sushi Bars</a>
  				</div>
		</div>
		

  		</div>

  		<div className="featuredRestaurants">
 		<h1 id="fTitle">Featured Restaurants</h1>

 		<div className="card">
  			<img src="images/bar.jpg" alt="restaurant" style="width:100%">
  				<div className="restaurantinfo">
    				<h4><b>Restaurant Name</b></h4> 
    					<p>Restaurant info here</p> 
    					<button className="btn">Menu</button>
  				</div>
		</div>

		<div className="card">
  			<img src="images/table.jpg" alt="restaurant" style="width:100%">
  				<div className="restaurantinfo">
    				<h4><b>Restaurant Name</b></h4> 
    					<p>Restaurant info here</p> 
    					<button className="btn">Menu</button>
  				</div>
		</div>

		<div className="card">
  			<img src="images/jumboImage.jpg" alt="restaurant" style="width:100%">
  				<div className="restaurantinfo">
    				<h4><b>Restaurant Name</b></h4> 
    					<p>Restaurant info here</p>
    					<button className="btn">Menu</button>
  				</div>
		</div>
 		</div>
</div>
);

export default Home;