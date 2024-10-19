const express= require("express");
const { registerUser } = require("../controller/registerUser");
const authUser = require("../controller/authUser");

const router = express.Router();


router.route('/register').post(registerUser);
router.route('/login').post(authUser);


 
module.exports=router;  