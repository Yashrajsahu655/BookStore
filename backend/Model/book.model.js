import mongoose  from "mongoose";

const BookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("Book",BookSchema);

export default Book;
