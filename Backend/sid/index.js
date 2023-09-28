const express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./Routes/user.route");
const { postRouter } = require("./Routes/Posts.route");
const cors=require("cors")
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors())

// app.use("/user", userRouter);
app.use("/posts", postRouter);



app.listen(process.env.PORT, async() => {
    try{
      await connection;
      console.log("Connected to the DB");
      console.log(`Running at ${process.env.PORT} port`);
    }catch(err){
        console.log(err);
    }
})