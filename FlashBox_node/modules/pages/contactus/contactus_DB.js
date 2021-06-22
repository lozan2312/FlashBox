const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')


let PersonDetails = async ()=> {
  return await generalDB.DBquery("SELECT * FROM `form_items` INNER JOIN `form_list` on `form_items`.`form_list_id`=`form_list`.`Form_List_ID` WHERE `form_list`.`Form_List_ID`=1;")
}


module.exports.ContactPageJson = async ()=>{
  return JSON.parse('{"PersonDetails":'+JSON.stringify(await PersonDetails())
  +',"Header":'+JSON.stringify(await header.Header())+'}')
}
