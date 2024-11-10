"use client";
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', subject: '', email: '', phone: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center  ">
      <section className="flex flex-col xl:flex-row justify-center items-center gap-4 w-full max-w-5xl">
        
        {/* Left Side: General Information */}
        <div className="w-full xl:w-1/3 p-4 rounded-lg ">
          <h2 className="text-lg font-semibold mb-4">General Info</h2>
          <p className="mt-4">
          Registered Office :</p>
          <h3 className="text-lg text-gray-700">Maxol (Private) Limited</h3>
          <p className='text-gray-700'>
            No. 75/14, D.L. Pathirage Mawatha,<br />
            Gangodawila, Nugegoda (10250),<br />
            Sri Lanka
          </p>
          <p className="mt-4">
          Operational Office :</p>
          <p className='text-gray-700'>
  66/3/3, Kirimetiyagara, <br />
  Kadawatha (11850),<br />
  Sri Lanka
</p>

          <div className="mt-4 flex space-x-2">
            <FaFacebook className="text-black" size={24} />
            <FaInstagram className="text-black" size={24} />
            <FaTiktok className="text-black" size={24} />
          </div>
          <p className="mt-4">
            Hotline:
            <a className="text-gray-700" href="tel:+94773220022"> +94 773 220 022</a><br />
            Mail:
            <a className='text-gray-700'  href="mailto:maxol@maxolsl.com"> maxol@maxolsl.com</a>
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full xl:w-2/3 p-4  rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center ">Get in touch with Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="flex rounded-full border border-customGreen mt-4 px-6 py-2 font-medium hover:bg-customBlue hover:text-white mx-auto md:mx-0"
            >
              Send Us
            </button>
          </form>
        </div>
      </section>

      {/* Bottom Section: Google Map */}
      <div className="w-full mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.631947371854!2d79.88297148783133!3d6.871665454357539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a4494919d1b%3A0x9a36b0f5258496e5!2sGangodawila%2C%20Nugegoda!5e0!3m2!1sen!2slk!4v1729981742781!5m2!1sen!2slk"
          style={{ width: '100%', height: '400px', border: '0', maxWidth: '100vw' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}