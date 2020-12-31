import React, { Component } from "react";
import apiCaller from './../utils/apiCaller';
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: []
    }
  }
  componentDidMount() {
    apiCaller('careers', 'GET', null).then(response => {
      this.setState({
        careers: response.data
      })    
  })   
  }
  render() {
    var careers = this.state.careers;
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-user-check icon"></i>Career Objective
              </strong>
              <hr />
              <div className="row">
                <div className="content">
                  {careers.map(res => (
                    <p key={res.id}> - {res.content} </p>
                  ))}
                </div>
              </div>
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-user-graduate icon"></i>The skill itself
              </strong>
              <hr />
              <div className="row">
                <div className="">
                  <p> - Group skill.</p>
                  <br></br>
                  <p>
                    - Easily adaptable to new environments.
                  </p>
                </div>
              </div>
            </h6>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-button">
              <strong>
                <i className="fas fa-language icon"></i>Language level
              </strong>
              <hr />
              <div className="row">
                <div className="col s8 m10 l10">
                  <p> - English</p>
                  <br></br>
                </div>
                <div className="col s4 m2 l2">
                  <p>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star "></i>
                  </p>
                  <br></br>
                </div>
              </div>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
