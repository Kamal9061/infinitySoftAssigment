import "./Sidebar.css";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../Assets/officeLogo.svg";

export default function Sidebar() {
  const [isOpen, setIsopen] = useState(true);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <div className="container-fluid">
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-body">
            <ul>
              <div className="sd-header">
                <Link className="m-auto" to="/">
                  <img
                    src={logo}
                    className="m-auto logo-img"
                    height="100px"
                    width="100px"
                  ></img>
                </Link>
              </div>
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <Link className="sd-link" to="/">
                  <span>
                  <i className="fa fa-home"></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">Dashboard</span>
                </Link>
              </li>
              <li className={splitLocation[1] === "movie" ? "active" : ""}>
                <Link className="sd-link" to="/movie">
                  <span>
                  <i className='fa fa-user-friends'></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">Movie List</span>
                </Link>
              </li>
              <li className={splitLocation[1] === "project" ? "active" : ""}>
                <Link className="sd-link" to="/project">
                  <span>
                  <i className='fa fa-user-friends'></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">Project</span>
                </Link>
              </li>
              <li>
                <a className="sd-link">
                  <span>
                    <i className="fa fa-bath"></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">Blog</span>
                </a>
              </li>
              <li>
                <a className="sd-link">
                  <span>
                    <i className="fa fa-archive"></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">File Manager</span>
                </a>
              </li>
              <li>
                <a className="sd-link">
                  <span>
                    <i className="fa fa-audio-description"></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">Mart</span>
                </a>
              </li>
              <li>
                <a className="sd-link">
                  <span>
                    <i className="fa fa-book"></i>
                  </span>
                  &nbsp;&nbsp;
                  <span className="side_content">Chart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
