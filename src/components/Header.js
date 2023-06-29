import React, { useState } from "react";
import { CgDarkMode, CgMenu } from "react-icons/cg";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { RxCross1 } from "react-icons/rx";
export const Header = () => {
  const [shrink, setShrink] = useState("expand");
  const [shrinkLogo, setShrinkLogo] = useState("");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
      setShrink("");
      setShrinkLogo("-shrink");
    } else {
      setShrink("expand");
      setShrinkLogo("");
    }
  });
  // const [isActive, setActive] = useState("");
  const [hidden, setHidden] = useState(1);

  // document.addEventListener('click', (e) => {
  //     // console.log((e))
  //     if (e.target.className.baseVal == 'menu-icon') {
  //         // setHidden(0);
  //     }
  //     else {
  //         setHidden(1);
  //     }
  // }
  // )
  return (
    <div>
      <header>
        <nav className={"header-nav " + shrink}>
          <div className="main-container">
            <div className="header-space">
              <Tooltip title="Karra Suryanarayana Vikrant">
                <div
                  className={"home-logo" + shrinkLogo}
                  style={{ minWidth: "200px" }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <span style={{ color: "#0883c1" }}>KSN</span> Vikrant
                  </Link>
                </div>
              </Tooltip>

              <div className="navbar-menu">
                {/* <a style={{ color: 'black', textDecoration: 'none' }} href="/#publications"> */}
                <div className="navbar-item">
                  <Tooltip title="Publications">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/publications"
                    >
                      <span className="my-text">Publications</span>
                    </Link>
                  </Tooltip>
                </div>
                {/* </a> */}
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/projects"
                >
                  <div className="navbar-item">
                    <Tooltip title="Projects">
                      <span className="my-text">Projects</span>
                    </Tooltip>
                  </div>
                </a>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/experience"
                >
                  <div className="navbar-item">
                    <Tooltip title="Experience">
                      <span className="my-text">Experience</span>
                    </Tooltip>
                  </div>
                </a>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/courses"
                >
                  <div className="navbar-item">
                    <Tooltip title=" Courses">
                      <span className="my-text">Courses</span>
                    </Tooltip>
                  </div>
                </a>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/team"
                >
                  <div className="navbar-item">
                    <Tooltip title="Patents and Copyrights">
                      <span className="my-text">Team</span>
                    </Tooltip>
                  </div>
                </a>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/gallery"
                >
                  <div className="navbar-item">
                    <Tooltip title="Gallery">
                      <span className="my-text">Gallery</span>
                    </Tooltip>
                  </div>
                </a>
                <a
                  style={{ color: "black", textDecoration: "none" }}
                  href="/#contact"
                >
                  <div className="navbar-item">
                    <Tooltip title="Contact">
                      <span className="my-text">Contact</span>
                    </Tooltip>
                  </div>
                </a>
                <div className="navbar-button">
                  <CgDarkMode size={`1.5rem`} className="dark-mode" />
                  <BsLinkedin size={`1.5rem`} className="icons" />
                  <BsTwitter size={`1.5rem`} className="icons" />
                  <CgMenu size={`1.5rem`} className="menu-icon" />
                </div>
              </div>
            </div>
            <div className="navbar-menu-hidden">
              <div className="navbar-button">
                {/* <CgDarkMode size={`1.5rem`} className='menu-icon' /> */}
                <CgMenu
                  size={`1.5rem`}
                  onClick={(e) => setHidden(!hidden)}
                  style={{ cursor: "pointer" }}
                  className="menu-icon"
                />
              </div>
            </div>
          </div>
        </nav>
        {/* <div style={{marginTop:'100px'}}>hi</div> */}
      </header>
      <div style={{ position: "relative", width: "100%" }}>
        {hidden ? (
          <div style={{ display: "none" }}></div>
        ) : (
          <>
            <div
              className="hidden-side-bar"
              style={{
                position: "fixed",
                zIndex: 1,
                height: "100vh",
                background: "white",
                boxShadow: "0px 10px 200px black",
              }}
              id="sideBar"
            >
              <div style={{ float: "right", margin: "10px" }}>
                <RxCross1
                  onClick={(e) => setHidden(1)}
                  style={{ cursor: "pointer" }}
                  size={`1.5rem`}
                />
              </div>
              <ul style={{ marginTop: "10px" }}>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/#publications"
                  >
                    <div className="navbar-item">
                      <Tooltip title="Publications">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/publications"
                        >
                          <span className="my-text">Publications</span>
                        </Link>
                      </Tooltip>
                    </div>
                  </a>
                </li>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/projects"
                  >
                    <div className="navbar-item">
                      <Tooltip title="Projects">
                        <span className="my-text">Projects</span>
                      </Tooltip>
                    </div>
                  </a>
                </li>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/experience"
                  >
                    <div className="navbar-item">
                      <Tooltip title="Experience">
                        <span className="my-text">Experience</span>
                      </Tooltip>
                    </div>
                  </a>
                </li>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/courses"
                  >
                    <div className="navbar-item">
                      <Tooltip title=" Courses">
                        <span className="my-text">Courses</span>
                      </Tooltip>
                    </div>
                  </a>
                </li>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/team"
                  >
                    <div className="navbar-item">
                      <Tooltip title="Team">
                        <span className="my-text">Team</span>
                      </Tooltip>
                    </div>
                  </a>
                </li>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/gallery"
                  >
                    <div className="navbar-item">
                      <Tooltip title="Gallery">
                        <span className="my-text">Gallery</span>
                      </Tooltip>
                    </div>
                  </a>
                </li>
                <li style={{ textDecoration: "none", marginTop: "20px" }}>
                  <a
                    onClick={(e) => setHidden(1)}
                    style={{ color: "black", textDecoration: "none" }}
                    href="/#contact"
                  >
                    <div className="navbar-item">
                      <Tooltip title="Contact">
                        <span className="my-text">Contact</span>
                      </Tooltip>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className='hidden-side' style={{ position: 'fixed',,width:'30%', zIndex: 1, height: '100vh', background: 'blue', boxShadow:'10px 1 0px 10px black' }} id='sideBar' >

                        </div> */}
          </>
        )}
      </div>
    </div>
  );
};
