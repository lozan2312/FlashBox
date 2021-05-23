const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')

let Subjects = async ()=> {
  return await generalDB.DBquery("SELECT * FROM checklist")
}
let PersonDetails = async ()=> {
  return await generalDB.DBquery("SELECT * FROM form_items WHERE form_list_id= 2")
}


module.exports.ContactPageJson = async ()=>{
  return JSON.parse('{"Subjects":'+JSON.stringify(await Subjects())+',"PersonDetails":'+JSON.stringify(await PersonDetails())
  +',"Header":'+JSON.stringify(await header.Header())+'}')
}
