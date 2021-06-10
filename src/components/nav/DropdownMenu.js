import ModalOverlay from "./ModalOverlay";

const DropdownMenu = () => {
  return (
    <>
      <ul className="fixed z-20 grid w-full grid-cols-1 mt-20 bg-dark">
        <li className="p-2 mx-3 text-center border border-light">HOME</li>
        <li className="p-2 mx-3 text-center border border-light">ABOUT</li>
        <li className="p-2 mx-3 text-center border border-light">PROJECTS</li>
        <li className="p-2 mx-3 text-center border border-light">CONTACT</li>
      </ul>
      <ModalOverlay />
    </>
  );
};

export default DropdownMenu;
