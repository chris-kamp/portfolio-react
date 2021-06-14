import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import DropdownToggle from "./DropdownToggle";
import TopNavItems from "./TopNavItems";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const openDropdown = () => {
    window.scrollTo(0, 0);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  
  const isMobile = () => {
    return windowWidth < 640;
  };
  
  useEffect(() => {
    closeDropdown();
  }, [location])
  
  useEffect(() => {
    const updateSize = () => {
      setWindowWidth(window.screen.width);
    };
    const handleResize = () => {
      updateSize();
      if (dropdownOpen && windowWidth >= 640) {
        closeDropdown();
      }
    };
    const handleClick = (e) => {
      if (dropdownOpen && !e.target.classList.contains("dropdownItem")) {
        closeDropdown();
      }
      document.removeEventListener("mousedown", handleClick);
    };
    const handleScroll = (e) => {
      if (dropdownOpen) {
        closeDropdown();
      }
      document.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("resize", handleResize);
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("scroll", handleScroll);
    }

    updateSize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("scroll", handleScroll);
    };
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
