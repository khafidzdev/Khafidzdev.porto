import React, { useState } from "react";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  return (
    <>
      {/* Navbar utama (desktop) */}
      <div className="navbar-container">
        <div className="navbar">
          <a href="#"><VscHome size={24} /></a>
          <a href="#"><VscArchive size={24} /></a>
          <a href="#"><VscAccount size={24} /></a>
          <a href="#"><VscSettingsGear size={24} /></a>
        </div>
      </div>

      {/* Tombol Toggle Menu Mobile */}
      <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<" : ">"}
      </button>

      {/* Navbar Mobile */}
      <div className={`mobile-menu ${isOpen ? "visible" : "hidden"}`}>
        <a href="#"><VscHome size={24} className="icon" /></a>
        <a href="#"><VscArchive size={24} className="icon" /></a>
        <a href="#"><VscAccount size={24} className="icon" /></a>
        <a href="#"><VscSettingsGear size={24} className="icon" /></a>
      </div>
    </>
  );
}

export default Navbar;
