import { useEffect } from "react"
import { Formik } from 'formik';

const ContactContent = () => {

  // Remove active effect from submit button when mouse released outside button
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
     <Formik
       initialValues={{ name: '', email: '', message: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Please provide a contact email';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.name) {
           errors.name = 'Please leave your name';
         }
         if (!values.message) {
           errors.message = 'Please include your message';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting
       }) => (
         <form onSubmit={handleSubmit} className="w-full max-w-5xl p-4 border-2 rounded-lg border-primary md:p-8">
           <div className="mb-4">
             <label htmlFor="name" className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl">Name: </label>
             <input
               type="text"
               name="name"
               placeholder="Name"
               className="w-full text-sm border-2 rounded-lg bg-dark border-light focus:border-primary sm:w-4/6 xs:text-base sm:text-xl"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.name}
             />
             <span className="block text-red-500 pl-1 text-sm xs:text-base sm:text-lg">{errors.name && touched.name && errors.name}</span>
           </div>
           <div className="mb-4">
             <label htmlFor="email" className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl">Email: </label>
             <input
               type="email"
               name="email"
               placeholder="Email address"
               className="w-full text-sm border-2 rounded-lg bg-dark border-light focus:border-primary sm:w-4/6 xs:text-base sm:text-xl"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
             />
             <span className="block text-red-500 pl-1 text-sm xs:text-base sm:text-lg">{errors.email && touched.email && errors.email}</span>
           </div>
           <div className="mb-4">
             <label htmlFor="message" className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl">Message: </label>
             <textarea
              rows="10"
              name="message"
              placeholder="Leave a message..."
              className="w-full text-sm border-2 rounded-lg bg-dark border-light focus:border-primary xs:text-base sm:text-xl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
             />
             <span className="block text-red-500 pl-1 text-sm xs:text-base sm:text-lg">{errors.message && touched.message && errors.message}</span>
           </div>
           
           <input type="submit" disabled={isSubmitting} id="submit" value="SEND" className="w-20 p-1 text-xl font-extrabold tracking-wider rounded-lg shadow outline-none sm:p-2 text-dark bg-primary focus:bg-primary-darker hover:bg-primary-lighter">
           </input>
         </form>
       )}
     </Formik>
    </main>
  )
}

export default ContactContent
