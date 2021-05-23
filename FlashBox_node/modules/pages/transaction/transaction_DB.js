const express = require('express')
const header=require('../../parts/header/header_controller.js')
const generalDB = require('../../../general_DB.js')


module.exports.TransPageJson = async()=>{
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())+'}')
}
