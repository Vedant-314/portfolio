import AboutMe from './AboutMe'
import Banner from './Banner'
import Emails from './Emails'
import Footer from './Footer'
import Header from './Header'
import Project from './Project'
import Skills from './Skills'

function Home() {
  return (
    <>
        <Header/>
        <Banner/>
        <AboutMe/>
        <Skills/>
        <Project/>
        <Emails/>
        <Footer/>
    </>
  )
}

export default Home