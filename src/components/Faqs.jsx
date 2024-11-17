import React, { useEffect, useState } from "react";

const Faqs = () => {
  // State to track if elements are in the viewport
  const [inView, setInView] = useState(false);

  // Function to detect element visibility
  const handleScroll = () => {
    const faqSection = document.querySelector("#faq-section");
    const rect = faqSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="faq-section"
      className="max-w-screen-xl px-6 py-12 mx-auto bg-white shadow-lg rounded-lg"
    >
      <h2 className="mb-8 text-4xl font-extrabold text-center text-indigo-600">
        Frequently Asked Questions
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <li
          className={`transform transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } hover:bg-indigo-50 p-6 rounded-lg shadow-md border border-gray-200`}
        >
          <p className="text-lg font-semibold text-gray-900">
            What is self-learning in a person?
          </p>
          <p className="mt-2 text-base text-gray-600">
            Self-learning in a person refers to the ability to acquire knowledge
            and skills independently, using resources like books, online
            courses, or practice. It fosters personal growth, adaptability, and
            problem-solving by encouraging curiosity and the drive to
            continually improve without relying solely on formal instruction.
          </p>
        </li>

        <li
          className={`transform transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } hover:bg-indigo-50 p-6 rounded-lg shadow-md border border-gray-200`}
        >
          <p className="text-lg font-semibold text-gray-900">
            Why do I need to learn technologies?
          </p>
          <p className="mt-2 text-base text-gray-600">
            Learning technologies empowers you to stay competitive in a rapidly
            evolving world, opening doors to new career opportunities, improving
            problem-solving skills, and enabling you to make more informed
            decisions in both personal and professional life.
          </p>
        </li>

        <li
          className={`transform transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } hover:bg-indigo-50 p-6 rounded-lg shadow-md border border-gray-200`}
        >
          <p className="text-lg font-semibold text-gray-900">
            Is learning programming more difficult than other fields?
          </p>
          <p className="mt-2 text-base text-gray-600">
            Learning programming can seem challenging initially due to its
            logical and problem-solving nature, but with practice, it becomes
            manageable. Like other fields, success in programming depends on
            consistent effort and dedication, making it accessible to anyone
            willing to learn.
          </p>
        </li>

        <li
          className={`transform transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } hover:bg-indigo-50 p-6 rounded-lg shadow-md border border-gray-200`}
        >
          <p className="text-lg font-semibold text-gray-900">
            How do I learn programming in a short period?
          </p>
          <p className="mt-2 text-base text-gray-600">
            To learn programming quickly, focus on one language, practice
            consistently, and start with the basics like variables, loops, and
            functions. Utilize online courses, build small projects, and seek
            feedback to reinforce learning and progress efficiently.
          </p>
        </li>

        <li
          className={`transform transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } hover:bg-indigo-50 p-6 rounded-lg shadow-md border border-gray-200`}
        >
          <p className="text-lg font-semibold text-gray-900">
            If I learn programming, what new skills or features will I gain?
          </p>
          <p className="mt-2 text-base text-gray-600">
            Learning programming equips you with problem-solving skills, logical
            thinking, and the ability to automate tasks. It opens up
            opportunities in various tech fields, enhances career prospects, and
            empowers you to create your own projects or apps.
          </p>
        </li>

        <li
          className={`transform transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          } hover:bg-indigo-50 p-6 rounded-lg shadow-md border border-gray-200`}
        >
          <p className="text-lg font-semibold text-gray-900">
            Are there job opportunities in the tech industry?
          </p>
          <p className="mt-2 text-base text-gray-600">
            Yes, the tech industry is growing rapidly and offers diverse roles,
            from software development and data science to cybersecurity and
            project management. Opportunities are available in many sectors,
            with high demand for skilled professionals.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Faqs;
