import React, { Component } from 'react'

export default class Org extends Component {
    dropDown = ()=>{
        let displayType = document.getElementsByClassName("pcoded-submenu")[0];
        
        console.log(displayType.style.display)
        if (displayType.style.display === "block"){
            displayType.style.display = "none";
        }
        else{
            displayType.style.display = "block";
            
        }
    }
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
                            <span className="b-title">Organization</span>
                        </a>
                        <a className="mobile-menu" id="mobile-collapse" href="javascript:">
                            <span />
                        </a>
                    </div>
                    <div
                        className="slimScrollDiv"
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: "calc(100vh - 70px)"
                        }}
                    >
                        <div
                            className="navbar-content scroll-div"
                            style={{
                                overflow: "hidden",
                                width: "100%",
                                height: "calc(100vh - 70px)"
                            }}
                        >
                            <ul className="nav pcoded-inner-navbar">
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Navigation</label>
                                </li>
                                <li
                                    data-username="dashboard Default Ecommerce CRM Analytics Crypto Project"
                                    className="nav-item "
                                >
                                    <a href="/org_home/" className="nav-link ">
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
                                    <a onClick={this.dropDown} className="nav-link ">
                                        <span className="pcoded-micon">
                                            <i className="feather icon-box" />
                                        </span>
                                        <span className="pcoded-mtext">Componented People</span>
                                    </a>
                                    <ul className="pcoded-submenu" style={{display:"block"}}>
                                        <li className="">
                                            <a href="/supervisors%20list/True" className="">
                                                Supervisors
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="/devices%20list/True" className="">
                                                Devices
                                            </a>
                                        </li>
                                        <li className="">
                                            <a href="/agents%20list/True" className="">
                                                Agents
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item pcoded-menu-caption">
                                    <label id="css_cs_cursor">Approvals</label>
                                </li>
                                <li
                                    data-username="form elements advance componant validation masking wizard picker select"
                                    className="nav-item "
                                >
                                    <a href="/accept%20request/True" className="nav-link ">
                                        <span className="pcoded-micon">
                                            <i className="feather icon-file-text" />
                                        </span>
                                        <span className="pcoded-mtext">Requests</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="slimScrollBar"
                            style={{
                                background: "rgba(0, 0, 0, 0.5)",
                                width: 5,
                                position: "absolute",
                                top: 0,
                                opacity: "0.4",
                                display: "none",
                                borderRadius: 7,
                                zIndex: 99,
                                right: 1,
                                height: "177.923px"
                            }}
                        />
                        <div
                            className="slimScrollRail"
                            style={{
                                width: 5,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: "none",
                                borderRadius: 7,
                                background: "rgb(51, 51, 51)",
                                opacity: "0.2",
                                zIndex: 90,
                                right: 1
                            }}
                        />
                    </div>
                </div>
            </nav>

        )
    }
}
