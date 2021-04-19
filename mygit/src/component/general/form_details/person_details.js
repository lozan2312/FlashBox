import React from 'react';



class Persondetails extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        {this.props.json.map((item,index)=>{
          return(
            <div key={index}>
              <div className="contact form-group mt-5 row">
                <label for={item.for} className="col-2 col-form-label font-weight-bold">{item.value}</label>
                <div className="col-5">
                  <input type={item.type} className="form-control" id={item.id} name={item.name} required/>
                </div>
              </div>
            </div>
            )
          })}
    </div>
    )
  }
}
export default Persondetails
