import ContactHeading from "./ContactHeading"
import ContactContent from "./ContactContent"
import ScrollToTop from "../utilities/ScrollToTop"


const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <ContactHeading />
        <ContactContent />
      </div>
    </>
  )
}

export default Contact
