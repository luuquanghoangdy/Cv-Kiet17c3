import React, { Component } from 'react';
import ImgProfile from '../images/profile.png';
import { HashLink as Link } from 'react-router-hash-link';
export default class Profile extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img className="activator" src={ImgProfile} alt="avatar" />
            <Link to="/CV/" className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="activator material-icons right">more_vert</i>
            </Link>
          </div>  
          <div style={{textAlign: 'center'}} className="card-content">
            <span className="card-title pink-text">Vo Van Kiet</span>
          </div>

          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Flow me<i className="material-icons right">close</i></span>
            <p className="flex-container">
             <a href="https://www.facebook.com/vovankiet99/" target="blank" > <i className="fab fa-facebook-f blue-text text-darken-4 social-style"></i></a>
             <a href="https://myaccount.google.com/u/1/?utm_source=OGB&tab=wk&utm_medium=act&pli=1" target="blank" > <i className="fab fa-google-plus-g red-text text-darken-4 social-style"></i></a>
             <a href="https://www.instagram.com/vovankiet99/" target="blank" ><i className="fab fa-instagram orange-text text-darken-4 social-style"></i></a>
            </p>
          </div>
        </div>    
     </div>
    );
  }
}

