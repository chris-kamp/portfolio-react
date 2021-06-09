const CardSection = ({posStart, heading, ...props}) => {
  return (
    <div className={`flex mt-4 ${posStart ? "justify-start" : "justify-end"}`}>
      <div className={`flex flex-col w-full ${posStart || "items-end"}`}>
        <div className="w-11/12 xs:w-10/12 md:w-11/12 xl:w-10/12 mt-2 mb-3 border-b border-primary">
          <h3 className={`font-bold text-sm xs:text-base sm:text-xl tracking-3xwide ${posStart || "text-right"}`}>{heading}</h3>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default CardSection