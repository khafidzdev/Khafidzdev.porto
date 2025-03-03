import { portfolioList } from '../data/DataPortfolio'
import GradientText from "../components/GradientText/GradientText";

import { Link } from 'react-router-dom'
import '../styles/Portfolio.css'
function Portfolio() {
    return (
        <section id="portfolio" className="por">
            <div className="wrapper">
            <h3><GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
Portfolio
</GradientText></h3>
                <div className="grid">
                    {
                        portfolioList.map((item) => {
                            return (
                                <div className="item" key={item.id}>
                                    <Link to={`/portfolio/${item.id}`}><img src={item.image} /></Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Portfolio