import React from 'react';
import './track_box.css';
import Button from '../../../../general/button/button'


class TrackBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <div className="trackbox">
        <form>
          <h3 className="col-12 text-center font-weight-bolder">Quick Tracking</h3>
          <div className="form-inline justify-content-center mt-4">
          <input
            type='text'
            onChange={this.myChangeHandler}
            className="form-control input-field col-4"
            placeHolder="Tracking ID"
          />
          <Button name="Tracking"/>
          </div>
        </form>
      </div>
    );
  }
}

export default TrackBox
