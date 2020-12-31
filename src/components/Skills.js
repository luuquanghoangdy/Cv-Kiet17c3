import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import apiCaller from './../utils/apiCaller';
export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    }
  }
  componentDidMount() {
    apiCaller('skills', 'GET', null).then(response => {
      this.setState({
        skills: response.data
      })    
  })   
  }
  render() {
    var skills = this.state.skills
    return (
      <section>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col s12 m4 l3">
            <Profile />
          </div>
          <div className="col s12 m8 l9">
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>PROFESSION SKILLS</strong>
            </h6>
            <div className="row mt-top">
              {skills.map(res => (
                 <div className="col s6" key={res.id}>
                 <p>{res.skills}</p>
                 <div className="progress grey lighten-1">
                   <div className="determinate pink lighten-3" style={{width: res.completed}}></div>
                 </div>
               </div>
              ))}
            </div>
          </div>  
        </div>    
        </div>
      </div>
      </div>
      </section>
     
    );
  }
}
