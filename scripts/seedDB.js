const mongoose = require("mongoose");
const db = require("../models/index");
// This file empties the colors collection and inserts the colors below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mydemoapp", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const colorSeed = [
  {
    name: "Gold",
    hex: "#a1a100"
  },
  {
    name: "Rust",
    hex: "#a10000"
  },
  {
    name: "Black", 
    hex: "#000000"
  }
];

db.Color.deleteMany({})
.then(() => db.Color.insertMany(colorSeed))
  .then(data => {
    console.log(`${data.length} records inserted!`);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
