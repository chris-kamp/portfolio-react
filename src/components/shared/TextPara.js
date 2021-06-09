const TextPara = (props) => {
  return (
    <p className="mb-3 text-sm font-light leading-tight xs:text-base sm:text-xl xs:leading-snug">
      {props.children}
    </p>
  )
}

export default TextPara
