
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// register

const registerUser = async (req,res) =>{

    const {userName,email,password } = req.body;


    try{
        const checkUser = await User.findOne({email});
        if(checkUser)
            return res.json({
            success:false,
            message:"User Already Exists with same mail Plase try Again"
        })

        const hashPassword = await bcrypt.hash(password,12);
        const newUser = new User({
            userName,
            email,
            password:hashPassword,
        })

        await newUser.save();
        res.status(200).json({
            success:true,
            message:"Registration successful"
        })





    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message: "some error occured"
        })
    }

}


module.exports = {registerUser}