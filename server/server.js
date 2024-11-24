require('dotenv').config();
const express =require("express");
const cors = require('cors');
const app=express();
const authRouter=require('./router/auth-router');
const contactRoute=require("./router/contact-router");
const connectdb=require('./utils/db');
const errorMiddleware=require("./middlewares/error-middleware");
const  serviceRoute =require("./router/service-router");

const corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOption));
app.use(express.json());//middleware

app.use("/api/auth",authRouter);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);



app.use(errorMiddleware);

const PORT=4000
connectdb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`sever is running at port:${PORT}`);
    });
});