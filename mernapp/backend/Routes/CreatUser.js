const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs")
const  jwt = require("jsonwebtoken")
const jwtSecret = "gvafvafgvafvafvakf"

router.post(
  "/creatuser",
  body("email").isEmail().withMessage("Invalid email format"),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("name").notEmpty().withMessage("Name is required"),
  body("location").notEmpty().withMessage("Location is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
      
    const salt = await bcrypt.genSalt(10);
    let setPassword =await bcrypt.hash(req.body.password, salt);
    try {
      await User.create({
        name: req.body.name,
        password: setPassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error); // Better to log the error for debugging
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  }
);


router.post(
  "/loginuser",
  body("email").isEmail().withMessage("Invalid email format"),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }), 
    async (req, res) => {
   let email = req.body.email;
   let password=req.body.password;
   console.log(email, password)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userData = await User.findOne({email});
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "login with correct credential" });
      }
    const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
      if (!pwdCompare) {
        return res
          .status(400)
          .json({ errors: "login with correct credential" });
      }
     const data ={
      user:{
        id:userData.id
      }
     }

     const authToken =jwt.sign(data,jwtSecret)
      return res.json({ success: true, authToken : authToken });
    } catch (error) {
      console.error(error); // Better to log the error for debugging
     res.json({success :false})

   }
}
);




module.exports = router;
