const express = require('express')
const header=require('../../parts/header/header_controller.js')

module.exports.TransPageJson=()=>{
  return JSON.parse('{"Header":'+JSON.stringify(header.Header())+'}')
}
