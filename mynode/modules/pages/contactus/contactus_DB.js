const express = require('express')
const contactsubject = require('./ContactJson/subjects.json');
const contactdetails = require('./ContactJson/personDetails.json');
const header=require('../../parts/header/header_controller.js')

let Subjects =()=> {
  return(contactsubject)
}
let PersonDetails =()=> {
  return(contactdetails)
}


module.exports.ContactPageJson=()=>{
  return JSON.parse('{"Subjects":'+JSON.stringify(Subjects())+',"PersonDetails":'+JSON.stringify(PersonDetails())
  +',"Header":'+JSON.stringify(header.Header())+'}')
}
