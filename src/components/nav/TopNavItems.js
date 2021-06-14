import TopNavItem from "./TopNavItem";

const TopNavItems = () => {
  return (
    <ul className="flex justify-around flex-auto max-w-2xl tracking-widest lg:max-w-3xl xl:max-w-4xl">
      <TopNavItem text="HOME" destination="/" />
      <TopNavItem text="ABOUT" destination="/about" />
      <TopNavItem text="PROJECTS" destination="/projects" />
      <TopNavItem text="CONTACT" destination="/contact" />
    </ul>
  );
};

export default TopNavItems;
