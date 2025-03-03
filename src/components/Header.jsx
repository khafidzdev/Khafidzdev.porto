import { useEffect } from 'react';
import profilePicture from '../assets/profile-picture.png';
import { FaInstagram, FaTiktok, FaTwitter, FaFacebookF } from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect'; // Import library typing effect
import '../styles/Header.css';
import BlurText from "../components/BlurText/BlurText";
import TextPressure from '../components/TextPressure/TextPressure';
import PixelTransition from '../components/PixelTransition/PixelTransition';
function Header() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
      };
      
    useEffect(() => {
        const createParticles = (e) => {
            for (let i = 0; i < 3; i++) {
                const particle = document.createElement("span");
                particle.className = "particle";
                document.body.appendChild(particle);

                const color = "rgba(138, 43, 226, 0.8)";
                particle.style.background = color;
                particle.style.boxShadow = `0 0 15px ${color}`;

                const size = Math.random() * 20 + 10;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;

                const offsetX = (Math.random() - 0.5) * 100;
                const offsetY = (Math.random() - 0.5) * 100;
                particle.style.left = `${e.pageX + offsetX}px`;
                particle.style.top = `${e.pageY + offsetY}px`;

                particle.style.animation = `fadeUp 1.5s ease-out forwards`;

                setTimeout(() => {
                    particle.remove();
                }, 1500);
            }
        };

        document.addEventListener("mousemove", createParticles);
        return () => document.removeEventListener("mousemove", createParticles);
    }, []);

    return (
        <header>
            <div className="header-jumbotron">
            <PixelTransition
  firstContent={
    <img
      src={profilePicture}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#000"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" , backgroundColor: "#000"}}>Full Stack Developer</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>                <div style={{position: 'relative', height: '100px'}}>
  <TextPressure
    text="Khafidz Rizziq Alhuda"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={100}
  />
</div>
                {/* <p>Programmer - Content Creator - Researcher</p> */}
                <BlurText
  text="Programmer - Content Creator - Researcher"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>
                <div className='socialMedia'>
                    <a href=''><FaInstagram /></a>
                    <a href=''><FaTiktok /></a>
                    <a href=''><FaTwitter /></a>
                    <a href=''><FaFacebookF /></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
