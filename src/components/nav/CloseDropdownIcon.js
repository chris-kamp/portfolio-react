import menuClose from "../../assets/close-48.png"

const CloseDropdownIcon = ({handleClick}) => {
  return (
    <>
      <img src={menuClose} alt="Close menu icon" onClick={handleClick}/>
    </>
  )
}

export default CloseDropdownIcon
