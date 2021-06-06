import Navbar from "./Navbar"
import HomeBlurb from "./HomeBlurb"
import HomeLinks from "./HomeLinks"

const Home = () => {
  return (
    <div className="h-screen grid grid-rows-2af">
      <Navbar />
      <div className="flex flex-col xl:grid xl:grid-cols-2">
        <HomeBlurb />
        <HomeLinks />
      </div>
    </div>
    
  )
}

export default Home
