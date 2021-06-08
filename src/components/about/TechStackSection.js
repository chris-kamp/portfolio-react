const TechStackSection = (props) => {
  return (
    <div className="flex flex-wrap justify-between w-11/12 xs:w-10/12 sm:9/12">
      {props.children}
    </div>
  )
}

export default TechStackSection
