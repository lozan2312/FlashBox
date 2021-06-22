const express = require('express')
const LocationPriceDB = require('./LocationPrice_DB')
var bodyParser = require('body-parser');



module.exports.LocationPricePage = async (req,res)=>{
  let type= req.body.type;
  let region = req.body.region;
  let weight = req.body.weight;
  res.json(await LocationPriceDB.PriceJson(type,region,weight));
}
