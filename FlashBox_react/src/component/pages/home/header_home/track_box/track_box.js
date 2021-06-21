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
          <input
            type='text'
            onChange={this.onValueChange}
            className="form-control input-field col-4"
            placeHolder="Tracking ID"
            required
          />
            <button className="btn btn-block text-uppercase" data-toggle="modal" data-target="#tracking">track</button>
            <div class="modal fade" id="tracking" tabindex="-1" role="dialog" aria-labelledby="trackingLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="trackingLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <Tracking data={this.props.data}/>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
