const express = require('express')
const header=require('../../parts/header/header_controller.js')
const regular=require('./SignUpJson/RegDetails.json')
const business=require('./SignUpJson/BusDetails.json')
const generalDB = require('../../../general_DB.js')


let RegDetails = async () => {
  return await generalDB.DBquery("SELECT * FROM form_items WHERE form_list_id= 5")
}
let BusDetails = async () => {
  return await generalDB.DBquery("SELECT * FROM form_items WHERE form_list_id= 4")
}

module.exports.SignUpPageJson = async () => {
  return JSON.parse('{"RegDetails":'+JSON.stringify(await RegDetails())+',"BusDetails":'+JSON.stringify(await BusDetails())
  +',"Header":'+JSON.stringify(await header.Header())+"}")
}
