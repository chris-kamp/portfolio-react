import HomeBlurb from "./HomeBlurb";
import HomeLinks from "./HomeLinks";

const Home = () => {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-2">
      <HomeBlurb />
      <HomeLinks />
    </div>
  );
};

export default Home;
