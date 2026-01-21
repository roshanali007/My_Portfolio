import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function FormSubmission() {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_4buglep',     // replace
        'template_yzrdlfs',    // replace
        formRef.current,
        'JPJG82EAcsc31bVfE'      // replace
      )
      .then(
        () => {
          alert('Message sent successfully!')
          formRef.current.reset()
        },
        (error) => {
          console.error(error)
          alert('Failed to send message. Try again.')
        }
      )
  }

  return (
    <div>
      <div className="text-white py-5 px-5">
        <h1 className="py-3.5 text-3xl">Get In Touch</h1>
        <p className="py-2.5 text-[18px]">
          Feel free to reach out for opportunities, collaborations,
          or any project-related discussions. I’m always open to connecting.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-black p-5 rounded-xl space-y-4"
      >
        {/* First & Last Name */}
        <div className="flex gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="w-1/2 p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="w-1/2 p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white text-[18px]"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-white resize-none text-[18px]"
        ></textarea>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition text-[18px]"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default FormSubmission
