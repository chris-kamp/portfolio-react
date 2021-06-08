import { Link } from "react-router-dom";

const NavItem = ({text, destination}) => {
  return (
    <li className="flex-shrink-0 hidden h-full px-2 overflow-hidden flex-grow-1 sm:block">
      <Link
        to={destination}
        href="#"
        className="flex items-center justify-center w-full h-full border-b border-transparent hover:border-light"
      >
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
