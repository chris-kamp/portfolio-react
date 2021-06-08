const TechStackSection = ({posStart, heading, ...props}) => {
  return (
    <div className={`flex mt-4 ${posStart ? "justify-start" : "justify-end"}`}>
      <div className={`flex flex-col w-full ${posStart || "items-end"}`}>
        <div className="w-11/12 mt-2 mb-3 border-b xs:w-10/12 sm:9/12 border-primary">
          <h3 className={`font-bold text-sm xs:text-base sm:text-xl tracking-3xwide ${posStart || "text-right"}`}>{heading}</h3>
        </div>
        <div className="flex flex-wrap justify-between w-11/12 xs:w-10/12 sm:9/12">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default TechStackSection