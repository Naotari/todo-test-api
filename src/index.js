import express from "express"
import morgan from "morgan"
import router from "./routes/routes.js"
import { sequelize } from "./db.js"
import cors from "cors"

const server = express()

//middlewares
server.use(cors()); // to accept all income requests
server.use(morgan("dev")); //shows the info of the html requests
server.use(express.urlencoded({extended:false})) //only takes basics format requests
server.use(express.json()); // to support json format in the api

//routes
server.use("/", router)

//startin the server
server.listen(3000, () => {
  console.log(`Listening on port 3000`)
})

// // const cloudinary = require('cloudinary').v2;
// import cloudinary from "cloudinary"
// const cloudinaryV2 = cloudinary.v2
// // Return "https" URLs by setting secure: true
// cloudinaryV2.config({
//   secure: true
// });