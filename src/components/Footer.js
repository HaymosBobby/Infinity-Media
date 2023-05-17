import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
import { Link } from "react-router-dom";

// icons
import ilogo from "../img/ilogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo itm">
          <Link to="/">
            <img src={ilogo} alt="Infinity Media" />
            <h2>Infinity Media</h2>
          </Link>
        </div>
        <div className="f_nav itm">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/blogs">
              <li>Blogs</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/programs">
              <li>Programs</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="f_nav itm">
          <ul>
            <Link to="#">
              <li>lorem1</li>
            </Link>
            <Link to="#">
              <li>lorem2</li>
            </Link>
            <Link to="#">
              <li>lorem3</li>
            </Link>
            <Link to="#">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="f_socials">
        <Link to="#" className="social">
          <FacebookOutlined />
        </Link>
        <Link to="#" className="social">
          <Instagram />
        </Link>
        <Link to="#" className="social">
          <Twitter />
        </Link>
      </div>
      <div>
        <p>2022 Copyright &copy; Infinity Media. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
