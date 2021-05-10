const express = require('express')


const SignInDB = require('./signin_DB')



module.exports.SignInPage = (req,res)=>{
  res.json(SignInDB.SignInPageJson())
}
