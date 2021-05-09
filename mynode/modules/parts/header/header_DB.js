const menurightJson= require('./header_json/menuRight.json')
const menuLeftJson= require('./header_json/menuLeft.json')
const navbarJson= require('./header_json/navbar.json')


let MenuLeft =()=> {
  return(menuLeftJson)
}
let MenuRight =()=> {
  return(menurightJson)
}

let Navbar =()=> {
  return(navbarJson)
}

module.exports.HeaderPages=()=>{
  return JSON.parse('{"MenuLeft":'+JSON.stringify(MenuLeft())+',"MenuRight":'+JSON.stringify(MenuRight())
  +',"Navbar":'+JSON.stringify(Navbar())+'}')
}
