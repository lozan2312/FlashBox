const express = require('express')
const TransactionDB = require('./transaction_DB')


module.exports.TransactionPage = async(req,res)=>{
  res.json(await TransactionDB.TransPageJson())
}
