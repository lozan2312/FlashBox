const express = require('express')
const signinjson = require('./signinJ.json');
const header=require('../../parts/header/header_controller.js')


let signin=()=>{
  return (signinjson)
}
module.exports.SignInPageJson=()=>{
  return JSON.parse('{"Signin":'+JSON.stringify(signin())+',"Header":'+JSON.stringify(header.Header())+"}")
}
