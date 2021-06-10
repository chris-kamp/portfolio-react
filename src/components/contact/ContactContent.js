import { useEffect } from "react"

const ContactContent = () => {
  const onSubmit = () => {
    return;
  }

  const handleMouseUp = () => {
    document.getElementById("submit").blur()
    document.removeEventListener("mouseup", handleMouseUp)
  }

  const handleButtonPress = (e) => {
    if (e.target.id === "submit") {
      document.addEventListener("mouseup", handleMouseUp)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleButtonPress)
    return () => {
      document.removeEventListener("mousedown", handleButtonPress)
    }
  })

  return (
    <main className="flex flex-col items-center justify-center px-3 sm:px-12">
      <form onSubmit={onSubmit()} className="w-full max-w-5xl p-4 border-2 rounded-lg border-primary md:p-8">
        <div className="mb-4">
          <label htmlFor="name" className="block pl-1 text-sm font-extrabold tracking-wider xs:text-base sm:text-xl">Name: </label>
          <input type="text" name="name" placeholder="Name" className="w-full text-sm border-2 rounded-lg bg-dark border-light focus:border-primary sm:w-4/6 xs:text-base sm:text-xl" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl">Email: </label>
          <input type="text" name="email" placeholder="Email address" className="w-full text-sm border-2 rounded-lg bg-dark border-light focus:border-primary sm:w-4/6 xs:text-base sm:text-xl" />
        </div>
        <div className="">
          <label htmlFor="message" className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl">Message: </label>
          <textarea name="message" rows="10" placeholder="Leave a message..." className="w-full text-sm border-2 rounded-lg bg-dark border-light focus:border-primary xs:text-base sm:text-xl" />
        </div>
        <input type="submit" id="submit" value="SEND" className="w-20 p-1 text-xl font-extrabold tracking-wider rounded-lg shadow outline-none sm:p-2 text-dark bg-primary focus:bg-primary-darker hover:bg-primary-lighter"></input>
      </form>
    </main>
  )
}

export default ContactContent
