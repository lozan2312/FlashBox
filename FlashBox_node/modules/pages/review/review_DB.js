const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let Features = async ()=> {
  return await generalDB.DBquery("SELECT * FROM features")
}

let Reviewer = async ()=> {
  return await generalDB.DBquery("SELECT * FROM carousel")
}

let ReviewDetails = async ()=> {
  return await generalDB.DBquery("SELECT * FROM form_items WHERE form_list_id= 3")
}
module.exports.ReviewPageJson = async ()=>{
  return JSON.parse('{"Features":'+JSON.stringify(await Features())+',"Reviewer":'+JSON.stringify(await Reviewer())
  +',"ReviewDetails":'+JSON.stringify(await ReviewDetails())+',"Header":'+JSON.stringify(await header.Header())+"}")
}
