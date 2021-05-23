import React from 'react';
import HeaderTransaction from './header_transaction/header_transaction'
import Footer from '../../parts/footer/footer'
import TransactionContent from './transaction_content/transaction_content'
import Mapping from './map/map'

class Transaction extends React.Component{
  constructor() {
   super();
   this.state = { data: [] };
 }

 componentDidMount() {
   fetch('/transaction')
     .then(res => res.json())
     .then(json => this.setState({ data: json }));
 }
  render(){
    if (this.state.data.length==0)
        return (<p>ops</p>);
    return(
      <div>
      <HeaderTransaction header={this.state.data.Header}/>
      <TransactionContent/>
      <Mapping/>
      <Footer  data={this.state.data.Header}/>
      </div>
    )
  }
}
export default Transaction
