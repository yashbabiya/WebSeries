import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="men">
      <div className="don">
        <span>
          <Link to="/">
            {" "}
            <img
              src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
              height="60px"
              alt="Netflix"
            />
          </Link>
        </span>
        <span>|</span>
        <span>
          <Link to="/Amazon">
            <img
              src="https://download.logo.wine/logo/Prime_Video/Prime_Video-Logo.wine.png"
              height="60px"
              alt="Amazon"
            />
          </Link>
        </span>
      </div>
    </div>
  );
}
export default Menu;
