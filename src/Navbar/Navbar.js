import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

import "./Navbar.css";

export const MobileSidebar = ({ openSidebar }) => {
  return (
    <div
      className={`nav-items-list nav-items-list-mobile ${
        openSidebar && "nav-items-list-mobile-active"
      }`}
    >
      <div className="navbar-item nav-hero">
        <span className="navbar-item-value">Customer Management</span>
      </div>
      <div className="navbar-item">
        <span className="navbar-item-value">Customer List</span>
      </div>
      <div className="navbar-item">
        <span className="navbar-item-value">Groups</span>
      </div>
      <div className="navbar-item">
        <span className="navbar-item-value">Profile</span>
      </div>
    </div>
  );
};

const Navbar = ({ setOpenSidebar }) => {
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-mobile-menu-btn">
        <span onClick={toggleSidebar}>
          <HiMenu />
        </span>
      </div>
      {/* <div className="navbar-item nav-hero-mobile">
        <span className="navbar-item-value">Customer Management</span>
      </div> */}
      <div className="nav-items-list">
        <div className="navbar-item nav-hero">
          <span className="navbar-item-value">Customer Management</span>
        </div>
        <div className="navbar-item">
          <span className="navbar-item-value">Customer List</span>
        </div>
        <div className="navbar-item">
          <span className="navbar-item-value">Groups</span>
        </div>
        <div className="navbar-item">
          <span className="navbar-item-value">Profile</span>
        </div>
      </div>
      <div className="navbar-profile">
        <div className="navbar-profile_details_profile_logo">
          <img
            alt="image"
            src={process.env.PUBLIC_URL + "/assets/profile.jpg"}
          />
        </div>
        <div className="navbar-profile_details_profile_name">John Doe</div>
        <div className="navbar-profile_details_profile_service">
          Super Admin
        </div>
      </div>
    </div>
  );
};

export default Navbar;
