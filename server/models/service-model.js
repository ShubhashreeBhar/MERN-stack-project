const {Schema,model}=require("mongoose");
const { required } = require("../validators/auth-validator");

const serviceSchema=new Schema({
    CategoryID:{type:String, required:true},
    CategoryName:{type:String,required:true},
    CategoryDescription:{type:String,required:true},
});

const Service =new model("Service",serviceSchema);

module.exports=Service;