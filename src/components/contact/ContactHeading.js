const ContactHeading = () => {
  return (
    <>
      {/* Span with tracking-normal fixes incorrect centering caused by letter spacing */}
      <h1 className="mt-4 mb-6 text-3xl font-bold text-center xs:text-4xl sm:text-5xl tracking-2xwide sm:mt-7 sm:mb-9 lg:mb-12 lg:mt-10">CONTAC<span className="tracking-normal">T</span></h1>
    </>
  )
}

export default ContactHeading
