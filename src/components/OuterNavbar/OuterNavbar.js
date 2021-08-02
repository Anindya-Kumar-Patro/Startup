import React from "react";
import "./OuterNavbar.css";

// import star from "../../images/star.png";
// import lens from "../../images/lens.png";

const OuterNavbar = () => {
  return (
    <nav className="outerNav">
      <div className="onehalf">
        <div className="heading1">
          <h1>LOGO</h1>
        </div>
        <div className="dropdown">
          <button>Cities</button>
        </div>
        <div className="searchbtn">
          <input type="text" className="searchinp" />
          <button className="search2">Search</button>
        </div>
      </div>
      <div className="secondhalf">
        <div className="star">
          <i class="fas fa-search iconn"></i>
        </div>
        <div className="loginsec">
          <button>Login</button>
          <button className="lstbtn">Book</button>
        </div>
      </div>
    </nav>
  );
};

export default OuterNavbar;
