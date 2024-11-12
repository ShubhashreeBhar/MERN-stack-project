const express =require("express");
const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("welcome");
})
app.get("/reg",(req,res)=>{
    res.status(200).send("welcome to registration page");
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`sever is running at port:${PORT}`);
});