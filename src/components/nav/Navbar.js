import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <nav className="flex justify-between pt-2 text-xl font-bold">
      <div className="flex items-center w-32 ml-3 sm:ml-12 min-w-max">
        <img
          src="https://via.placeholder.com/60"
          alt="CK Logo"
          className="rounded-full"
        />
      </div>
      <ul className="flex justify-around flex-auto max-w-2xl tracking-widest lg:max-w-3xl xl:max-w-4xl">
        <NavItem text="HOME" destination="/"/>
        <NavItem text="ABOUT" destination="/about"/>
        <NavItem text="PROJECTS" destination="/projects"/>
        <NavItem text="CONTACT" destination="/contact"/>
      </ul>
    </nav>
  );
};

export default Navbar;
