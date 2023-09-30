const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name: String,
    title:String,
    desc:String,
    name:String
},{
    versionKey: false
});


const postModel = mongoose.model("posts", postSchema);


module.exports = {
    postModel
}