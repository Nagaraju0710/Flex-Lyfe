const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title:String,
    desc:String,
    likes:Number,
    name: String,
},{
    versionKey: false
});


const postModel = mongoose.model("posts", postSchema);


module.exports = {
    postModel
}