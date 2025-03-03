import React from "react";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc"; // Import ikon dari react-icons
import "../styles/Navbar.css"; // Import CSS

const Navbar = () => {
  return (
    <div className="dock-container">
      <ul className="dock-menu">
        <li>
          <a href="/" className="dock-item">
            <VscHome size={24} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="dock-item">
            <VscArchive size={24} />
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#about" className="dock-item">
            <VscAccount size={24} />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#settings" className="dock-item">
            <VscSettingsGear size={24} />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
