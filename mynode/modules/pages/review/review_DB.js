const express = require('express')
const revfeatures = require('./ReviewJson/features.json');
const revstars = require('./ReviewJson/stars.json');
const reviewers = require('./ReviewJson/reviewer.json');
const revdetails = require('./ReviewJson/reviewdetails.json');
const header=require('../../parts/header/header_controller.js')


let Features =()=> {
  return(revfeatures)
}

let Reviewer =()=> {
  return(reviewers)
}

let ReviewDetails =()=> {
  return(revdetails)
}
module.exports.ReviewPageJson=()=>{
  return JSON.parse('{"Features":'+JSON.stringify(Features())+',"Reviewer":'+JSON.stringify(Reviewer())
  +',"ReviewDetails":'+JSON.stringify(ReviewDetails())+',"Header":'+JSON.stringify(header.Header())+"}")
}
