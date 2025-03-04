import profilePicture from '../assets/profile-picture.png'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import '../styles/Header.css'
import BlurText from "../components/BlurText/BlurText";
import GlitchText from '../components/GlitchText/GlitchText';
function Header() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
    return (
        <header>
            <div className="header-jumbotron">
                {/* <img src={profilePicture} /> */}
                <GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
Khafidz 
Rizziq 
Alhuda
</GlitchText>
<BlurText
  text="Programmer - Full Stack - Researcher"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
                {/* <p>Programmer - Content Creator - Researcher</p> */}
                {/* <div className='socialMedia'>
                    <a href=''><FaInstagram /></a>
                    <a href=''><FaTiktok /></a>
                    <a href=''><FaTwitter /></a>
                    <a href=''><FaFacebookF /></a>
                </div> */}
            </div>
        </header>
    )
}

export default Header