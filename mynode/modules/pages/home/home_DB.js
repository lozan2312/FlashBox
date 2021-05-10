const express = require('express')
const homecarousel= require('./HomeJson/carousel.json')
const homesteps= require('./HomeJson/steps.json')
const homesuggestion= require('./HomeJson/suggestion.json')
const header=require('../../parts/header/header_controller.js')


let Carousel =()=> {
  return(homecarousel)
}
let Steps =()=> {
  return(homesteps)
}

let Suggestion =()=> {
  return(homesuggestion)
}
let ContentHome=()=>{
  return JSON.parse('{"Steps":'+JSON.stringify(Steps())+',"Suggestion":'+JSON.stringify(Suggestion())
    +',"Carousel":'+JSON.stringify(Carousel())+'}')
}

module.exports.HomePageJson=()=>{
  return JSON.parse('{"Content":'+JSON.stringify(ContentHome())+',"Header":'+JSON.stringify(header.Header())+'}')
}
