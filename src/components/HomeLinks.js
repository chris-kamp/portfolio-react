import HomeLink from "./HomeLink"

const HomeLinks = () => {
  return (
    <div className="h-4/6 flex flex-col justify-center items-center w-full pt-48">
      <HomeLink text="READ MORE ABOUT ME"/>
      <HomeLink text="SEE MY RECENT PROJECTS"/>
      <HomeLink text="GET IN TOUCH WITH ME"/>
    </div>
  )
}

export default HomeLinks
