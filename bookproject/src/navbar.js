/*import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
const Navigation = () => {

  return(
    <div className="navclass">
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
   <div className="container">
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://www.sapnaonline.com/static/images/sapna/logo-black.png"
          height="50"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      </div>
   
   
   <div className="navbar-brand" >Welcome to Sapna Stores</div>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
    </button>
   <div className="collapse navbar-collapse" id="navbarCollapse">

   <ul className="nav navbar-nav ms-auto">


   <li className="nav-item active">
   <div className="nav-link">Home</div>
   </li>

    <li className="nav-item">
   <div className="nav-link" >Cart</div>
   </li>

    <li className="nav-item">
   <div className="nav-link" >Wishlist</div>
  </li>


   <li className="nav-item">
 <div className="nav-link">Login</div>
 </li>
</ul>

 </div>
 </div>
</nav>
</div>

  );
}

export default Navigation;*/
import React from 'react'
import './navbar.css'

class Nav extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render() {
        return (
            <nav className={"App-nav"}>
                <ul>
                   <li className={`App-nav-item ${this.props.activeTab === 1 && 'selected'}`}>
                         <button type="button"onclick="document.getElementById('demo').innerHTML = Date()">Login.</button>
                    </li>
                    <li className={`App-nav-item ${this.props.activeTab === 0 && 'selected'}`}>
                        <a onClick={() => this.props.handleTabChange(0)}>Items</a>
                    </li>

                    <li className={`App-nav-item ${this.props.activeTab === 1 && 'selected'}`}>
                        <a onClick={() => this.props.handleTabChange(1)}>Cart</a>
                    </li>

                </ul>
            </nav>
        )
    }

}
export default Nav;