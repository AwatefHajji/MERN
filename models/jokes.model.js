const mongoose = require('mongoose')
//making a new schema instance from the mongoose.Schema() object constructor
const JokeSchema = new mongoose.Schema(
    {   setup: {
        type : String,
        required : true,
        minLength : [10, 'setup must be at least 10 characters']
    },
        punchline: {
            type : String,
            required : true,
            minLength : [3, 'punchline must be at least 3 characters']
        } 
    },{timestamps: true}
);
const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke