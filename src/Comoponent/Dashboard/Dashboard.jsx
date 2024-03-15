import "./Dashboard.css";
import React, { useState } from "react";
export default function Dashboard() {
  return (
    <>
      <div className="container-fluid bg-white mt-5">
        <div className="row margin_left">
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3">
            <div className="card corner shadow-sm">
              <div className="card-body">
                <div className="card-title card-font">Total Movies</div>
                <div className="card-subtitle my-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-fy6x6d iconify iconify--eva"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g id="iconifyReact2073">
                        <g id="iconifyReact2074">
                          <path
                            id="iconifyReact2075"
                            fill="currentColor"
                            d="M21 7a.78.78 0 0 0 0-.21a.64.64 0 0 0-.05-.17a1.1 1.1 0 0 0-.09-.14a.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71l-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34l4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  &nbsp;&nbsp;
                  <span className="ms-2 num-font">+2.6%</span>
                  <span className="float-right">
                    <i
                      className="fa fa-bar-chart"
                      style={{ color: "green" }}
                    ></i>
                  </span>
                </div>
                <h3 className="card-text ">18,765</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3">
            <div className="card corner shadow-sm">
              <div className="card-body">
                <div className="card-title card-font">Total Watch</div>
                <div className="card-subtitle my-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-fy6x6d iconify iconify--eva"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g id="iconifyReact2073">
                        <g id="iconifyReact2074">
                          <path
                            id="iconifyReact2075"
                            fill="currentColor"
                            d="M21 7a.78.78 0 0 0 0-.21a.64.64 0 0 0-.05-.17a1.1 1.1 0 0 0-.09-.14a.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71l-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34l4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  &nbsp;&nbsp;
                  <span className="ms-2 num-font my-1">+0.2%</span>
                  <span className="float-right">
                    <i
                      className="fa fa-bar-chart"
                      style={{ color: "green" }}
                    ></i>
                  </span>
                </div>
                <h3 className="card-text ">18,765</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-3">
            <div className="card corner shadow-sm">
              <div className="card-body">
                <div className="card-title card-font">Total Download</div>
                <div className="card-subtitle my-1">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="MuiBox-root css-jc110d iconify iconify--eva"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g id="iconifyReact2079">
                        <g id="iconifyReact2080">
                          <path
                            id="iconifyReact2081"
                            fill="currentColor"
                            d="M21 12a1 1 0 0 0-2 0v2.3l-4.24-5a1 1 0 0 0-1.27-.21L9.22 11.7L4.77 6.36a1 1 0 1 0-1.54 1.28l5 6a1 1 0 0 0 1.28.22l4.28-2.57l4 4.71H15a1 1 0 0 0 0 2h5a1.1 1.1 0 0 0 .36-.07l.14-.08a1.19 1.19 0 0 0 .15-.09a.75.75 0 0 0 .14-.17a1.1 1.1 0 0 0 .09-.14a.64.64 0 0 0 .05-.17A.78.78 0 0 0 21 17Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </span>
                  &nbsp;&nbsp;
                  <span className="ms-2 num-font">-0.1%</span>
                  <span className="float-right">
                    <i
                      className="fa fa-bar-chart"
                      style={{ color: "yellow" }}
                    ></i>
                  </span>
                </div>
                <h3 className="card-text ">18,765</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
