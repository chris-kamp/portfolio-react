import NavItem from "./NavItem";

const TopNavItems = () => {
  return (
    <ul className="flex justify-around flex-auto max-w-2xl tracking-widest lg:max-w-3xl xl:max-w-4xl">
      <NavItem text="HOME" destination="/" />
      <NavItem text="ABOUT" destination="/about" />
      <NavItem text="PROJECTS" destination="/projects" />
      <NavItem text="CONTACT" destination="/contact" />
    </ul>
  );
};

export default TopNavItems;
