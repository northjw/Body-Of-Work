const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
var PORT = process.env.PORT || 3000

const app = express();

//logging
app.use(logger("dev"));

//post rew middlewhare (addes payload to req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const databaseUrl = "workout_db";
const collections = ["workout"];

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


//Creating Routes
require("../a/Apple/routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listen on port 3000
app.listen(PORT, () => {
  console.log(` http://localhost:3000`,);
});

