import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form
        className="max-w-[600px] w-full flex flex-col"
        action="https://getform.io/f/7b2ceed4-6770-4d6f-98a2-1987e7ffc2bb"
        method='POST'
      >
        <div className="text-gray-300 pb-8">
          <p className="text-4xl font-bold  border-b-4 inline border-yellow-600">
            Contact
          </p>
          <p className="pt-4">
            Fill the form below or email me through the left side socials mail
            icon
          </p>
          <p className="pb-4 text-sm">
            My email: githinjit52@gmail.com
            <i> incase side icon is not visible</i>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 my-4"
          type="text"
          placeholder="Name"
          name="name"
        ></input>
        <input
          className="bg-[#ccd6f6] p-2 my-4"
          type="email"
          placeholder="Email"
          name="email"
        ></input>
        <textarea
          className="bg-[#ccd6f6] p-2 my-4"
          rows={10}
          placeholder="Message"
          name="message"
        ></textarea>
        <button
          className="text-white border-2 hover:border-yellow-300 hover:bg-yellow-600 px-4 py-3 my-4 mx-auto
        flex items-center"
        >
          Let's collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact