const express = require('express')


const SignInDB = require('./signin_DB')



module.exports.SignInPage = async (req,res)=>{
  res.json(await SignInDB.SignInPageJson())
}
