import { useState, useEffect } from "react"; // Tambahkan impor React Hooks
import '../styles/About.css';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import GitHubCalendar from 'react-github-calendar';
import { RiTailwindCssFill } from "react-icons/ri";
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
function About() {
    const [githubProfile, setGithubProfile] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        fetch("https://api.github.com/users/khafidzdev")
            .then(response => response.json())
            .then(data => setGithubProfile(data))
            .catch(error => console.error("Error fetching GitHub profile:", error));
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="about" className="ab">
            <div className='wrapper'>
                <h3>About</h3>
                <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={1}
  blurStrength={5}
>
                    I am Khafidz Rizziq Alhuda, a passionate Full Stack Developer specializing in CodeIgniter and Laravel, 
                    currently enhancing my expertise by diving into React. My journey in web development has been driven by a 
                    deep curiosity and a commitment to building scalable, high-performance applications that provide seamless 
                    user experiences. As a freelance developer at Yuhlez Software House, I have had the opportunity to work on
                    diverse projects, collaborating with clients to transform their ideas into fully functional and aesthetically 
                    pleasing digital solutions. With a strong foundation in both front-end and back-end development, I am adept at 
                    crafting intuitive user interfaces while ensuring robust and efficient server-side logic.
</ScrollReveal>
             
    <h2 style={{color: "white"}}> GitHub Activity </h2>
                {/* Kontainer GitHub */}
                <div className="github-container">
                    {/* Profil GitHub (Kiri) */}
                    <div className="github-profile">
                        {githubProfile ? (
                            <>
                                <img
                                    src={githubProfile.avatar_url}
                                    alt="GitHub Profile"
                                    className="github-avatar"
                                />
                                <p className="github-username">@{githubProfile.login}</p>
                            </>
                        ) : (
                            <p>Loading GitHub Profile...</p> 
                        )}
                    </div>

                    <div className="github-calendar-section">
                        <GitHubCalendar
                            username="novanjunaedi"
                            year={2025}
                            fullYear={true}
                            hideTotalCount={true}  
                            hideColorLegend={true}
                            blockSize={12}
                            blockMargin={4}
                            fontSize={14}
                        />
                    </div>
                </div>


            </div>
            
        </section>
    );
}

export default About;
