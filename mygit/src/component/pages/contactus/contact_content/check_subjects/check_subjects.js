import React from 'react';
import './check_subjects.css';
import ListSubjects from './check_json';

class CheckSubjects extends React.Component{
  render(){
    return(
      <div className="contacth2 col-7">
      <h2 className="col-12 font-weight-bold">Subjects</h2>
    {ListSubjects.map((item,index)=>{
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
