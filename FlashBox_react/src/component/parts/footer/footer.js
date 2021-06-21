import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import MenuRightItems from '../../general/menu_top/menuRight/menuRightItems';
import './footer.css'
import ListItems from '../../general/navbar/list_items';
import MenuLeftItems from '../../general/menu_top/menuLeft/menuLeftItems'


class Footer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="footer">
        <MDBFooter className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="8">
              <img src="/img/logo/logoo1.png"/>
                <p className="col-6">
                  We are Courier company that provides fast and reliable package transport.
                </p>
                <MenuRightItems right={this.props.data.MenuRight}/>
              </MDBCol>
              <MDBCol md="4">
                <span>Contact Us :</span>
                <MenuLeftItems left={this.props.data.MenuLeft}/>
              </MDBCol>
            </MDBRow>
              <ListItems data={this.props.data.Navbar}/>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              Copyright &#169; 2021. All rights reserved.
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    )
  }
}

export default Footer;
