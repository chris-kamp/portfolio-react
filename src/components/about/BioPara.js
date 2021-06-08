const BioPara = (props) => {
  return (
    <p className="mb-3 text-sm xs:text-base sm:text-lg leading-tight xs:leading-snug text-light">
      {props.children}
    </p>
  )
}

export default BioPara
