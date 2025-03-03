import { useState } from 'react';
import '../styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import GradientText from "../components/GradientText/GradientText";

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
                   <li><HashLink to="/"><GradientText
  colors={["#D100FF", " #BF00FF", "#D100FF", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Home
</GradientText></HashLink></li>
                   <li><HashLink to="/#portfolio"><GradientText
  colors={["#D100FF", " #BF00FF", "#D100FF", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Portfolio
</GradientText></HashLink></li>
                   <li><HashLink to="/#about"><GradientText
  colors={["#D100FF", " #BF00FF", "#D100FF", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  About
</GradientText></HashLink></li>
                   <li><HashLink to="/experience"><GradientText
  colors={["#D100FF", " #BF00FF", "#D100FF", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Experience
</GradientText></HashLink></li>
                  
               </ul>
               <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum architecto exercitationem quo repudiandae iure dict
                a aut ab beatae, amet soluta saepe adipisci accusamus nam hic laudantium odit, voluptate ratione.</p>
           </div>
       
   </nav></>
    );
}

export default Navbar;
