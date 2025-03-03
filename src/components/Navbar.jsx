import React, { useState } from "react";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu mobile

  return (
    <>
      {/* Navbar utama (desktop) */}
      <div className="navbar-container">
        <div className="navbar">
          <Link to="/" data-tooltip="Home">
            <VscHome size={24} />
          </Link>
       <HashLink to="/#portfolio" data-tooltip="Portfolio">
            <VscArchive size={24} />
          </HashLink>
       <HashLink  to="/#about" data-tooltip="About">
            <VscAccount size={24} />
          </HashLink>
       <Link to="/experience" data-tooltip="Experience">
            <VscSettingsGear size={24} />
          </Link>
        </div>
      </div>

      {/* Tombol Toggle Menu Mobile */}
      <button className="mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<" : ">"}
      </button>

      {/* Navbar Mobile */}
      <div className={`mobile-menu ${isOpen ? "visible" : ""}`}>
      <Link to="/" data-tooltip="Home">
            <VscHome size={24} />
          </Link>
       <HashLink to="/#portfolio" data-tooltip="Portfolio">
            <VscArchive size={24} />
          </HashLink>
       <HashLink  to="/#about" data-tooltip="About">
            <VscAccount size={24} />
          </HashLink>
       <Link to="#
       experience" data-tooltip="Experience">
            <VscSettingsGear size={24} />
          </Link>
      </div>
    </>
  );
}

export default Navbar;
