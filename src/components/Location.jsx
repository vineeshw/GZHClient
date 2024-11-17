import React from "react";

const Location = () => {
  return (
    <section className="w-full p-8 bg-gray-100 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Our Location</h2>
      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Visit us at our institution! Find us on the map below to get directions.
      </p>

      <div className="w-full h-96 max-w-4xl overflow-hidden rounded-lg shadow-lg">
        <iframe
          title="Institution Location"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Your+Institution+Name,Your+City,Your+Country"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
