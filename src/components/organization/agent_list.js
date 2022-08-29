import React from "react";

export default function Agent_list(){
  return (
    <div className="pcoded-wrapper">
      <div className="pcoded-content">
        <div className="pcoded-inner-content">
          <div className="col-xl-24 col-md-12 m-b-30">
            <div className="card Recent-Users">
              <div className="card-header">
                <h5>Agents</h5>
              </div>
              <div className="card-block px-0 py-3">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <tbody>
                      <tr className="unread">
                        <td>
                          <img
                            className="rounded-circle"
                            style={{ width: 40 }}
                            src="/static/assets/images/user/avatar-1.jpg"
                            alt="activity-user"
                          />
                        </td>
                        <td>
                          <h6 className="mb-1">Isabella Christensen</h6>
                          <p className="m-0">Lorem Ipsum is simply…</p>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="label theme-bg2 text-white f-12"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr className="unread">
                        <td>
                          <img
                            className="rounded-circle"
                            style={{ width: 40 }}
                            src="/static/assets/images/user/avatar-2.jpg"
                            alt="activity-user"
                          />
                        </td>
                        <td>
                          <h6 className="mb-1">Mathilde Andersen</h6>
                          <p className="m-0">Lorem Ipsum is simply text of…</p>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="label theme-bg2 text-white f-12"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr className="unread">
                        <td>
                          <img
                            className="rounded-circle"
                            style={{ width: 40 }}
                            src="/static/assets/images/user/avatar-3.jpg"
                            alt="activity-user"
                          />
                        </td>
                        <td>
                          <h6 className="mb-1">Karla Sorensen</h6>
                          <p className="m-0">Lorem Ipsum is simply…</p>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="label theme-bg2 text-white f-12"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr className="unread">
                        <td>
                          <img
                            className="rounded-circle"
                            style={{ width: 40 }}
                            src="/static/assets/images/user/avatar-1.jpg"
                            alt="activity-user"
                          />
                        </td>
                        <td>
                          <h6 className="mb-1">Ida Jorgensen</h6>
                          <p className="m-0">Lorem Ipsum is simply text of…</p>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="label theme-bg2 text-white f-12"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                      <tr className="unread">
                        <td>
                          <img
                            className="rounded-circle"
                            style={{ width: 40 }}
                            src="/static/assets/images/user/avatar-2.jpg"
                            alt="activity-user"
                          />
                        </td>
                        <td>
                          <h6 className="mb-1">Albert Andersen</h6>
                          <p className="m-0">Lorem Ipsum is simply dummy…</p>
                        </td>
                        <td>
                          <a
                            href="#!"
                            className="label theme-bg2 text-white f-12"
                          >
                            Remove
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
