const HomeLink = ({ text }) => {
  return (
    <a
      href="#"
      className="border-2 border-primary border-l-32 rounded-xl bg-dark w-full xs:w-11/12 sm:w-4/6 h-10 mb-10 flex link-fill"
    >
      <div className="w-1/12 sm:w-3/12"></div>
      <span className="flex items-center text-md xs:text-lg sm:text-xl font-bold text-light">{text}</span>
    </a>
  );
};

export default HomeLink;
