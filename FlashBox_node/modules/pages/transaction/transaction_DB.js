const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let DeliveryInfo = async ()=> {
  return await generalDB.DBquery(
    "SELECT * "
    +"FROM ((delivery_info "
    +"INNER JOIN transaction_option "
    +"ON delivery_info.Option_ID=transaction_option.Option_ID) "
    +"INNER JOIN location_price "
    +"ON delivery_info.LocationPrice_ID=location_price.LocationPrice_ID);")
}

let Region = async ()=> {
  return await generalDB.DBquery(
    "SELECT * FROM `form_items` INNER JOIN `form_list` on `form_items`.`form_list_id`=`form_list`.`Form_List_ID` WHERE `form_list`.`Form_List_ID`=6;")
}
let Weight = async ()=> {
  return await generalDB.DBquery("SELECT DISTINCT `weight`,`type` FROM `location_price` WHERE `weight` NOT LIKE 'Null';" )
}
let Quantity = async ()=> {
  return await generalDB.DBquery("SELECT DISTINCT `quantity`,`type` FROM `location_price` WHERE `quantity` NOT LIKE 'Null'" )
}
let ContentTransaction = async () => {
  return JSON.parse('{"DeliveryInfo":'+JSON.stringify(await DeliveryInfo())
  +',"Region":'+JSON.stringify(await Region())+',"Weight":'+JSON.stringify(await Weight())
  +',"Quantity":'+JSON.stringify(await Quantity())+'}')
}


module.exports.TransPageJson = async()=>{
    return JSON.parse('{"Content":'+JSON.stringify(await ContentTransaction())+',"Header":'+JSON.stringify(await header.Header())+'}')
}
