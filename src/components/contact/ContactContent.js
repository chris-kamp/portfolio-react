import { useEffect, useState } from "react";
import { Formik } from "formik";
import emailjs from "emailjs-com";

const ContactContent = () => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [submissionFailure, setSubmissionFailure] = useState(false)

  emailjs.init("user_faOCtZiDkg0k5FOn8f45h");

  // Remove active effect from submit button when mouse released outside button
  const handleMouseUp = () => {
    document.getElementById("submit").blur();
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleButtonPress = (e) => {
    if (e.target.id === "submit") {
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleButtonPress);
    return () => {
      document.removeEventListener("mousedown", handleButtonPress);
    };
  });

  return (
    <main className="flex flex-col items-center justify-center px-3 sm:px-12">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Please provide a contact email address";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Please enter a valid email address";
          }
          if (!values.name) {
            errors.name = "Please leave your name";
          }
          if (!values.message) {
            errors.message = "Please include your message";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          emailjs
            .sendForm(
              "service_chriskampdev",
              "template_contact_form",
              document.getElementById("contactform")
            )
            .then(
              () => {
                resetForm();
                setSubmissionSuccess(true);
              },
              (error) => {
                console.error(error.text);
                setSubmissionFailure(true);
              }
            )
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className={`w-full max-w-5xl p-4 border-2 rounded-lg border-primary md:p-8 ${(submissionSuccess || submissionFailure) && "pb:0 md:pb-0"}`}
            id="contactform"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl"
              >
                Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={`w-full text-sm border-2 rounded-lg bg-dark sm:w-4/6 xs:text-base sm:text-xl ${(errors.name && touched.name) ? "ring-red-400 focus:ring-red-500 border-red-400 focus:border-red-500" : "border-light ring-light focus:border-primary focus:ring-primary"}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <span className="block pl-1 text-sm text-red-500 xs:text-base sm:text-lg">
                {errors.name && touched.name && errors.name}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl"
              >
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className={`w-full text-sm border-2 rounded-lg bg-dark sm:w-4/6 xs:text-base sm:text-xl ${(errors.email && touched.email) ? "ring-red-400 focus:ring-red-500 border-red-400 focus:border-red-500" : "border-light ring-light focus:border-primary focus:ring-primary"}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="block pl-1 text-sm text-red-500 xs:text-base sm:text-lg">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block pl-1 text-sm font-extrabold xs:text-base sm:text-xl"
              >
                Message:{" "}
              </label>
              <textarea
                rows="10"
                name="message"
                placeholder="Leave a message..."
                className={`w-full text-sm border-2 rounded-lg bg-dark xs:text-base sm:text-xl ${(errors.message && touched.message) ? "ring-red-400 focus:ring-red-500 border-red-400 focus:border-red-500" : "border-light ring-light focus:border-primary focus:ring-primary"}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <span className="block pl-1 text-sm text-red-500 xs:text-base sm:text-lg">
                {errors.message && touched.message && errors.message}
              </span>
            </div>

            <input
              type="submit"
              disabled={isSubmitting}
              id="submit"
              value="SEND"
              className="w-20 p-1 text-xl font-extrabold tracking-wider rounded-lg shadow outline-none sm:p-2 text-dark bg-vivid focus:bg-vivid-darker hover:bg-vivid-lighter"
            ></input>
            {submissionFailure && !isSubmitting && <span className="block w-full pl-1 mt-1 mb-2 text-base font-extrabold text-center text-red-500 rounded-lg xs:text-lg sm:text-xl">Something went wrong! Try sending again.</span>}
            {submissionSuccess && !isSubmitting && <span className="block w-full pl-1 mt-1 mb-2 text-base font-extrabold text-center rounded-lg text-primary xs:text-lg sm:text-xl">Message sent. Thank you!</span>}
            {isSubmitting && <span className="block w-full pl-1 mt-1 mb-2 text-base font-extrabold text-center rounded-lg text-primary xs:text-lg sm:text-xl">Sending, please wait...</span>}
          </form>
        )}
      </Formik>
    </main>
  );
};

export default ContactContent;
