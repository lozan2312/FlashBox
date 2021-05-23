import React from 'react';
import './search.css'


class SearchBox extends React.Component{
  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }


  render(){
    return(
      <div className="search">
        <button type="button" class="openBtn" onClick={this.handleShow}><i className="search fas fa-search" aria-hidden="true"></i></button>
        {this.state.isActive ?
          <div id="myOverlay" className="overlay"  style={this.state.style}>
            <div className="overlay-content">
              <form action="/action_page.php">
                <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            </div>
            <a className="closebtn"  onClick={this.handleHide}>×</a>
          </div>
        :
         null
        }

      </div>
    )
  }
}

export default SearchBox
