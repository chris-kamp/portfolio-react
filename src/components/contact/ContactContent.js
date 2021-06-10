const ContactContent = () => {
  const onSubmit = () => {
    return;
  }
  return (
    <main className="flex flex-col justify-center items-center px-3 sm:px-12">
      <form onSubmit={onSubmit()} className="border-2 border-primary rounded-lg p-4 md:p-8 w-full max-w-5xl">
        <div className="mb-4">
          <label htmlFor="name" className="block">Name: </label>
          <input type="text" name="name" placeholder="Name" className="bg-dark rounded-lg border-2 border-light focus:border-primary w-full sm:w-4/6" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block">Email: </label>
          <input type="text" name="email" placeholder="Email address" className="bg-dark rounded-lg border-2 border-light focus:border-primary w-full sm:w-4/6" />
        </div>
        <div className="">
          <label htmlFor="message" className="block">Message: </label>
          <textarea name="message" rows="10" placeholder="Leave a message..." className="bg-dark rounded-lg border-2 border-light focus:border-primary w-full" />
        </div>
      </form>
    </main>
  )
}

export default ContactContent
