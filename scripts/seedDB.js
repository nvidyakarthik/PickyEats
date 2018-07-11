const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pickyeats"/* ,
  {
    useMongoClient: true
  } */
);

const restaurantCategorySeed = [
  { categoryName: "Chinese" },
  { categoryName: "Mexican" },
  { categoryName: "Korean" },
  { categoryName: "American" },
  { categoryName: "Indian" },
  { categoryName: "Steakhouse" },
  { categoryName: "Italian" },
  { categoryName: "Seafood" },
  { categoryName: "Breakfast" },
  { categoryName: "Pizza" },
  { categoryName: "Burger" },
  { categoryName: "Japanese" },
  { categoryName: "Vietnamese" },
  { categoryName: "Sandwiches" },
  { categoryName: "Sushi Bar" },

  
];

db.Category
  .remove({})
  .then(() => db.Category.collection.insertMany(restaurantCategorySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
