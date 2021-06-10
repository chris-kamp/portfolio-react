import Navbar from "../nav/Navbar"
import ContactHeading from "./ContactHeading"
import ContactContent from "./ContactContent"


const Contact = () => {
  return (
    <div className="grid h-screen grid-rows-2af">
      <Navbar />
      <div>
        <ContactHeading />
        <ContactContent />
      </div>
    </div>
  )
}

export default Contact
