const express = require("express");
const { auth } = require("../MiddleWare/authmiddleware");
const { postModel } = require("../Model/Post.model");


const postRouter = express.Router();
// postRouter.use(auth);


postRouter.get("/", async(req,res) => {
    try{
        const story=await postModel.find()
        if(story){
            res.status(200).json({story})
        }else{
            res.status(400).json({msg:"Post not Found"})
        }
    }catch(err){
        res.status(400).json({error:err})
    }
})


postRouter.post("/add", async(req,res) => {
   try{
    console.log(req.body);
    const post = new postModel(req.body);
    await post.save();
    res.json({msg: "Post create successfully"});     
   }catch(err){
    res.json(err);
   }
})


postRouter.patch("/update/:id", async (req,res) => {
    try{
       const postID = req.params.id;
        await postModel.findByIdAndUpdate({_id:postID}, req.body);
        res.status(200).json({"msg": "updated"})
    }catch(err){
        res.status(400).send(err);
    }
})


postRouter.delete("/delete/:id", async(req,res) => {
    try{
        const postID = req.params.id;
         await postModel.findByIdAndDelete({_id:postID}, req.body);
         res.status(200).json({"msg": "title has been deleted"})
     }catch(err){
         res.status(400).send(err);
     }
})



module.exports = {
    postRouter
}