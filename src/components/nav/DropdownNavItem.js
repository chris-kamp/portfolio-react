import { NavLink, useLocation } from "react-router-dom";
const DropdownNavItem = ({ text, destination }) => {
  const location = useLocation();
  const isActive = () => location.pathname === destination;
  return (
    <li
      className={`dropdownItem mx-3 text-center border border-light text-2xl font-extrabold h-20 flex items-center ${
        isActive() && "bg-primary text-dark"
      }`}
    >
      {isActive() ? (
        <span className="inline-block w-full dropdownItem">{text}</span>
      ) : (
        <NavLink to={destination} className="inline-block w-full dropdownItem">
          {text}
        </NavLink>
      )}
    </li>
  );
};

export default DropdownNavItem;
