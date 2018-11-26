import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">JoyNop
            </h1>
                <p className="lead"> Hello World</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">注册</Link>
                <Link to="/login" className="btn btn-lg btn-light">登录</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
