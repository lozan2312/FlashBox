const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')


let RegDetails = async () => {
  return await generalDB.DBquery("SELECT * FROM `form_items` INNER JOIN `form_list` on `form_items`.`form_list_id`=`form_list`.`Form_List_ID` WHERE `form_list`.`Form_List_ID`=5;")
}
let BusDetails = async () => {
  return await generalDB.DBquery("SELECT * FROM `form_items` INNER JOIN `form_list` on `form_items`.`form_list_id`=`form_list`.`Form_List_ID` WHERE `form_list`.`Form_List_ID`=4;")
}

module.exports.SignUpPageJson = async () => {
  return JSON.parse('{"RegDetails":'+JSON.stringify(await RegDetails())+',"BusDetails":'+JSON.stringify(await BusDetails())
  +',"Header":'+JSON.stringify(await header.Header())+"}")
}
