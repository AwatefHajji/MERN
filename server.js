const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokesDb"
// MIDDLEWARE
app.use(express.json(), express.urlencoded({extended:true}));

// Passing the DB name to mongoose configuration
require("./config/mongoose.config")(DB)

// Import the routes
require("./routes/jokes.routes")(app)


// START THE SERVER
app.listen(PORT,()=>{console.log("We have a lift off 🚀")})