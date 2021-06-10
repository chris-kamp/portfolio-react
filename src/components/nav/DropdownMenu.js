import { Link } from "react-router-dom";
import ModalOverlay from "./ModalOverlay";

const DropdownMenu = () => {
  return (
    <>
      <ul className="fixed z-20 grid w-full grid-cols-1 mt-20 bg-dark">
        <li className="p-2 mx-3 text-center border border-light"><Link to="/" className="dropdownItem w-full inline-block">HOME</Link></li>
        <li className="p-2 mx-3 text-center border border-light"><Link to="/about" className="dropdownItem w-full inline-block">ABOUT</Link></li>
        <li className="p-2 mx-3 text-center border border-light"><Link to="/projects" className="dropdownItem w-full inline-block">PROJECTS</Link></li>
        <li className="p-2 mx-3 text-center border border-light"><Link to="/contact" className="dropdownItem w-full inline-block">CONTACT</Link></li>
      </ul>
      <ModalOverlay />
    </>
  );
};

export default DropdownMenu;
