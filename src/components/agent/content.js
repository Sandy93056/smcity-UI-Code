import React, { Component } from 'react'

export default class content extends Component {
  render() {
    return (
        <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
          <div className="pcoded-content">
            <div className="pcoded-inner-content">
              {/* [ breadcrumb ] start */}
              {/* [ breadcrumb ] end */}
              <div className="main-body">
                <div className="page-wrapper">
                  {/* [ Main Content ] start */}
                  <div className="row">
                    {/*[ daily sales section ] start*/}
                    <div className="col-md-6 col-xl-4">
                      <div className="card daily-sales">
                        <div className="card-block">
                          <h6 className="mb-4">Dustbins Available volume</h6>
                          <div className="row d-flex align-items-center">
                            <div className="col-9">
                              <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                <i className="feather icon-arrow-up text-c-green f-30 m-r-10" />
                                249.95
                              </h3>
                            </div>
                            <div className="col-3 text-right">
                              <p className="m-b-0">67%</p>
                            </div>
                          </div>
                          <div className="progress m-t-30" style={{ height: 7 }}>
                            <div
                              className="progress-bar progress-c-theme"
                              role="progressbar"
                              style={{ width: "50%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*[ daily sales section ] end*/}
                    {/*[ Monthly  sales section ] starts*/}
                    <div className="col-md-6 col-xl-4">
                      <div className="card Monthly-sales">
                        <div className="card-block">
                          <h6 className="mb-4">
                            Smarttoilets total Available for users
                          </h6>
                          <div className="row d-flex align-items-center">
                            <div className="col-9">
                              <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                                <i className="feather icon-arrow-down text-c-red f-30 m-r-10" />
                                2.942.32
                              </h3>
                            </div>
                            <div className="col-3 text-right">
                              <p className="m-b-0">36%</p>
                            </div>
                          </div>
                          <div className="progress m-t-30" style={{ height: 7 }}>
                            <div
                              className="progress-bar progress-c-theme2"
                              role="progressbar"
                              style={{ width: "35%" }}
                              aria-valuenow={35}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*[ Monthly  sales section ] end*/}
                    {/*[ year  sales section ] starts*/}
                    <div className="col-md-12 col-xl-4">
                      <div className="card yearly-sales">
                        <div className="card-block">
                          <h6 className="mb-4">Waterpoint: Availalb water</h6>
                          <div className="row d-flex align-items-center">
                            <div className="col-9">
                              <h3 className="f-w-300 d-flex align-items-center  m-b-0">
                                <i className="feather icon-arrow-up text-c-green f-30 m-r-10" />
                                8.638.32
                              </h3>
                            </div>
                            <div className="col-3 text-right">
                              <p className="m-b-0">80%</p>
                            </div>
                          </div>
                          <div className="progress m-t-30" style={{ height: 7 }}>
                            <div
                              className="progress-bar progress-c-theme"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow={70}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    {/*[ year  sales section ] end*/}
                    {/*[ Recent Users ] start*/}
                    {/*[ Recent Users ] end*/}
                    {/* [ rating list ] end*/}
                    <div className="col-xl-24 col-md-12 m-b-30">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                          <a
                            className="nav-link active show"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Today
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            This Week
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact-tab"
                            data-toggle="tab"
                            href="#contact"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            All
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-1.jpg"
                                      alt="activity-user"
                                    />
                                    Ida Jorgensen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-green f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-2.jpg"
                                      alt="activity-user"
                                    />
                                    Albert Andersen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-red">Missed</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-red f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-3.jpg"
                                      alt="activity-user"
                                    />
                                    Silje Larsen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-purple">Delayed</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-purple f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-1.jpg"
                                      alt="activity-user"
                                    />
                                    Ida Jorgensen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-green f-10" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade active show"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-2.jpg"
                                      alt="activity-user"
                                    />
                                    Albert Andersen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-red">Missed</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-red f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-1.jpg"
                                      alt="activity-user"
                                    />
                                    Ida Jorgensen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-green f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-1.jpg"
                                      alt="activity-user"
                                    />
                                    Ida Jorgensen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-green f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-3.jpg"
                                      alt="activity-user"
                                    />
                                    Silje Larsen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-purple">Delayed</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-purple f-10" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Activity</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th className="text-right" />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-3.jpg"
                                      alt="activity-user"
                                    />
                                    Silje Larsen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">Dog the quick brown</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">10:23 AM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-purple">Delayed</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-purple f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-1.jpg"
                                      alt="activity-user"
                                    />
                                    Ida Jorgensen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">3:28 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-green f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-2.jpg"
                                      alt="activity-user"
                                    />
                                    Albert Andersen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">Jumps over the lazy</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">2:37 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-red">Missed</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-red f-10" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h6 className="m-0">
                                    <img
                                      className="rounded-circle  m-r-10"
                                      style={{ width: 40 }}
                                      src="/static/assets/images/user/avatar-1.jpg"
                                      alt="activity-user"
                                    />
                                    Ida Jorgensen
                                  </h6>
                                </td>
                                <td>
                                  <h6 className="m-0">The quick brown fox</h6>
                                </td>
                                <td>
                                  <h6 className="m-0">4:28 PM</h6>
                                </td>
                                <td>
                                  <h6 className="m-0 text-c-green">Done</h6>
                                </td>
                                <td className="text-right">
                                  <i className="fas fa-circle text-c-green f-10" />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-xl-12" style={{ margin: "2% 0%" }}>
                        <div className="card">
                          <div className="card-header">
                            <h5>Use of Different Devices over Years</h5>
                          </div>
                          <div className="card-block">
                            <div
                              id="morris-line-chart"
                              className="ChartShadow"
                              style={{ height: 300 }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* [ Main Content ] end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
