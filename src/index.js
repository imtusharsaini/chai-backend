// require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectdb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectdb();








// import e from "express";
//  const app = e();
// ( async () =>{
//      try{
//       await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}');

//       app.on("Error:", (error)=>{
//            console.log(error);
//            throw error
//       });

//       app.listen(process.env.PORT, ()=>{
//          console.log('server is running at ${process.env.PORT}');
//       })
//      }
//      catch(error){
//        console.error("error:", error)
//        throw err
//      }
// })()
