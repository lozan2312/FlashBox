import React from 'react';
import './footer.css';
import CustomerCare from './customerCare';
import IconFooter from './iconFooter'

class Footer extends React.Component {
   render() {
      return (
        <div id="footer" className="container-fluid">
            <IconFooter/>
            <p className="text-center">Flash Box is an Israel Courier company that provides fast and reliable package transport.</p>
            <CustomerCare/>
            <div className="col-12 rights text-center">
              <span>Copyright &#169; 2021. All rights reserved.</span>
            </div>
          </div>
      );
   }
}
export default Footer;
