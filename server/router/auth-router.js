const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth-controller");
const validate =require("../middlewares/validate-middleware");
const signupSchema=require("../validators/auth-validator");
const authControllers=require("../controllers/auth-controller");
router.route("/").get(authController.home);
const authMiddleware=require("../middlewares/auth-middleware");
router
.route("/register")
.post(validate(signupSchema),authController.register);


router.route("/login").post(authController.login);
router.route("/user").get(authMiddleware,authControllers.user);

module.exports =router;