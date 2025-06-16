import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="bg-gray-100">
      <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen">
        <div className="h-full absolute top-0 left-0 z-0">
          <img
            src="images/cover-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-left text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Online Medical Care, Right at Your Fingertips
            </h1>
            <p className="text-blue-100 text-left text-xl md:text-2xl leading-snug mt-4">
              Experience a new level of convenience and control over your
              healthcare with our E-Health Management System.
            </p>
            <NavLink
              to="/patient/login"
              className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white rounded inline-block mt-8 font-bold"
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}