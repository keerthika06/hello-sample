const { User } = require("../models/index");
const bcrypt = require("bcrypt")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const {mongoose} = require("mongoose")

const register = async (req,res) =>{
    if(!req.body)
    res.status(400)
    .json({status:false, statusCode :400,message:"body not found"})
    const { name , email, password} = req.body

    const validationRrrors = validationResult(req)
    if(!validationErrors.isEmpty())
    return res.status(403).json({
        status:false,
        statusCode : 403,
        message : "validation Error"
    })
    const userfound = await User.findOne({email})

    if (userfound)
    return res.status(403).json({
      status: false,
      statusCode: 403,
      message: "User with this email already present",
    });








}
 module.exports = 
 {
    register
 }
