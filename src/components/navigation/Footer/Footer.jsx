import { Link } from "react-router-dom";
import { Logo } from "../../../media/icons/iconsData";
import "./footer.css";

function Footer(props) {
  return (
    <footer className="footer-container">
      <div className="footer-flex">
        <div className="footer-1-flex">
          <Link to="/">
            <div className='footer-logo'><Logo /></div>
          </Link>
          <span className="copyright">
            © 2022 Duckdive, All rights reserved
          </span>
        </div>

        <div className="footer-2-flex">
          <div>
            <p>Menu</p>
            <Link to="/">Home</Link>
            <Link to="/beaches">Beaches</Link>
            <Link to="/news">News</Link>
            <Link to="/info">Info</Link>
          </div>
          <div className="social-grid">
            <p>Find us</p>
            <a href="https://github.com/TiJuCo/project-surfapp" target="blank">
              Github
            </a>
            <a href="https://github.com/TiJuCo/project-surfapp" target="blank">
              Linkedin
            </a>
            <a href="https://github.com/TiJuCo/project-surfapp" target="blank">
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-3-flex">
          <div className="social-grid">
            <p>Find us</p>
            <div className="social-icons-grid"></div>
          </div>
        </div>

        <span className="copyright-mobile">
          © 2022 Duckdive, All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
