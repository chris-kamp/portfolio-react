import DropdownNavItem from "./DropdownNavItem";
import ModalOverlay from "./ModalOverlay";

const DropdownMenu = () => {
  return (
    <>
      <ul className="fixed z-20 grid w-full grid-cols-1 mt-20 bg-dark">
        <DropdownNavItem destination="/" text="HOME" />
        <DropdownNavItem destination="/about" text="ABOUT" />
        <DropdownNavItem destination="/projects" text="PROJECTS" />
        <DropdownNavItem destination="/contact" text="CONTACT" />
      </ul>
      <ModalOverlay />
    </>
  );
};

export default DropdownMenu;
