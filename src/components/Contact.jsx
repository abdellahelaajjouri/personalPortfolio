import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        action="https://getform.io/f/a5ec7745-4031-4d14-93c7-1283c2777d16"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4  border-[#59C1BD]">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or shoot me an email - abdellah el aajjouri
          </p>
        </div>

        <input
          type="text"
          className="bg-[#ccd6f6]"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className="my-4 p-2 bg-[#ccd6f6]"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          className="bg-[#ccd6f6] p-2"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border-2 hover:border-[#59C1BD] hover:bg-[#59C1BD] px-4 py-3 mt-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
