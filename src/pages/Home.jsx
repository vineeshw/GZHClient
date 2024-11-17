import React from "react";
import TopSection from "../components/TopSection";
import Feature from "../components/Features";
import StudentFeature from "../components/StudentFeature";
import PriceCardOne from "../components/PriceCardOne";
import Faqs from "../components/Faqs";
import BandeauNumber from "../components/BandeauNumber";
import ProffessionalTeams from "../components/ProffessionalTeams";
import Testimonials from "../components/Testimonials";
import BigTeams from "../components/BigTeams";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CourseSection from "../components/CouseSection";
import Location from "../components/Location";
const Home = () => {
  return (
    <div className="scroll-smooth">
      <div id="top-section">
        <TopSection />
      </div>
      <div id="features">
        <Feature />
      </div>
      <div id="student-feature">
        <StudentFeature />
      </div>
      <div id="weoffer">
        <CourseSection />
      </div>
      {/* <div id="pricing">
        <PriceCardOne />
      </div> */}
      <div id="faqs">
        <Faqs />
      </div>
      {/* <div>
        <BandeauNumber />
      </div> */}
      {/* <div id="team">
        <ProffessionalTeams />
      </div> */}
      <div id="team">
        <BigTeams />
      </div>
      <div>
        <Testimonials />
      </div>
      {/* <div>
        <Location />
      </div> */}
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
