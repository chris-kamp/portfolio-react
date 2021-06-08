const BioPara = (props) => {
  return (
    <p className="mb-3 text-sm leading-tight xs:text-base sm:text-lg xs:leading-snug text-light">
      {props.children}
    </p>
  )
}

export default BioPara
