import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import ScrollReveal from '../components/ScrollReveal/ScrollReveal';


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic repudiandae iste magnam. Placeat qui quisquam ducimus corporis sint explicabo, 
officia nihil magni quis cupiditate, tempore eum perspiciatis voluptas asperiores.
</ScrollReveal>
                
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About