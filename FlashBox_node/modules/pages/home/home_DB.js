const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let Carousel = async ()=> {
  return await generalDB.DBquery("SELECT * FROM home_captions")
}
let Steps = async ()=> {
  return await generalDB.DBquery("SELECT * FROM steps")
}
let Suggestion = async () => {
  return await generalDB.DBquery("SELECT * FROM suggestion")
}
let Tracking = async () => {
  return await generalDB.DBquery("SELECT * FROM status_type")
}
let TrackingPackage = async () => {
  return await generalDB.DBquery("SELECT * FROM `tracking_package` INNER JOIN `status_type` on `tracking_package`.`StatusType_ID`=`status_type`.`StatusType_ID`")
}
let ContentHome = async () => {
  return JSON.parse('{"Steps":'+JSON.stringify(await Steps())+',"Suggestion":'+JSON.stringify(await Suggestion())
    +',"Carousel":'+JSON.stringify(await Carousel())+',"Tracking":'+JSON.stringify(await Tracking())
    +',"TrackingPackage":'+JSON.stringify(await TrackingPackage())+'}')
}

module.exports.HomePageJson = async () =>{
  return JSON.parse('{"Content":'+JSON.stringify(await ContentHome())+',"Header":'+JSON.stringify(await header.Header())+'}')
}
