const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let signin = async ()=>{
  return await generalDB.DBquery("SELECT * FROM form_items WHERE form_list_id= 3")
}
module.exports.SignInPageJson = async ()=>{
  return JSON.parse('{"Signin":'+JSON.stringify(await signin())+',"Header":'+JSON.stringify(await header.Header())+"}")
}
