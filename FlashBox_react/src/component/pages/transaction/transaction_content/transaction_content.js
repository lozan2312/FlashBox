import React from 'react';
import './transaction_content.css';
import {Modal, ModalHeader, ModalBody} from 'reactstrap';

class TransactionContent extends React.Component{
  constructor(props){
    super(props)
    this.setState((props) => ({
      price:props.data.price
    }));

      this.state = {
        option:'up to 1kg',
        type: '',
        region: '',
        weight: '',
        price:'27',
        isModalOpen: false};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleChange(event) {
     this.setState({value: event.target.value});
     alert(`You chose ${this.state.selectedOption}.`);
     console.log(this.state.selectedOption);
   }

    getPrice = () => {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { type: "Standard"},
            { region: "north" },
            { weight: "up to 1kg" }
          )};
      fetch('/transaction/LocationPrice',requestOptions)
        .then(res => res.json())
        .then(json =>{ this.setState({data: json})})
        .catch(err => console.error("Error:", err));
      }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

    render(){

      if (!this.props.data){
        return ("oops")
      }
    let Type=(type)=>{
      if(type="Standard"){
      return this.props.data.Weight
      }
      return this.props.data.Quantity
    }

    return(
      <div id="transContent" className=" container-fluid mt-5">
        <section className="pricing py-5 p-5">
        <h1 className="text-center mb-5">Shipment cost</h1>
            <div className="row">
            {this.props.data.DeliveryInfo.map((item,index)=>{
              return(
              <div
              key={index}
              className="col-lg-4 col-12"
              >
                <div className="card mb-5">
                  <div className="card-body">
                    <h4 className="card-title text-muted text-uppercase text-center">{item.title}</h4>
                    <h5 className="text-muted text-center">&#10038; {item.subtitle}</h5>
                    <h6 className="card-price text-center">{item.firstPrice}
                      <span className="period">{item.span}</span>
                    </h6>
                    <ul className="fa-ul">
                      {index !== null && this.props.data.DeliveryInfo[index].text.split(',').map((text,index)=>(
                        <li key={index}>
                          <span className="fa-li">
                          <i className="fas fa-check"></i>
                          </span>
                            {text}
                        </li>
                        ))}
                    </ul>
                  </div>
                  <div className="card-footer">
                  <button className="btn btn-block text-uppercase" data-toggle="modal" data-target="#exampleModal">Continue</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog">

                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Price</h5>
                          <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                          </button>
                        </div>
                          <div class="modal-body">
                              <h6 className="card-price text-center">
                                {this.state.price} ILS
                                <span className="period">/Per package</span>
                              </h6>
                          </div>
                          <div class="form-group mt-3">
                            <form onSubmit={this.formSubmit}>
                            {this.props.data.Region.map((items)=>{
                              return(
                                (items.value=="option1")?
                                <div class="form-check">
                                  <label class={items.cNameLabel} for={items.for}>
                                  <input
                                      defaultChecked
                                      onClick={this.getPrice}
                                      onChange={this.handleChange}
                                      type={items.type}
                                      class={items.cName}
                                      name="optradio"
                                      value={items.value}
                                      />{items.placeholder}
                                  </label>
                                </div>:
                                <div class="form-check">
                                  <label class={items.cNameLabel} for={items.for}>
                                  <input
                                      onClick={this.getPrice}
                                      onChange={this.handleChange}
                                      type={items.type}
                                      class={items.cName}
                                      name="optradio"
                                      value={items.value}
                                      />{items.placeholder}
                                  </label>
                                </div>
                              )
                            })}
                            </form>
                            <select
                            key={index}
                            class="form-control mt-3"
                            id="sel1"
                            onClick={this.getPrice}
                            onChange={this.handleChange}
                            >
                                <option value="0" disabled selected>Select option:</option>
                                  {Type("Standard").map((option,index)=>{
                                    return(
                                      (option.weight=="up to 1kg")?
                                        <option selected="selected">{option.weight}</option>
                                        :
                                        <option>{option.weight}</option>
                                  )})}
                            </select>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
      </div>
    )
  }
}

export default TransactionContent
