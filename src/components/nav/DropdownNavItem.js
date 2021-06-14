import { NavLink, useLocation } from "react-router-dom";
const DropdownNavItem = ({text, destination}) => {
  const location = useLocation();
  const isActive = () => (location.pathname === destination)
  return (
    <li className={`p-2 mx-3 text-center border border-light ${isActive() && "bg-primary text-dark pointer-events-none"}`}>
      <NavLink
        to={destination}
        className="dropdownItem w-full inline-block"
      >
        {text}
      </NavLink>
    </li>
  );
};

export default DropdownNavItem;
