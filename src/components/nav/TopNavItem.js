import { NavLink, useLocation } from "react-router-dom";

const TopNavItem = ({ text, destination }) => {
  const location = useLocation();
  const isActive = () => (location.pathname === destination)
  return (
    <li className="flex-shrink-0 h-full px-2 flex-grow-1 block justify-center">
      <NavLink
        to={destination}
        className={isActive() ? "flex items-center justify-center w-full h-full border-b-4 border-primary transform scale-105 pointer-events-none" : "flex items-center justify-center w-full h-full hover:border-b hover:border-light transition-transform transform hover:scale-105"}
        exact={true}
      >
        {text}
      </NavLink>
    </li>
  );
};

export default TopNavItem;
