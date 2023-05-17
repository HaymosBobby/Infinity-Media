import {
  FacebookOutlined,
  Instagram,
  Twitter,
  Menu,
  Close,
} from "@mui/icons-material";

import { useState } from "react";
import { Link } from "react-router-dom";

// icons
import ilogo from "../img/ilogo.png";

const NavBar = () => {
  const [opened, setOpened] = useState(false);

  window.onscroll = () => {
    
      window.scrollY > 100
        ? document.querySelector(".navbar").classList.add("sticky")
        : document.querySelector(".navbar").classList.remove("sticky");

        setOpened(false)

        document
        .querySelector(".mobile_navigations")
        .classList.remove("display_mobile_nav")
  };

  const displayMobileNav = () => {
    setOpened(!opened);
    opened
      ? document
          .querySelector(".mobile_navigations")
          .classList.remove("display_mobile_nav")
      : document
          .querySelector(".mobile_navigations")
          .classList.add("display_mobile_nav");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={ilogo} alt="Infinity Media" />
          </Link>
        </div>

        <div className="navigations">
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

        <div className="socials">
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

        <div className="mobile_navigator">
          <div className="mobile_container">
            <div onClick={displayMobileNav}>
              {opened ? <Close className="icon" /> : <Menu className="icon" />}
            </div>

            <div className="mobile_navigations">
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
              <div className="mobile_socials">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
