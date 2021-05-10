const express = require('express')


const TransactionDB = require('./transaction_DB')


module.exports.TransactionPage = (req,res)=>{
  res.json(TransactionDB.TransPageJson())
}
