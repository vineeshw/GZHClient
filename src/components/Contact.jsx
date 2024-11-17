import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [sending, setSending] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.comment) newErrors.comment = "Comment is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formDataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        comment: formData.comment,
      };
      setSending(true);
      //  const formDatas = new FormData(formDataToSend)
      try {
        const response = await fetch("/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        });

        const data = await response.json();
        if (data.status) {
          setSending(false);
          toast.success(data.message);
          setFormData({
            name: "",
            email: "",
            phone: "",
            comment: "",
          });
        } else {
          setSending(false);
          console.log(data, "-----------------------------");
          toast.error("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error sending form data:", error);
        toast.error("There was an error sending your message.");
        setSending(false);
      }
    } else {
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row px-6 py-12 bg-gray-100">
      {/* Left side content */}
      <div className="lg:w-1/2 w-full px-5 py-10 bg-white shadow-lg dark:bg-indigo-600 mb-8 lg:mb-0">
        <h2 className="text-3xl font-light text-center text-gray-800 dark:text-white mb-6">
          Contact Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We'd love to hear from you! If you have any questions or need
          assistance, feel free to reach out.
        </p>
      </div>

      {/* Right side contact form */}
      <div className="lg:w-1/2 w-full px-5 py-10 bg-white shadow-lg dark:bg-indigo-600">
        <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
          Get In Touch!
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name field */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email field */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone field */}
          <div>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="Your Phone Number"
              maxLength={10}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Comment field */}
          <div>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              className={`w-full py-2 px-4 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 ${
                errors.comment ? "border-red-500" : ""
              }`}
              placeholder="Your Message"
              rows="5"
            ></textarea>
            {errors.comment && (
              <p className="text-red-500 text-sm">{errors.comment}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="text-right sm:flex sm:justify-center md:flex md:justify-end lg:flex lg:justify-end">
            <button
              type="submit"
              className="py-2 px-6 bg-teal-800 hover:bg-teal-700 text-white rounded-lg transition duration-300 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
