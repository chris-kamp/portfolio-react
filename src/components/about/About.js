import Navbar from "../nav/Navbar"
import AboutHeading from "./AboutHeading"
import Card from "./Card"
import Bio from "./Bio"
import TechStack from "./TechStack"

const About = () => {
  return (
    <div className="grid h-screen / grid-rows-2af">
      <Navbar />
      <main>
        <AboutHeading />
        <div className="flex flex-col items-center">
          <Card heading="BIO">
            <Bio />
          </Card>
          <Card heading="TECH STACK">
            <TechStack />
          </Card>
        </div>
      </main>
    </div>
  )
}

export default About
