const express = require('express')
const generalDB = require('../../../general_DB.js')

let MenuLeft = async ()=> {
  return await generalDB.DBquery("SELECT * FROM menu_items INNER JOIN menu_list on menu_items.Menu_List_ID=menu_list.Menu_List_ID WHERE menu_list.Menu_List_ID=1")
}
let MenuRight = async ()=> {
  return await generalDB.DBquery("SELECT * FROM menu_items INNER JOIN menu_list on menu_items.Menu_List_ID=menu_list.Menu_List_ID WHERE menu_list.Menu_List_ID=2")
}

let Navbar = async ()=> {
  return await generalDB.DBquery("SELECT * FROM menu_items INNER JOIN menu_list on menu_items.Menu_List_ID=menu_list.Menu_List_ID WHERE menu_list.Menu_List_ID=3")
}

module.exports.HeaderPages = async()=>{
  return JSON.parse('{"MenuLeft":'+JSON.stringify(await MenuLeft())+',"MenuRight":'+JSON.stringify(await MenuRight())
  +',"Navbar":'+JSON.stringify(await Navbar())+'}')
}
