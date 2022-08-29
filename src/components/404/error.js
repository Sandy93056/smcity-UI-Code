import React, { Component } from 'react'

export default class error extends Component {
  render() {
    return (
        <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather x-circle" />
              </div>
              <h3 className="mb-4">Error 404</h3>
              <br />
              <span className="mb-0 text-muted">
                Page not found - <a href="/">Home</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
