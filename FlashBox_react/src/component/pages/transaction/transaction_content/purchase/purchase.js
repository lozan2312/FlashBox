import React from 'react';
import './purchase.css'
class Purchase extends React.Component{

   render(){
    return(
      <div class="container" id="purchase">
          <div class="py-5 text-center">
              <h2>Checkout form</h2>
          </div>
          <div class="row">
              <div class="col-md-8 ">
                  <form class="needs-validation" novalidate="">
                      <div class="row">
                          <div class="col-md-6 mb-3">
                              <label for="firstName">First name</label>
                              <input type="text" class="form-control" id="firstName" placeholder="" value="" required=""/>
                              <div class="invalid-feedback"> Valid first name is required. </div>
                          </div>
                          <div class="col-md-6 mb-3">
                              <label for="lastName">Last name</label>
                              <input type="text" class="form-control" id="lastName" placeholder="" value="" required=""/>
                              <div class="invalid-feedback"> Valid last name is required. </div>
                          </div>
                      </div>
                      <div class="mb-3">
                          <label for="username">Username</label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text">@</span>
                              </div>
                              <input type="text" class="form-control" id="username" placeholder="Username" required=""/>
                              <div class="invalid-feedback"> Your username is required. </div>
                          </div>
                      </div>
                      <div class="mb-3">
                          <label for="email">Email <span class="text-muted">(Optional)</span></label>
                          <input type="email" class="form-control" id="email" placeholder="you@example.com"/>
                          <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                      </div>
                      <div class="row">
                          <div class="col-md-4 mb-3">
                              <label for="state">City</label>
                              <select class="custom-select d-block w-100" id="state" required="">
                                  <option value="">Choose...</option>
                                  <option>Haifa</option>
                              </select>
                              <div class="invalid-feedback"> Please provide a valid state. </div>
                          </div>
                          <div class="col-md-3 mb-3">
                              <label for="zip">Zip</label>
                              <input type="text" class="form-control" id="zip" placeholder="" required=""/>
                              <div class="invalid-feedback"> Zip code required. </div>
                          </div>
                      </div>

                      <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="same-address"/>
                          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                      </div>


                      <h4 class="mb-3">Payment</h4>
                      <div class="d-block my-3">
                          <div class="custom-control custom-radio">
                              <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required=""/>
                              <label class="custom-control-label" for="credit">Credit card</label>
                          </div>
                          <div class="custom-control custom-radio">
                              <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required=""/>
                              <label class="custom-control-label" for="paypal">PayPal</label>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6 mb-3">
                              <label for="cc-name">Name on card</label>
                              <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                              <small class="text-muted">Full name as displayed on card</small>
                              <div class="invalid-feedback"> Name on card is required </div>
                          </div>
                          <div class="col-md-6 mb-3">
                              <label for="cc-number">Credit card number</label>
                              <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                              <div class="invalid-feedback"> Credit card number is required </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-3 mb-3">
                              <label for="cc-expiration">Expiration</label>
                              <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
                              <div class="invalid-feedback"> Expiration date required </div>
                          </div>
                          <div class="col-md-3 mb-3">
                              <label for="cc-cvv">CVV</label>
                              <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
                              <div class="invalid-feedback"> Security code required </div>
                          </div>
                      </div>

                      <button class="btn btn-block" type="submit">Continue to checkout</button>
                  </form>
              </div>
          </div>
      </div>
    )
  }
}

export default Purchase
