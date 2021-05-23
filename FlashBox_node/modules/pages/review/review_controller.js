const express = require('express')

const ReviewDB = require('./review_DB')



module.exports.ReviewPage = async (req,res)=>{
  res.json(await ReviewDB.ReviewPageJson())
}
