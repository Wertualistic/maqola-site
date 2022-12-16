import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <Container className="w-100 p-2 mt-2">
        <h1 onClick={() => navigate('/authenticated/home')} style={{cursor: 'pointer'}}>Maqola <span className="span">Beta</span></h1>
      </Container>
      <hr />
    </div>
  );
}

export default Navbar;
