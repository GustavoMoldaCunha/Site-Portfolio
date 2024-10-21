import React from "react";
import "./footer.css";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  return (
    <div className="Banner">
      <nav>
        <ul class="navbar">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Galeria"
              className={location.pathname === "/Galeria" ? "active" : ""}
            >
              Galeria
            </Link>
          </li>
          <li>
            <Link
              to="/Sobre"
              className={location.pathname === "/Sobre" ? "active" : ""}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to="/Loja"
              className={location.pathname === "/Loja" ? "active" : ""}
            >
              Loja
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Banner;
