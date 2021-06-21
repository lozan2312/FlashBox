const express = require('express')
const generalDB = require('../../../../general_DB.js')

let LocationPrice = async (type,region,weight)=> {
  return await generalDB.DBquery(
    "SELECT * "
    +"FROM location_price "
    +"Inner JOIN location "
    +"ON location_price.Location_ID=location.Location_ID "
    +"WHERE weight like '"+weight
    +"' AND location.region like '"+ region
    +"' AND location_price.type like '"+ type +"'")
}

module.exports.PriceJson = async (type,region,weight) =>{
  return ('{"LocationPrice":'+ await LocationPrice(type,region,weight)+'}')
}
