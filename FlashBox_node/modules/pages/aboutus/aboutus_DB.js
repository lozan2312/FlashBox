const express = require('express')
const aboutfactors = require('./aboutJson/factors.json');
const aboutdeals = require('./aboutJson/deals.json');
const aboutdetails = require('./aboutJson/details.json');
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let Factors = async ()=> {
  return await generalDB.DBquery("SELECT * FROM factors")
}
let Deals = async ()=> {
  return await generalDB.DBquery("SELECT * FROM deals")
}

let Details = async ()=> {
  return await generalDB.DBquery("SELECT * FROM aboutus_details")
}
module.exports.AboutPageJson = async ()=>{
  return JSON.parse('{"Factors":'+JSON.stringify(await Factors())+',"Deals":'+JSON.stringify(await Deals())
    +',"Details":'+JSON.stringify(await Details())+',"Header":'+JSON.stringify(await header.Header())+"}")
}


module.exports.AboutPage = async (req,res)=>{
  res.json(AboutPageJson())
}
