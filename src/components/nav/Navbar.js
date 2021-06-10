import { useState, useEffect } from "react";
import DropdownToggle from "./DropdownToggle";
import TopNavItems from "./TopNavItems";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const isMobile = () => {
    return windowWidth < 640;
  };

  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.screen.width);
    }
    const handleResize = () => {
      updateSize();
      if (dropdownOpen && windowWidth >= 640) {
        closeDropdown();
        console.log("Test")
      }
    };
    const handleClick = (e) => {
      if(dropdownOpen && !(e.target.classList.contains("dropdownItem"))) {
        closeDropdown();
      }
      document.removeEventListener("mousedown", handleClick);
    }
    window.addEventListener("resize", handleResize);
    if(dropdownOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    updateSize();
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClick);
    }
  }, [dropdownOpen, windowWidth]);



  return (
    <>
      <nav className="flex justify-between h-16 pt-2 text-xl font-bold">
        <Logo />
        {isMobile() ? (
          <DropdownToggle
            toggleProps={{ dropdownOpen, openDropdown, closeDropdown }}
          />
        ) : (
          <TopNavItems />
        )}
      </nav>
      {isMobile() && dropdownOpen && <DropdownMenu />}
    </>
  );
};

export default Navbar;
