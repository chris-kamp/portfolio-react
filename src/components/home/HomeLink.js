import { Link } from "react-router-dom";
const HomeLink = ({ text, destination }) => {
  return (
    <Link
      to={destination}
      className="flex w-full h-10 mb-10 border-2 border-primary border-l-32 rounded-xl bg-dark xs:w-11/12 sm:w-4/6 link-fill"
    >
      <div className="w-1/12 sm:w-3/12"></div>
      <span className="flex items-center font-bold text-md xs:text-lg sm:text-xl text-light">{text}</span>
    </Link>
  );
};

export default HomeLink;
