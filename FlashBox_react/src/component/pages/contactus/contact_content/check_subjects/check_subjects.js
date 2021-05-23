import React from 'react';
import './check_subjects.css';

class CheckSubjects extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="col-7" id="contactSubject">
      <h2 className="col-12 font-weight-bold">Subjects</h2>
    {this.props.data.map((item,index)=>{
      return(
        <div key={index}>
          <div className="form-check" for={item.for}>
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input"/>
              {item.value}
            </label>
          </div>
        </div>
      )
    })}
    </div>
  )
  }
}
export default CheckSubjects
