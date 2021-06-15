import AboutHeading from "./AboutHeading"
import AboutContent from "./AboutContent"
import ScrollToTop from "../utilities/ScrollToTop"

const About = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <AboutHeading />
        <AboutContent />
      </div>
    </>
  )
}

export default About
