const adminMiddleware=async(req,res,next)=>{
    try{
        const adminRole=req.user.isAdmin;
        if(!adminRole){
        return res.status(403).json({msg:"Access denied. User is not an admin"});
    }
    next();}
    catch(error){
        next(error);
    }
};

module.exports=adminMiddleware;