const User = require("../models/user-model");
const bcrypt=require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome using router again");
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal server error" });
    }
};

const register = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { username, email, phone, password } = req.body;

        // Check if the user already exists by email
        const userExist = await User.findOne({ email: email });
        
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists." });
        }

        //hash the password
        const saltRound=10;
         const hash_password= await bcrypt.hash(password,saltRound);

        // Create a new user
        const newUser = await User.create({
            username, email, phone, password: hash_password
        });

        // Return the newly created user
        res.status(201).json({ msg:"registration is successful." ,token:await newUser.generateToken(),userId:newUser._id.toString(),});

    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal server error" });
      //  next(err);
    }
};


//user login

const login =async  (req, res) => {
    try {

        const {email,password}=req.body;
        const userExist= await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message:"Invalid User"});
        }
        
        const user=await bcrypt.compare(password,userExist.password);
        if(user){
            res.status(200).json({ msg:"Login successful." ,token:await userExist.generateToken(),userId:userExist._id.toString(),});
        }
        else{
            res.status(401).json({msg:"Invalid email or password."})
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Internal server error" });
    }
};


//to send user data-user logic

const user=async(req,res)=>{
    try{
        const userData=req.user;
        console.log(userData);
       return res.status(200).json({userData});
    }
    catch(error){
        console.log(`error from the user route ${error}`);
    }
}


module.exports = { home, register ,login,user};
