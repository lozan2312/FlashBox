const express = require('express')
const router = express.Router();

const ContactDB = require('./contactus_DB')



module.exports.ContactPage = (req,res)=>{
  res.json(ContactDB.ContactPageJson())
}
