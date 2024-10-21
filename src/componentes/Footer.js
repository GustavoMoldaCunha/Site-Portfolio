import "./footer.css";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div className="Footer">
      <nav>
        <ul class="navbarfooter">
          <li>
            <Link
              to="https://www.instagram.com/gustavomol_ilustrador/"
              className={
                location.pathname ===
                "https://www.instagram.com/gustavomol_ilustrador/"
                  ? "active"
                  : ""
              }
            >
              <i class="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={location.pathname === "/Galeria" ? "active" : ""}
            >
              <i class="fas fa-envelope"></i>
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/gustavo-mol-da-cunha-539b93231/"
              className={
                location.pathname ===
                "https://www.linkedin.com/in/gustavo-mol-da-cunha-539b93231/"
                  ? "active"
                  : ""
              }
            >
              <i class="fab fa-linkedin-in"></i>
            </Link>
          </li>
        </ul>
        <p className="copyright">
          All Copyrights © {new Date().getFullYear()} Gustavo Mol
        </p>
      </nav>
    </div>
  );
};

export default Footer;
