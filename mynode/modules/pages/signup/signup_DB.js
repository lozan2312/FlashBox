const express = require('express')
const header=require('../../parts/header/header_controller.js')
const regular=require('./SignUpJson/RegDetails.json')
const business=require('./SignUpJson/BusDetails.json')


let RegDetails=()=>{
  return (regular)
}
let BusDetails=()=>{
  return (business)
}

module.exports.SignUpPageJson=()=>{
  return JSON.parse('{"RegDetails":'+JSON.stringify(RegDetails())+',"BusDetails":'+JSON.stringify(BusDetails())
  +',"Header":'+JSON.stringify(header.Header())+"}")
}
