const express = require('express')


const SignUpDB = require('./signup_DB')



module.exports.SignUpPage = (req,res)=>{
  res.send(SignUpDB.SignUpPageJson())
}
