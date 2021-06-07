import Navbar from "../nav/Navbar"
import AboutHeading from "./AboutHeading"
import Card from "./Card"
import Bio from "./Bio"

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
        </div>
      </main>
    </div>
  )
}

export default About
