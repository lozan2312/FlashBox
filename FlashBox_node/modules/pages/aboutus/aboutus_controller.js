const express = require('express');
const AboutDB = require('./aboutus_DB')


module.exports.AboutPage = async (req,res)=>{
  res.json(await AboutDB.AboutPageJson())
}
