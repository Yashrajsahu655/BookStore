import mongoose from 'mongoose';


const UserSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User",UserSchema);

export default User;