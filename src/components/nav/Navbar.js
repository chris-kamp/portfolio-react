import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <nav className="flex justify-between h-20 text-xl font-bold text-light font-nunito">
      <div className="flex items-center w-32 ml-3 sm:ml-12 min-w-max">
        <img
          src="https://via.placeholder.com/60"
          alt="CK Logo"
          className="rounded-full"
        />
      </div>
      <ul className="flex justify-around flex-auto max-w-2xl tracking-widest lg:max-w-3xl xl:max-w-4xl">
        <NavItem text="HOME"/>
        <NavItem text="ABOUT"/>
        <NavItem text="PROJECTS"/>
        <NavItem text="CONTACT"/>
      </ul>
    </nav>
  );
};

export default Navbar;
