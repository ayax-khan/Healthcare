// filename: SolutionsSection.jsx
export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-gray-100 font-sans">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-6">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'Revenue Cycle Management',
              img: 'https://carecloud.com/wp-content/uploads/2025/04/Group-1.svg',
              desc: 'Tired of chasing payments? Let our RCM experts optimize your billing, remittance, and collections, ensuring you get paid faster and more accurately.',
              link: '/rcm',
            },
            {
              title: 'Electronic Health Records',
              img: 'https://carecloud.com/wp-content/uploads/2025/04/EHR-2.svg',
              desc: 'CareCloud Charts provides real-time insights to providers at the point of care. From spotting Pharmacodynamic interactions to supporting critical decisions.',
              link: '/ehr',
            },
            {
              title: 'Practice Management',
              img: 'https://carecloud.com/wp-content/uploads/2025/04/Pm-1.svg',
              desc: 'Manage appointments, staff schedules, and resources with ease. Our efficient scheduling tools keep your practice running like clockwork.',
              link: '/practice-management',
            },
            {
              title: 'Patient Experience Management',
              img: 'https://carecloud.com/wp-content/uploads/2025/04/PEM-1.svg',
              desc: 'Seamlessly blends hundreds of features into a single platform that revolutionizes the patient\'s journey. A better experience for them means better outcomes for you.',
              link: '/breeze',
            },
            {
              title: 'Digital Health',
              img: 'https://carecloud.com/wp-content/uploads/2025/04/DH-1.svg',
              desc: 'From patient outreach to monthly check-ins, we handle the nitty-gritty. Enjoy a seamless process for patients and providers, from start-of-care on.',
              link: '/digital-health',
            },
            {
              title: 'AI-Powered Solutions',
              img: 'https://carecloud.com/wp-content/uploads/2025/04/Cirus-Ai-logo-1.svg',
              desc: 'Work smarter, not harder, with CareCloud’s AI solutions. Harness the transformative power of AI to optimize clinical, financial, and operational outcomes.',
              link: '/cirrusai',
            },
          ].map((solution, index) => (
            <div key={index} className="flip-box bg-white rounded-lg shadow-lg h-64 relative overflow-hidden">
              <div className="flip-box-inner relative h-full transition-transform duration-600 transform-style-preserve-3d hover:transform hover:rotate-y-180">
                <div className="flip-box-front bg-white p-4 flex flex-col items-center justify-center absolute w-full h-full backface-hidden">
                  <img src={solution.img} alt={solution.title} className="w-16 h-16 mb-2" />
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <a href={solution.link} className="text-blue-500">Learn More</a>
                </div>
                <div className="flip-box-back bg-blue-100 p-4 flex flex-col items-center justify-center absolute w-full h-full backface-hidden transform rotate-y-180">
                  <p className="text-center">{solution.desc}</p>
                  <a href={solution.link} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Explore</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}