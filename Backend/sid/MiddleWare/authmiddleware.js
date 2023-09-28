const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = (req,res,next) => {
   try{
    const token = req.headers.authorization.split(" ")[1];
    if(token){
      const decoded = jwt.verify(token, process.env.secretKey);
      if(decoded){
        console.log(decoded);
        req.body.userID = decoded.userId;
        next();
      }else{
        res.status(400).json({error: "Not Authorized"})
      }
    }else{
        res.status(400).json({msg: "Please Login"})
    }
   }catch(err){
     res.json({error:err})
   }
}



module.exports = {
    auth
}