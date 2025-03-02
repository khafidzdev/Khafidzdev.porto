import { useEffect } from 'react';
import profilePicture from '../assets/profile-picture.png';
import { FaInstagram, FaTiktok, FaTwitter, FaFacebookF } from "react-icons/fa";
import ReactTypingEffect from 'react-typing-effect'; // Import library typing effect
import '../styles/Header.css';

function Header() {
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
                <img src={profilePicture} alt="Profile" />
                <h3>
                    <ReactTypingEffect
                        text={["Khafidz Rizziq Alhuda"]}
                        speed={100} // Kecepatan mengetik
                        eraseDelay={1500} // Delay sebelum menghapus teks
                        cursor={'|'}
                    />
                </h3>
                <p>Programmer - Content Creator - Researcher</p>
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
