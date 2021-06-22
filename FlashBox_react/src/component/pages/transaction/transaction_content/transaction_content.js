import React from 'react';
import './transaction_content.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Purchase from './purchase/purchase'


class TransactionContent extends React.Component {
  constructor(props) {
    super(props)
    this.setState((props) => ({
      price: props.data.price
    }));

    this.state = {
      type: '',
      region: 'north',
      weight: 'up to 1kg',
      price: '27',
      isModalOpen: false
    };

  }

  getPrice = (event) => {
    let region;
    let weight;
    if (event.target.name === 'optradio') {
      region = event.target.value;
      weight = this.state.weight;
      this.setState({ region });
    } else {
      region = this.state.region;
      weight = event.target.value;
      this.setState({ weight });
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          type: this.state.type,
          region,
          weight
        }
      )
    };
    fetch('/transaction/LocationPrice', requestOptions)
      .then(res => res.json())
      .then(json => { this.setState({ price: json[0].price }) })
      .catch(err => console.error("Error:", err));
  }

  onCardClick(type) {
    this.setState({ type });
  }

  render() {

    if (!this.props.data) {
      return ("oops")
    }
    let Type = (type) => {
      if (type === "Standard") {
        return this.props.data.Weight
      }
      return this.props.data.Quantity
    }

    return (
      <div id="transContent" className=" container-fluid mt-5">
        <section className="pricing py-5 p-5 col-8">
          <h1 className="text-center mb-5">Shipment cost</h1>
          <div className="row">
            {this.props.data.DeliveryInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-6 col-12"
                >
                  <div className="card mb-5">
                    <div className="card-body">
                      <h4 className="card-title text-muted text-uppercase text-center">{item.title}</h4>
                      <h5 className="text-muted text-center">&#10038; {item.subtitle}</h5>
                      <h6 className="card-price text-center">{item.firstPrice}
                        <span className="period">{item.span}</span>
                      </h6>
                      <ul className="fa-ul">
                        {index !== null && this.props.data.DeliveryInfo[index].text.split(',').map((text, index) => (
                          <li key={index}>
                            <span className="fa-li">
                              <i className="fas fa-check"></i>
                            </span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="factor mb-3 font-weight-bold text-center"> &#9733; {item.factor}</span>
                    <div className="card-footer">
                      <button className="btn btn-block text-uppercase" onClick={() => this.onCardClick(item.title)} data-toggle="modal" data-target="#exampleModal">Continue</button>
                      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">

                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Price</h5>
                              <button type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <h6 className="card-price text-center">
                                {this.state.price} ILS
                                <span className="period">/Per package</span>
                              </h6>
                            </div>
                            <div className="form-group mt-3 mr-3 ml-3">
                              <form onSubmit={this.formSubmit}>
                                {this.props.data.Region.map((items) => {
                                  return (
                                    (items.value == "option1") ?
                                      <div className="form-check">
                                        <label className={items.cNameLabel} for={items.for}>
                                          <input
                                            defaultChecked
                                            onClick={this.getPrice}
                                            type={items.type}
                                            className={items.cName}
                                            name="optradio"
                                            value={items.placeholder}
                                          />{items.placeholder}
                                        </label>
                                      </div> :
                                      <div className="form-check">
                                        <label className={items.cNameLabel} for={items.for}>
                                          <input
                                            onClick={this.getPrice}
                                            type={items.type}
                                            className={items.cName}
                                            name="optradio"
                                            value={items.placeholder}
                                          />{items.placeholder}
                                        </label>
                                      </div>
                                  )
                                })}
                              </form>

                              <select
                                key={index}
                                className="form-control mt-3"
                                onChange={this.getPrice}
                              >
                                <option value="0" disabled selected>Select option:</option>
                                {Type(this.state.type).map((option, index) => {
                                  return (
                                    (option.weight === "up to 1kg" || option.quantity === "50 to 100") ?
                                      <option selected="selected">{option.weight || option.quantity}</option>
                                      :
                                      <option>{option.weight || option.quantity}</option>
                                  )
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button className="btn btn-light" data-dismiss="modal">Close</button>
                            <button className="btn btn-dark">Purchase</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
        <Purchase/>
      </div>
    )
  }
}

export default TransactionContent
