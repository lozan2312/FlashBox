const express = require('express')
const HomeDB = require('./home_DB')


module.exports.HomePage = async (req,res)=>{
  res.json(await HomeDB.HomePageJson());
}
