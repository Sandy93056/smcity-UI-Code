import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="pcoded-navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand header-logo">
            <a
              target="_blank"
              href="https://appseed.us/admin-dashboards/django-dashboard-dattaable"
              className="b-brand"
            >
              <div className="b-bg">
                <i className="feather icon-trending-up" />
              </div>
              <span className="b-title">Supervisor</span>
            </a>
            <a className="mobile-menu" id="mobile-collapse" href="javascript:">
              <span />
            </a>
          </div>
          <div className="navbar-content scroll-div">
            <ul className="nav pcoded-inner-navbar">
              <li className="nav-item pcoded-menu-caption">
                <label>Navigation</label>
              </li>
              <li
                data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                className="nav-item "
              >
                <a href="/home1/" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-home" />
                  </span>
                  <span className="pcoded-mtext">Dashboard</span>
                </a>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>Connections</label>
              </li>
              <li
                data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds"
                className="nav-item pcoded-hasmenu"
              >
                <a href="javascript:" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-box" />
                  </span>
                  <span className="pcoded-mtext">Componented People</span>
                </a>
                <ul className="pcoded-submenu">
                  <li className="">
                    <a href="/devices%20list/False" className="">
                      Devices
                    </a>
                  </li>
                  <li className="">
                    <a href="/agents%20list/False" className="">
                      Agents
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item pcoded-menu-caption">
                <label>Approvals</label>
              </li>
              <li
                data-username="form elements advance componant validation masking wizard picker select"
                className="nav-item "
              >
                <a href="/send%20request/False" className="nav-link ">
                  <span className="pcoded-micon">
                    <i className="feather icon-file-text" />
                  </span>
                  <span className="pcoded-mtext">Send Requests</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    )
  }
}
