const express = require('express')
const LocationPriceDB = require('./LocationPrice_DB')
var bodyParser = require('body-parser');



module.exports.LocationPricePage = async (req,res)=>{
  // let type=req.body.type;
  let type='Standard';
  let region='north';
  let weight='up to 1kg';
  res.json(await LocationPriceDB.PriceJson(type,region,weight));
}
