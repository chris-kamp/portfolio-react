const Card = ({heading, first, ...props}) => {
  return (
    <article className={`mx-auto w-full p-3 border-2 rounded-lg border-primary ${first && " md:col-span-2 xl:col-span-1"}`}>
      <h2 className="pb-1 pl-2 mb-4 text-xl font-semibold text-center border-b-2 xs:text-2xl sm:text-3xl tracking-2xwide border-primary">{heading}</h2>
      {props.children}
    </article>
  )
}

export default Card
