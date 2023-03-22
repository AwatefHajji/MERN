const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "authorDb";
app.use(cors());

app.use(express.json(), express.urlencoded({extends:true}));

require('./config/mongoose.config')(DB);
require('./routes/author.routes')(app)



// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );