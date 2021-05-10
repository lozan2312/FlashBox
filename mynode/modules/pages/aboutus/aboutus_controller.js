const express = require('express')



const AboutDB = require('./aboutus_DB')


module.exports.AboutPage = (req,res)=>{
  res.json(AboutDB.AboutPageJson())
}
