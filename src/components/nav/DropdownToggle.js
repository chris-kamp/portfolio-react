import CloseDropdownIcon from "./CloseDropdownIcon";
import OpenDropdownIcon from "./OpenDropdownIcon";

const DropdownToggle = ({toggleProps: {dropdownOpen, closeDropdown, openDropdown}}) => {
  return (
    <div className="flex items-center pr-3">
      {dropdownOpen ? (
        <CloseDropdownIcon handleClick={closeDropdown} />
      ) : (
        <OpenDropdownIcon handleClick={openDropdown} />
      )}
    </div>
  );
};

export default DropdownToggle;
