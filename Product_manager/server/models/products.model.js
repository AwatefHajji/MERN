const mongoose = require('mongoose')
//making a new schema instance from the mongoose.Schema() object constructor
const ProductSchema = new mongoose.Schema(
    {   title: {
        type : String,
        required : true,
        minLength : [5, 'title must be at least 5 characters']
    },
        price: {
            type : Number,
            required : true,
        },
        description: {
            type : String,
            required : true,
            minLength : [10, 'description must be at least 10 characters']}

    },{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);
