import React, { useState, useEffect } from "react";
import "../Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.clipartmax.com/png/middle/215-2154144_transparent-background-netflix-logo.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://p7.hiclipart.com/preview/980/304/8/computer-icons-user-profile-avatar.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
