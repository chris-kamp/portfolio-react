import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <nav className="h-20 text-iceBlue font-nunito font-bold text-xl flex justify-between">
      <div className="flex min-w-max justify-center items-center w-32">
        <img
          src="https://picsum.photos/60/60"
          alt="CK Logo"
          srcset=""
          className="rounded-full"
        />
      </div>
      <ul className="flex justify-around tracking-widest flex-auto max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <NavItem text="HOME"/>
        <NavItem text="ABOUT"/>
        <NavItem text="PROJECTS"/>
        <NavItem text="CONTACT"/>
      </ul>
    </nav>
  );
};

export default Navbar;
