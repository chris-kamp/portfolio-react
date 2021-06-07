import Navbar from "../nav/Navbar"
import AboutHeading from "./AboutHeading"

const About = () => {
  return (
    <div className="grid h-screen / grid-rows-2af">
      <Navbar />
      <main>
        <AboutHeading />
        <div className="flex flex-col items-center">
          <div className="border-2 border-primary h-96 w-5/6 rounded-lg p-3">
            <h2 className="text-center text-light text-2xl font-semibold tracking-2xwide ml-2">BIO</h2>
            <p className="text-light ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat iusto molestias nemo explicabo est. Corporis, ex? Consequuntur exercitationem eveniet culpa possimus asperiores voluptatibus quaerat eligendi inventore, in reiciendis doloremque ipsam.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
