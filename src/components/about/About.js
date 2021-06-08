import Navbar from "../nav/Navbar"
import AboutHeading from "./AboutHeading"
import AboutContent from "./AboutContent"

const About = () => {
  return (
    <div className="grid h-screen / grid-rows-2af">
      <Navbar />
      <AboutHeading />
      <AboutContent />
    </div>
  )
}

export default About
