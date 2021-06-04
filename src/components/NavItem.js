const NavItem = ({text}) => {
  return (
    <li className="h-full flex-grow-1 flex-shrink-0 p-2 overflow-hidden hidden sm:block">
      <a
        href="#"
        className="w-full h-full flex items-center justify-center border-b border-transparent hover:border-white"
      >
        {text}
      </a>
    </li>
  );
};

export default NavItem;
