import { useState } from 'react';

export default function AboutUsSection() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const aboutContent = [
    {
      id: 'expertise',
      title: 'Our Expertise',
      content: (
        <>
          <p>With over [X] years of experience, we specialize in medical billing and coding across various fields, including cardiology, dermatology, general practice, and more. Our team of certified coders and billing professionals is proficient in ICD-10, CPT, and HCPCS coding systems.</p>
          <p>We stay ahead of industry changes to ensure accurate claim submissions and minimal denials, providing tailored solutions that meet the unique needs of each practice.</p>
        </>
      ),
    },
    {
      id: 'what-sets-us-apart',
      title: 'What Sets Us Apart',
      content: (
        <>
          <p>We offer customized billing solutions, transparent reporting, and HIPAA-compliant systems to safeguard patient data. Our high claim acceptance rate and fast turnaround times reduce reimbursement delays, ensuring steady cash flow for your practice.</p>
          <p>Our proactive approach includes regular updates and dedicated support, making us a trusted partner for healthcare providers.</p>
        </>
      ),
    },
    {
      id: 'clients',
      title: 'Our Clients',
      content: (
        <>
          <p>We serve a diverse range of healthcare providers, from individual practices to multi-specialty clinics and hospitals. Our long-term partnerships are built on trust, reliability, and results.</p>
          <p>“[Company Name LLC] has transformed our billing process, increasing our revenue by [X]%.” – [Client Testimonial, replace with actual quote].</p>
        </>
      ),
    },
    {
      id: 'team',
      title: 'Our Team',
      content: (
        <>
          <p>Our leadership team brings decades of experience in healthcare billing, supported by a staff of certified professionals dedicated to client success. We prioritize professionalism, accuracy, and exceptional customer service in every interaction.</p>
        </>
      ),
    },
    {
      id: 'technology',
      title: 'Technology & Tools',
      content: (
        <>
          <p>We leverage cutting-edge billing software, including [Software Names, e.g., Kareo, AdvancedMD], with seamless EHR and EMR integrations. Our automated tools reduce errors and streamline processes, ensuring efficiency and compliance.</p>
        </>
      ),
    },
    {
      id: 'location',
      title: 'Location & Reach',
      content: (
        <>
          <p>Our office is located at [Address, e.g., 123 Healthcare Lane, Las Vegas, NV 89101]. We serve clients locally in Las Vegas, nationally across the U.S., and internationally, providing flexible solutions tailored to your needs.</p>
          <p>Contact us at [Phone Number, e.g., (702) 123-4567] or follow us on:</p>
          <ul className="list-disc pl-5">
            <li><a href="[Facebook URL]" className="text-blue-500 hover:underline">Facebook</a></li>
            <li><a href="[Twitter URL]" className="text-blue-500 hover:underline">Twitter</a></li>
            <li><a href="[LinkedIn URL]" className="text-blue-500 hover:underline">LinkedIn</a></li>
            <li><a href="[Instagram URL]" className="text-blue-500 hover:underline">Instagram</a></li>
          </ul>
        </>
      ),
    },
    {
      id: 'promise',
      title: 'Our Promise',
      content: (
        <>
          <p>We are dedicated to improving your practice’s revenue, reducing administrative stress, and providing ongoing support. With [Company Name LLC], you gain a partner committed to clear communication and exceptional results.</p>
        </>
      ),
    },
  ];

  return (
    <section id="about" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About HICAN Medical Billing</h2>
        <div className="grid grid-cols-1 gap-4">
          {aboutContent.map((section) => (
            <div key={section.id} className="bg-gray-700 rounded-md shadow-sm">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full text-left px-4 py-3 text-lg font-semibold flex justify-between items-center"
              >
                <span>{section.title}</span>
                <span>{openSection === section.id ? '−' : '+'}</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openSection === section.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 text-base">{section.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}