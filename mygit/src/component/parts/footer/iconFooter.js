import React from 'react';
import MenuItemRight from '../../general/menu_top/menu_listright'



class IconFooter extends React.Component{
  render(){
    return(
        <div className='iconfooter text-center'>
            <ul className='list-group list-group-horizontal justify-content-center'>
            {MenuItemRight.map((item)=>{
              return(
                  <li className='list-group-item'>
                    <a href="#">
                      <i className={item.icon}></i>
                    </a>
                  </li>
              )}
            )}
            </ul>
          </div>
    )
  }
}
export default IconFooter
