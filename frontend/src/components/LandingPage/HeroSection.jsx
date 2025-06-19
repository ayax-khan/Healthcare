// filename: HeroSection.jsx

export default function HeroSection() {
  return (
    <div id="hero" className="relative bg-blue-teal-gradient w-full">
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          src="https://www.scribealign.com/images/cover-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <section className="relative z-10 px-4 py-48 sm:px-8 lg:px-16 max-w-7xl mx-auto flex items-center min-h-screen">
        <div className="lg:w-3/4 xl:w-2/4 h-full lg:mt-16">
          <div>
            <h1 className="text-white text-left text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Online Medical Care Facility, Right at Your Fingertips
            </h1>
            <p className="text-blue-100 text-left text-xl md:text-2xl leading-snug mt-4">
              The Only Medical Billing Company Uniting Tech & Expertise to Meet Provider’s Vision
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}