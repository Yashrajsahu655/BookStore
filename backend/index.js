import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './Routes/book.route.js'
import userRoute from './Routes/user.route.js'
import cors from 'cors'

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

//connect to mongodb
mongoose.connect(MONGODB_URI)
  .then(console.log("mongodb connected successfully...."))
  .catch(err =>console.log(err));

//definig routes
app.use("/book",bookRoute);
app.use("/user",userRoute)

app.listen(PORT,()=>{console.log(`listening on ${PORT}`)})

