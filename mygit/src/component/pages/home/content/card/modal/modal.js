import React from 'react';
import {AiOutlinePlus} from 'react-icons/ai';


class Modal extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div id="modal">
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal"><AiOutlinePlus/></button>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">{this.props.item.head}</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                  </div>
                  <div className="modal-body">
                    <div dangerouslySetInnerHTML={{__html:this.props.item.text}}>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </div>
        </div>
      </div>

    </div>
    )
  }
}
export default Modal
