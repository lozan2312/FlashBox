const express = require('express')

const ReviewDB = require('./review_DB')



module.exports.ReviewPage = (req,res)=>{
  res.json(ReviewDB.ReviewPageJson())
}
