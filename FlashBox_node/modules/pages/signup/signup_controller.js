const express = require('express')


const SignUpDB = require('./signup_DB')



module.exports.SignUpPage = async (req,res)=>{
  res.send(await SignUpDB.SignUpPageJson())
}
