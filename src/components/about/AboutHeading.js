const AboutHeading = () => {
  return (
    <>
      {/* Span with tracking-normal removes trailing underline caused by letter spacing */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-center underline text-light tracking-2xwide mb-6">ABOUT M<span className="tracking-normal">E</span></h1>
    </>
  )
}

export default AboutHeading
