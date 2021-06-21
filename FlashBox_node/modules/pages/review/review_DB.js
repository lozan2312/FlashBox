const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let Features = async ()=> {
  return await generalDB.DBquery("SELECT * FROM features")
}

let Reviewer = async ()=> {
  return await generalDB.DBquery("SELECT * FROM reviewer_json_post")
}

let ReviewDetails = async ()=> {
  return await generalDB.DBquery("SELECT * FROM `form_items` INNER JOIN `form_list` on `form_items`.`form_list_id`=`form_list`.`Form_List_ID` WHERE `form_list`.`Form_List_ID`=2;")
}
module.exports.ReviewPageJson = async ()=>{
  return JSON.parse('{"Features":'+JSON.stringify(await Features())+',"Reviewer":'+JSON.stringify(await Reviewer())
  +',"ReviewDetails":'+JSON.stringify(await ReviewDetails())+',"Header":'+JSON.stringify(await header.Header())+"}")
}
