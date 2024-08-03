// import React, { useState } from "react";
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.send(
//       import.meta.env.VITE_EMAILJS_SERVICE_ID, // Replace with your EmailJS service ID
//       import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Replace with your EmailJS template ID
//       formData,
//       import.meta.env.VITE_EMAILJS_USER_ID // Replace with your EmailJS user ID
//     )
//     .then((result) => {
//       console.log(result.text);
//       alert('Message sent successfully!');
//     }, (error) => {
//       console.log(error.text);
//       alert('Failed to send message, please try again.');
//     });

//     setFormData({
//       name: '',
//       email: '',
//       message: '',
//     });
//   };

//   return (
//     <div className="items-center justify-center relative">
//       <form onSubmit={handleSubmit} id="contact" className="w-[50%] mx-auto mt-40 grid gap-3 ">
//         <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12 text-center">
//           Contact Me
//         </h2>
//         <div className="mb-3 z-20">
//           <input
//             type="text"
//             placeholder="Your name"
//             value={formData.name}
//             onChange={handleChange}
//             name="name"
//             className="w-full py-2 h-12 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
//           />
//         </div>
//         <div className="mb-3 z-20">
//           <input
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Email"
//             name="email"
//             className="w-full py-2 h-12 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
//           />
//         </div>
//         <div className="mb-3 z-20">
//           <textarea
//             placeholder="Your message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full py-2 h-32 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
//           />
//         </div>
//         <div className="flex justify-center">
//           <button type='submit' className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xl mb-20 font-bold rounded-full px-3 py-1 my-2 inline-block transform transition-transform duration-300 ease-in-out shadow-custom-light hover:scale-100 hover:shadow-more-custom-light z-20">
//             Send a message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
import { useState } from 'react';
import { sendCustomEmail } from './email';
import { Toaster } from 'react-hot-toast';

const Contact = () => {
    const [details, setDetails] = useState({
      name: '',
      message: '',
      email: '',
    });

    const handleDetailsChange = (event) => {
      const { name, value } = event.target;
      setDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    };

    const handleSendEmail = (e) => {
      e.preventDefault();
      sendCustomEmail(details);
      setDetails({
        name: '',
        message: '',
        email: '',
      });
    };

    return (
      <div className="items-center justify-center mx-8 ">
        <form onSubmit={handleSendEmail} id="contact" className="w-full md:w-[60%] mx-auto mt-40 grid gap-3 ">
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12 text-center">
            Contact Me
          </h2>
          <div className="mb-3 z-20">
            <input
            required
              type="text"
              placeholder="Your name"
              value={details.name}
              onChange={handleDetailsChange}
              name="name"
              className="w-full py-2 h-12 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
            />
          </div>
          <div className="mb-3 z-20">
            <input
            required
              type="email"
              value={details.email}
              onChange={handleDetailsChange}
              placeholder="Email"
              name="email"
              className="w-full py-2 h-12 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
            />
          </div>
          <div className="mb-3 z-20">
            <textarea
            required
              placeholder="Your message"
              name="message"
              value={details.message}
              onChange={handleDetailsChange}
              className="w-full py-2 h-32 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xl mb-20 font-bold rounded-full px-3 py-1 my-2 inline-block transform transition-transform duration-300 ease-in-out shadow-custom-light hover:scale-100 hover:shadow-more-custom-light z-20">
              Send a message
            </button>
          </div>
          <Toaster
  position="bottom-center"
  reverseOrder={true}
/>
        </form>
        
      </div>
  );
};

export default Contact;
