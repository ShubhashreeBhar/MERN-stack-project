const {z}=require("zod");

//Creating an object schema

const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at last of 3 characters."})
    .max(30,{message:"Name must not be more than 30 characters"}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email adddress"})
    .min(3,{message:"Email must be at last of 3 characters."})
    .max(30,{message:"Email must not be more than 30 characters"}),
    phone:z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone number must be at last of 10 characters."})
    .max(20,{message:"Phone number must not be more than 20 characters"}),
    password:z
    .string({required_error:"Password is required"})
    .min(7,{message:"Password must be at least of 6 characters"})
    .max(30,{message:"password must not be more than 30 characters"}),

   } );



   module.exports = signupSchema;