import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHtml5 } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { section } from 'framer-motion/client';



function Experience() {
    return (
       <section id="experience" className="ex">
        
        <div className="wrapper">
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 "
                        iconStyle={{ background: '#636060', color: '#fff' }}
                        icon={<FaHtml5 />}
                    >
                        <h3 className="vertical-timeline-element-title">Front End Developer</h3>
                        <p>
                        Start diving into the world of IT by learning the basics such as HTML, CSS and Java Script                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022"
                        iconStyle={{ background: '#636060', color: '#fff' }}
                        icon={<FaBootstrap />}
                    >
                        <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                        <p>
                        learning to use the bootstrap ui ux css framework becomes interesting                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2023"
                        iconStyle={{ background: '#636060', color: '#fff' }}
                        icon={<SiPhp />}
                    >
                        <h3 className="vertical-timeline-element-title">Back End Engineer</h3>
                        <p>
                        using the PHP programming language as a basis                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023"
                        iconStyle={{ background: ' #636060', color: '#fff' }}
                        icon={<FaLaravel />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
                        <p>
                        Use the Laravel framework and start creating a website                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - 2024"
                        iconStyle={{ background: '#636060', color: '#fff' }}
                        icon={<DiCodeigniter />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
                        <p>
                        Use the CodeIgniter framework and start creating a website                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024 - Present"
                        iconStyle={{ background: '#636060', color: '#fff' }}
                        icon={< FaReact  />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
                        <p>
                        Now studying React JS to increase your knowledge                     </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        
       </section>
    )
}

export default Experience