import React from 'react';
import JsonList from '../../general/navbar/jsonList'



class CustomerCare extends React.Component{
  render(){
    return(
      <div className="col-12 text-center customercare">
            <ul className="list-inline">
            {JsonList.map((item)=>{
              return(
                <li className="list-inline-item"><a href={item.url}>{item.name}</a></li>
              )}
            )}
            </ul>
        </div>
    )
  }
}
export default CustomerCare
