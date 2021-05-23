const menurightJson= require('./header_json/menuRight.json')
const menuLeftJson= require('./header_json/menuLeft.json')
const navbarJson= require('./header_json/navbar.json')
const generalDB = require('../../../general_DB.js')

let MenuLeft = async ()=> {
  return await generalDB.DBquery("SELECT * FROM `menu_items` WHERE Menu_List_ID=1")
}
let MenuRight = async ()=> {
  return await generalDB.DBquery("SELECT * FROM `menu_items` WHERE Menu_List_ID=2")
}

let Navbar = async ()=> {
  return await generalDB.DBquery("SELECT * FROM `menu_items` WHERE Menu_List_ID=3")
}

module.exports.HeaderPages = async()=>{
  return JSON.parse('{"MenuLeft":'+JSON.stringify(await MenuLeft())+',"MenuRight":'+JSON.stringify(await MenuRight())
  +',"Navbar":'+JSON.stringify(await Navbar())+'}')
}
