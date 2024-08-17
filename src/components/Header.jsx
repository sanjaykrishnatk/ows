import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/signup");
  };
  return (
    <Navbar expand="lg" className="bg-body-transparent navbar-dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "125px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-md-auto d-flex align-items-center w-50 justify-content-evenly">
            <button
              href="#home"
              className="btn fw-bold fs-5"
              style={{ color: "#FFFFFFBF" }}
            >
              HOME
            </button>
            <button
              className="btn fw-bold fs-5"
              style={{ color: "#FFFFFFBF" }}
              onClick={handleRedirect}
            >
              SHOP
            </button>
            <a
              href="#about"
              className="btn fw-bold fs-5"
              style={{ color: "#FFFFFFBF" }}
            >
              ABOUT US
            </a>
            <button
              href="#link"
              className="btn fw-bold fs-5"
              style={{ color: "#FFFFFFBF" }}
              onClick={handleRedirect}
            >
              SIGN UP
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
