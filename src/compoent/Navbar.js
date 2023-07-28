import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        {isMobile ? (
          <div>
            <button
              className="nav-expand-btn"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <CgMenuRight style={{ color: "white", fontSize: "3rem", marginRight: "1rem" }} />
            </button>
            {isNavOpen && (
              <div className="nav-links-container-mobile">
                <ul
                  className="nav-links nav-links-mobile"
                  onClick={() => setMobile(false)}
                >
                  <li className="nav-item">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="timeline"
                      spy={true}
                      smooth={true}
                      offset={-120}
                      duration={500}
                    >
                      Timeline
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <li className="nav-item">
            <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="timeline"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                Timeline
              </Link>
            </li>
            <li className="nav-item">
            <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact us
              </Link>
            </li>
          </ul>
        )}
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
