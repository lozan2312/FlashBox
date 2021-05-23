import React from 'react';
import Button from '../../../general/button/button'


class RegDetails extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <form action="/action_page.php">
        <div className="col-12 collapse show multi-collapse" id="multiCollapseExample1">
         {this.props.data.map((items)=>{
         return(
           <div className="row  mt-5">
             <label for={items.for} class="col-4">{items.value}</label>
             <input className="form-control col-5" type={items.type} placeholder={items.placeholder} required/>
           </div>
         )})}
           <Button type="btn" name="Submit"/>
           </div>
       </form>
      )
  }
}
export default RegDetails
