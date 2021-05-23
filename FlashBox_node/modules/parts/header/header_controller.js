const express = require('express')
const HeaderDB = require('./header_DB')



module.exports.Header = async (req,res)=>{
  return(await HeaderDB.HeaderPages());
}
