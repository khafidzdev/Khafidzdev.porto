import React, { useState } from "react";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu mobile

  return (
    <>
      {/* Navbar utama (desktop) */}
      <div className="navbar-container">
        <div className="navbar">
          <a href="#" data-tooltip="Home">
            <VscHome size={24} />
          </a>
          <a href="#" data-tooltip="Archive">
            <VscArchive size={24} />
          </a>
          <a href="#" data-tooltip="Account">
            <VscAccount size={24} />
          </a>
          <a href="#" data-tooltip="Settings">
            <VscSettingsGear size={24} />
          </a>
        </div>
      </div>

      {/* Tombol Toggle Menu Mobile */}
      <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<" : ">"}
      </button>

      {/* Navbar Mobile */}
      <div className={`mobile-menu ${isOpen ? "visible" : ""}`}>
        <a href="#" data-tooltip="Home">
          <VscHome size={24} />
        </a>
        <a href="#" data-tooltip="Archive">
          <VscArchive size={24} />
        </a>
        <a href="#" data-tooltip="Account">
          <VscAccount size={24} />
        </a>
        <a href="#" data-tooltip="Settings">
          <VscSettingsGear size={24} />
        </a>
      </div>
    </>
  );
}

export default Navbar;
