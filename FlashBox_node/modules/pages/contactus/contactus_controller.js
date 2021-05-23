const express = require('express')
const router = express.Router();

const ContactDB = require('./contactus_DB')



module.exports.ContactPage = async (req,res)=>{
  res.json(await ContactDB.ContactPageJson())
}
