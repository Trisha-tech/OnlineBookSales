import React, { useEffect, useState } from "react";
import Preloader from "../Components/Preloader";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("There was an error sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Preloader />
      <div className="w-full max-w-5xl p-5 shadow-md rounded-lg mx-auto my-10 dark:bg-[rgb(40,40,40)] border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col p-5 dark:text-white">
            <h1
              className="text-left text-3xl md:text-4xl mb-2 text-[#10a5f5] dark:text-white"
              style={{
                fontSize: "2.4rem",
                fontWeight: 600,
                fontFamily: "Georgia, serif",
              }}
            >
              Get in Touch
            </h1>

            <p className="mb-5 text-[#10a5f5] smalltitlefont text-xl font-normal tracking-wide dark:text-white">
              We are here for you. How can we help?
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="formlevel text-black p-1 tracking-wide text-xs md:text-xl font-normal dark:text-white">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                  placeholder="Enter your Name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="formlevel text-black p-1 tracking-wide text-xs md:text-xl font-normal dark:text-white">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  required
                  placeholder="Enter your Email"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="formlevel text-black p-1 tracking-wide text-xs md:text-xl font-normal dark:text-white">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-2 border border-gray-400 rounded-md text-gray-900 dark:bg-[rgb(51,51,51)] dark:text-white"
                  placeholder="Go ahead! We are listening..."
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="p-2 bg-blue-600 text-white rounded-md self-start hover:bg-blue-700"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
            {responseMessage && (
              <p className="text-green-500 text-center mt-4">
                {responseMessage}
              </p>
            )}
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>
          <div className="flex flex-col items-center p-5">
            {/* <img
              src={Contactus}
              alt="Contact"
              className="w-full h-auto mb-3 p-7"
            /> */}
            <div
              className="w-full p-5 shadow-md rounded-lg bg-white dark:bg-gray-800 flex flex-col justify-between h-full"
              style={{ fontFamily: "Georgia, serif" }}
            >
                <h2 className="text-3xl dark:text-white font-bold mb-2 border-b-2 pb-2 border-gray-300">
                  Contact Us
                </h2>
                <div className="dark:text-white text-black text-2xl">
                  <p>
                  Have some question for us? <br />
                  Reach us at
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-lg font-semibold sm:text-base">
                    <a
                      href="mailto:1234trishasahu@gmail.com"
                      className="flex items-center "
                    >
                      <FaEnvelope className="mr-3 text-2xl dark:text-white" />
                      <span className="ml-3 form-level text-blue-600 dark:text-gray-300 hover:underline">
                        1234trishasahu
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center text-lg font-semibold sm:text-base">
                    <a href="tel:+1234567890" className="flex items-center ">
                      <FaPhoneAlt className="mr-3 text-2xl dark:text-white" />
                      <span className="ml-3 form-level text-blue-600 dark:text-gray-300 hover:underline">
                        +123 456 7890
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center text-lg font-semibold sm:text-base">
                    <a
                      href="https://www.linkedin.com/in/trisha-sahu-171623193/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center "
                    >
                      <FaLinkedin className="mr-3 text-2xl dark:text-white" />
                      <span className="ml-3 form-level text-blue-600 dark:text-gray-300 hover:underline">
                        linkedin.com/in/trisha.
                      </span>
                    </a>
                  </div>
                  <div className="flex items-center text-lg font-semibold  sm:text-base">
                    <a
                      href="https://github.com/Trisha-tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center "
                    >
                      <FaGithub className="mr-3 text-2xl dark:text-white" />
                      <span className="ml-3 form-level text-blue-600 dark:text-gray-300 hover:underline">
                        github.com/Trisha-tech...
                      </span>
                    </a>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
