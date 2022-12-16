import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  return (
    <Container className="navv">
      <div className="nav_brand">
        <h1>Maqola <span className="span">Beta</span></h1>
      </div>
      {toggle ? (
        <div className="all alll">
          <div className="search_bar">
            <input
              type="search"
              placeholder="Izlash..."
              className="search_input"
              aria-label="Search"
            />
            <i className="fas fa-search"></i>
          </div>
          <div className="menu">
            <li>
              <a href="/#">Bosh sahifa</a>
            </li>
            <li>
              <a href="/#">Yozish</a>
            </li>
            <li>
              <a href="/#">Kirish</a>
            </li>
          </div>
          <div className="auth">
            <Link to='/login'>
              <button>Ro'yxatdan o'tish</button>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="notifications">
        <i className="fa-solid fa-bell">
          <span>1</span>
        </i>
      </div>
      <div className="burger_menu" onClick={() => setToggle(!toggle)}>
        <i className="fas fa-bars"></i>
      </div>
    </Container>
  );
}

export default Navbar;
