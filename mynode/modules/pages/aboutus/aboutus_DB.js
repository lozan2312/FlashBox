const express = require('express')
const aboutfactors = require('./aboutJson/factors.json');
const aboutdeals = require('./aboutJson/deals.json');
const aboutdetails = require('./aboutJson/details.json');
const header=require('../../parts/header/header_controller.js')

let Factors =()=> {
  return(aboutfactors)
}
let Deals =()=> {
  return(aboutdeals)
}

let Details =()=> {
  return(aboutdetails)
}
module.exports.AboutPageJson=()=>{
  return JSON.parse('{"Factors":'+JSON.stringify(Factors())+',"Deals":'+JSON.stringify(Deals())
    +',"Details":'+JSON.stringify(Details())+',"Header":'+JSON.stringify(header.Header())+"}")
}


module.exports.AboutPage = (req,res)=>{
  res.json(AboutPageJson())
}
