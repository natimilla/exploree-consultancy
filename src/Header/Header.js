import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import LogoIcon from "./../logo.svg";
import { HashLink as Link } from "react-router-hash-link";
import menu from "./../menuIcon.svg";
import cancelIcon from "./../cancelIcon.svg";
import { useState, useEffect } from "react";

function Header() {
  const [iconChange, setIconChange] = useState(false);
  const [display, setDisplay] = useState();
  const IconChangeHandler = () => {
    setIconChange((prev) => !prev);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    // Add event listener to update state on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      if (isMobile && iconChange) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    }
    if (!isMobile) {
      setDisplay(true);
    }
  }, [iconChange, isMobile]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
      <img
          src={menu}
          className={classes.menuIcon}
          alt="menu icon"
          onClick={IconChangeHandler}
        />
        <h1>
          <img src={LogoIcon} className={classes.logoIcon} alt="Logo Icon" />{" "}
          Exploree <br />
          <span className={classes.colorVariant}> Consultancy</span>
        </h1>
        
        {display && (
          <div className={classes.nav}>
            <img
              src={cancelIcon}
              className={classes.cancelIcon}
              alt="Logo Icon"
              onClick={IconChangeHandler}
            />
            <NavLink
              activeClassName={classes.activeClass}
              exact
              to="/"
              onClick={IconChangeHandler}
            >
              <h>Home</h>
            </NavLink>
            <div>
              <NavLink
                activeClassName={classes.activeClass}
                to="/About"
                onClick={IconChangeHandler}
              >
                <h> About us</h>
              </NavLink>
            </div>

            <Link to="/#services" onClick={IconChangeHandler}>
              <h>Services</h>
            </Link>
            <NavLink
              activeClassName={classes.activeClass}
              to="/country"
              onClick={IconChangeHandler}
            >
              <h>Country's</h>
            </NavLink>
            <NavLink
              activeClassName={classes.activeClass}
              to="/work_with_us"
              onClick={IconChangeHandler}
            >
              {" "}
              <h>Work with us</h>
            </NavLink>
            <Link to="/#contact" onClick={IconChangeHandler}>
              <h>Contact Us</h>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;
