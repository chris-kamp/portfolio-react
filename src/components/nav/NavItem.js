const NavItem = ({text}) => {
  return (
    <li className="flex-shrink-0 hidden h-full p-2 overflow-hidden flex-grow-1 sm:block">
      <a
        href="#"
        className="flex items-center justify-center w-full h-full border-b border-transparent hover:border-white"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
