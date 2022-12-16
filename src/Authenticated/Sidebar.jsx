import React from "react";
import img from "../imgs/profile.png";
import { Link } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'

function Sidebar() {
  const click = () => {
    this.style.width = '70px'
  }
  return (
    <div
      className="sidebar mt-5 d-flex flex-column justify-content-center align-items-center position-absolute start-0 top-0"
      style={{ width: "10%" }}
    >
      <Link to='/authenticated/profile'><img src={img} alt="" width="40px" style={{ marginTop: "6rem" }} onClick={click}/></Link>
      <ul className="menu" style={{ marginTop: "6rem" }}>
        <li className="icon" style={{ listStyle: "none" }}>
          <Link to='/authenticated/home'><i class="ri-home-7-line" style={{ fontSize: "20px", 'cursor': 'pointer' }}></i></Link>
        </li>
        <li className="icon mt-4" style={{ listStyle: "none" }}>
          <Link to='/authenticated/notifications'><i class="ri-notification-2-line" style={{ fontSize: "20px" }}><span className="position-relative start-0 translate-middle badge rounded-pill bg-warning" style={{ 'fontSize': "7px", bottom: '10px' }}>3</span></i></Link>
        </li>
        <li className="icon mt-4" style={{ listStyle: "none" }}>
          <Link to='/authenticated/bookmark'><i class="ri-bookmark-3-line" style={{ fontSize: "20px" }}></i></Link>
        </li>
        <li className="icon mt-4" style={{ listStyle: "none" }}>
          <Link to='/authenticated/edit'><i class="ri-file-edit-line" style={{ fontSize: "20px" }}></i></Link>
        </li>
        <li className="icon mt-4" style={{ listStyle: "none" }}>
          <Link to='/authenticated/maqola_yozish'><i class="ri-draft-line" style={{ fontSize: "20px" }}></i></Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
