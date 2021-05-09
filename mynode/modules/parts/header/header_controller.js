const express = require('express')
const HeaderDB = require('./header_DB')



module.exports.Header = (req,res)=>{
  return(HeaderDB.HeaderPages());
}
