import "./ToggleMenu.css";
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png" // Make sure this path is valid
import { Link } from "react-router-dom"; // Use this if using React Router

const ToggleMenu = () => {
  const [isToggleActive, setToggleActive] = useState(false);

  const handleToggle = () => {
    const newToggleState = !isToggleActive;
    setToggleActive(newToggleState);

    if (newToggleState) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "100%";
      document.body.style.overflow = "scroll";
    }

    console.log(newToggleState);
  };

  const wrapperToggleRef = useRef(null);

  const useOutsideHandler = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleActive(false);
          document.body.style.height = "100%";
          document.body.style.overflow = "scroll";
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideHandler(wrapperToggleRef);

  return (
    <div className="toggle-menu">
      <div className="menu-options">
        <a href="/" className="logo">
          <img style={{ marginBottom: "0" }} src={logo} alt="Logo" />
        </a>
        <div
          className={
            isToggleActive ? "hamburger-icon icon-close" : "hamburger-icon"
          }
          ref={wrapperToggleRef}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        className={
          isToggleActive
            ? "toggle-menu-items menu-show"
            : "toggle-menu-items menu-hide"
        }
      >
        <a className="toggle-menu-item" href="/#about">
          About
        </a>
        <a className="toggle-menu-item" href="/#works">
          Works
        </a>
        <a className="toggle-menu-item" href="/#contact">
          Contact
        </a>
        <a className="toggle-menu-item" target="_blank" href="https://dev.to/ayushman">
          Blog
        </a>
      </div>
    </div>
  );
};

export default ToggleMenu;
