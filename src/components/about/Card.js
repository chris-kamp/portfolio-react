const Card = ({heading, ...props}) => {
  return (
    <article className="w-full p-3 mb-6 border-2 rounded-lg border-primary container">
      <h2 className="pb-1 pl-2 mb-4 text-xl xs:text-2xl sm:text-3xl font-semibold text-center border-b-2 text-light tracking-2xwide border-primary">{heading}</h2>
      {props.children}
    </article>
  )
}

export default Card
