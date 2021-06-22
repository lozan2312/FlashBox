import React from 'react';
import './track_box.css';
import Tracking from '../../../../general/tracking/tracking'

class TrackBox extends React.Component {
  constructor(props) {
    super(props)

    this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
    }
    onSiteChanged(e) {
     this.setState({
       site: e.currentTarget.value
       });
    }

    onValueChange(event) {
      this.setState({
        selectedOption: event.target.value
      });
    }
    formSubmit(event) {
      event.preventDefault();
      alert(`You chose ${this.state.selectedOption}.`);

    }
  render() {
    return (
      <div className="trackbox">
        <form method="post" action="/tracking" onSubmit={this.formSubmit}>
          <h3 className="col-12 text-center font-weight-bolder">Quick Tracking</h3>
          <div className="form-inline justify-content-center mt-4">
          <input type='text' onChange={this.onValueChange} className="form-control input-field col-4" placeHolder="Tracking ID" required/>
            <button className="btn btn-block text-uppercase" data-toggle="modal" data-target="#tracking">track</button>
            <div className="modal fade" id="tracking" tabindex="-1" role="dialog" aria-labelledby="trackingLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content ">
                  <div className="modal-header">
                    <h5 className="modal-title font-weight-bold pt-2" id="trackingLabel">Track Your Package</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Tracking data={this.props.data}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TrackBox
