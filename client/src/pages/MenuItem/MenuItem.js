import React from "react";
import "./menuItem.css";

const MenuItem = () => (
    <div>
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
			<h1 id="highlightTitle">Highlight Reviews</h1>

			
		</div> 

		<div id="genReviews">
			<p id="topItem">Reviews</p>

		</div>

		<div id="restDirect">
			<div className="modalButtons">
                <button className="resButton">Go to Restaurant Page</button>
                <button className="rateButton">Rate Item</button>
            </div>
		</div>

	
    			

	



</div>
);

export default MenuItem;