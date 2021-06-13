import { Link } from "react-router-dom";
import ckLogo from "../../assets/logo-60.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center ml-3 sm:ml-12 min-w-max">
      <img
        src={ckLogo}
        alt="CK Logo"
      />
    </Link>
  );
};

export default Logo;
