import { useState } from 'react';
import '../styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
    
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
       <> <nav>
       <div className="wrapper n">
           {/* <div className="logo">
               <a href="/">RumahRafif</a>
           </div> */}

           {/* Tombol Hamburger */}
           <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
               <span></span>
               <span></span>
               <span></span>
           </button>
           </div>
           {/* Overlay Menu */}
           <div className={`menu ${menuOpen ? "tampil" : ""}`} onClick={toggleMenu}>
               <ul>
                   <li><HashLink to="/">Home</HashLink></li>
                   <li><HashLink to="/#portfolio">Portfolio</HashLink></li>
                   <li><HashLink to="/#about">About</HashLink></li>
                   <li><Link to="/experience">Experience</Link></li>
               </ul>
               <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum architecto exercitationem quo repudiandae iure dict
                a aut ab beatae, amet soluta saepe adipisci accusamus nam hic laudantium odit, voluptate ratione.</p>
           </div>
       
   </nav></>
    );
}

export default Navbar;
