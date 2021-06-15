import ScrollToTop from "../utilities/ScrollToTop";
import HomeBlurb from "./HomeBlurb";
import HomeLinks from "./HomeLinks";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col xl:grid xl:grid-cols-2">
        <HomeBlurb />
        <HomeLinks />
      </div>
    </>
  );
};

export default Home;
