import ckLogo from "../../assets/logo-60.png";

const Logo = () => {
  return (
    <div className="flex items-center ml-3 sm:ml-12 min-w-max">
      <img
        src={ckLogo}
        alt="CK Logo"
      />
    </div>
  );
};

export default Logo;
