import React from 'react';

import CardData from '../aboutus/content_about/example'
import RegularCustomer from '../aboutus/content_about/regularCustomer'


class Transaction extends React.Component{
  render(){
    return(
      <div>hiii
      <CardData data={RegularCustomer}/>
      </div>
    )
  }
}
export default Transaction
