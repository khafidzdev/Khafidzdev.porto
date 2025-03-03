import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Experience from '../components/Experience'
import Portfolio from '../components/Portfolio'
import About from '../components/About'
import Footer from '../components/Footer'
function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Experience/>
            <Portfolio />
            <Footer />
        </>
    )
}

export default Home