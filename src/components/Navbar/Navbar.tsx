import React from "react";
import MenuLinks from "./MenuLinks";
import UserSection from "./UserSection";
import '../Navbar/Navbar.css'

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-padding">
      <div className="container-fluid">

        {/* LOGO */}
        <a className="navbar-brand" href="#">
          <img src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75" alt="Bootstrap" width="170" height="35" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuLinks></MenuLinks>
          <UserSection></UserSection>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;