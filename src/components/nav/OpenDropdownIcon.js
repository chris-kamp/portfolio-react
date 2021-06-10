import menuBars from "../../assets/bars-48.png";

const OpenDropdownIcon = ({handleClick}) => {
  return (
    <>
      <img src={menuBars} alt="Menu icon" onClick={handleClick}/>
    </>
  )
}

export default OpenDropdownIcon
