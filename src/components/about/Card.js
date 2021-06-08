const Card = ({heading, middle, ...props}) => {
  return (
    <article className={`w-full max-w-2xl lg:max-w-none lg:ml-4 p-3 ${middle && "lg:mx-6 xl:mx-6"} xl:mx-0 mb-6 border-2 rounded-lg border-primary lg:h-full xl:mb-0`}>
      <h2 className="pb-1 pl-2 mb-4 text-xl font-semibold text-center border-b-2 xs:text-2xl sm:text-3xl tracking-2xwide border-primary">{heading}</h2>
      {props.children}
    </article>
  )
}

export default Card
