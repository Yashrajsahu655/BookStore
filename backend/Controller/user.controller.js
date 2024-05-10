import User from '../Model/user.model.js'
import bcrypt from 'bcryptjs'

 export const signup = async (req,res)=>{
    try {
     const {fullname,email,password} = req.body;

     const user = await User.findOne({email});

     if(user){
      return res.status(400).json({message:"User already exist"})
     }
     
     let hashPassword = await bcrypt.hash(password,10)
     
    

      const createdUser = new User({
        fullname,
        email,
        password:hashPassword,
      })
     
     await createdUser.save();
       res.status(201).json({message:"user created successfully",user:{_id:createdUser._id,fullname:createdUser.fullname,email:createdUser.email}})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}

export const login = async(req,res)=>{
  try {
      const {email,password} = req.body;
      
      const user  = await User.findOne({email});

      if(!user){
        return res.status(400).json({message:"user not found"});
      }

     await bcrypt.compare(password,user.password,(err,data)=>{
          if(err) throw err;

          if(data){
            return res.status(200).json({message:"login success",user:{_id:user._id,fullname:user.fullname,email:user.email}})
          }
          else{
          return  res.status(400).json({message:"Password not matched"})
          }
      })


  } catch (error) {
    console.log("error",error);
    return  res.status(400).json({message:error})
  }
}