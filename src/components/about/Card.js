const Card = ({heading, ...props}) => {
  return (
    <div className="w-5/6 p-3 border-2 rounded-lg border-primary">
      <h2 className="pb-1 pl-2 mb-4 text-2xl font-semibold text-center border-b-2 text-light tracking-2xwide border-primary">{heading}</h2>
      {props.children}
    </div>
  )
}

export default Card
