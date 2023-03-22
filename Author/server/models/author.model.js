// import mongoose
const mongoose = require('mongoose')
// the schema 
const AuthorSchema = new mongoose.Schema(
    {
        Name:{
            type: String,
            required:[true, "{PATH} must be present🆎🆎🆎"],
            minlength: [3,"{PATH} must be at least 3 character🔤🔤🔤"]
        }
    },
    {timestamps:true}
)
const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author;