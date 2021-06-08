const TechStackItem = (props) => {
  return (
    <span className="mt-2 mr-4 text-xs min-w-1/3 sm:min-w-1/4 xs:text-sm sm:text-lg">
      {props.children}
    </span>
  )
}

export default TechStackItem
