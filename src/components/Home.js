import Navbar from "./Navbar"

const Home = () => {
  return (
    <div className="h-screen grid grid-rows-2af">
      <Navbar />
      <div className="w-1/2 flex items-center h-3/5">
        <div className="ml-12 mt-16 ">
          <h1 className="font-nunito text-8xl text-iceBlue mb-4">Hi, I'm Chris.</h1>
          <p className="font-nunito text-3xl leading-relaxed text-iceBlue ml-1">I'm a full-stack web developer in training. Until recently, I worked as a lawyer, but my passion for coding got the better of me. I'd love to help you build modern, engaging web applications. You can get in touch with me <a href="#" className="underline">here</a>.</p>
        </div>
      </div>
    </div>
    
  )
}

export default Home
