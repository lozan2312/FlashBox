const express = require('express')
const HomeDB = require('./home_DB')


module.exports.HomePage = (req,res)=>{
  res.json(HomeDB.HomePageJson());

}
