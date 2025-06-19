// filename: FAQSection.jsx
import { useState } from 'react';

export default function FAQSection() {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panelId) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  const faqs = [
    // Left Column
    [
      {
        id: 'panel-1',
        question: 'What is medical billing?',
        answer: 'Medical billing is collecting and processing claims for different types of healthcare services. It involves tracking patient information such as insurance coverage, deductible amounts, and other details about a patient\'s medical history to ensure that all patients receive appropriate care. Also, a baseline of charges is established for each patient who received care to calculate the amount owed by insurance companies and third parties. Medical billing is a crucial part of the healthcare system, as it ensures that all insurance companies and patients receive their respective share of the cost of treatment.',
      },
      {
        id: 'panel-2',
        question: 'How long have you been in business as a medical billing company in Las Vegas?',
        answer: 'We have been in business for over 10 years.',
      },
      {
        id: 'panel-3',
        question: 'What are the qualifications of your medical billing and coding experts?',
        answer: 'Our team is composed of highly trained and certified medical billing and coding experts with years of experience in the industry.',
      },
      {
        id: 'panel-4',
        question: 'How do I get started with your medical billing services in Las Vegas?',
        answer: 'Contact us today to schedule a consultation, and we\'ll help you get started with our services.',
      },
      {
        id: 'panel-5',
        question: 'How does Scribe Align\'s medical billing service help with insurance claim disputes?',
        answer: 'Our team of experts is well-versed in dealing with insurance providers and is equipped to resolve any disputes or issues that may arise. We have the knowledge and expertise to ensure that your claims are processed accurately and efficiently, and we work closely with our clients to resolve any disputes that may arise.',
      },
      {
        id: 'panel-6',
        question: 'How do you handle HIPAA compliance?',
        answer: 'We take HIPAA compliance very seriously and have implemented strict policies and procedures to ensure that all patient information is confidential and secure. We also regularly review and update our security measures to ensure they are up-to-date and effective.',
      },
      {
        id: 'panel-7',
        question: 'Are your medical billing services compliant with Las Vegas regulations?',
        answer: 'Yes, our services are fully compliant with all local and national regulations.',
      },
    ],
    // Right Column
    [
      {
        id: 'panel-1a',
        question: 'What services do you offer as a medical billing company in Las Vegas?',
        answer: 'We offer various medical billing services, including billing, coding, and collections. We also offer specialized services such as Credentialing, Denial Management, Account Receivable, and Virtual Medical Scribes.',
      },
      {
        id: 'panel-2a',
        question: 'How can your medical billing services help my practice in Las Vegas?',
        answer: 'Our services can help your practice maximize revenue, increase your bottom line, and make your life easier. We work closely with you to ensure that your billing and coding are accurate and up-to-date, and we take the time to understand your unique needs and develop a customized solution that works for you.',
      },
      {
        id: 'panel-3a',
        question: 'Why do I need medical billing services?',
        answer: 'Keeping up with the constantly changing regulations and medical billing requirements can be time-consuming and overwhelming, especially for small practices. Outsourcing your billing to a professional service can save you time and money and ensure that your claims are processed accurately and efficiently.',
      },
      {
        id: 'panel-4a',
        question: 'How does medical billing outsourcing benefit my practice?',
        answer: 'Outsourcing your medical billing to Scribe Align LLC can save you time and money while ensuring that your billing and coding are accurate, up-to-date, and fully compliant with all relevant regulations and standards.',
      },
      {
        id: 'panel-5a',
        question: 'What are the advantages of using a medical billing service like Scribe Align?',
        answer: 'Our team of experts is dedicated to providing accurate and efficient services. Using our services, you can expect an increase in revenue, improved cash flow, and reduced administrative burden.',
      },
      {
        id: 'panel-6a',
        question: 'What sets Scribe Align LLC apart from other medical billing services?',
        answer: 'We truly care about our clients and their success. We take the time to understand their needs and tailor our services accordingly. We also have a team of professionals who are passionate about what they do and are committed to providing the best possible service.',
      },
      {
        id: 'panel-7a',
        question: 'How do Scribe Align\'s medical billing services improve patient care?',
        answer: 'Scribe Align\'s medical billing service can improve patient care by reducing the administrative burden on healthcare providers. Our services are designed to improve the overall revenue cycle management, allowing healthcare providers to devote more time and resources to patient care.',
      },
    ],
  ];

  return (
    <section id="faq" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-3xl font-bold text-[#004b79] mb-8">
          Frequently Asked Questions
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqs.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col">
              {column.map((faq) => (
                <div key={faq.id} className="bg-white rounded-md mb-3 shadow-sm">
                  <button
                    onClick={() => togglePanel(faq.id)}
                    className="w-full text-left px-4 py-3 text-lg font-semibold text-gray-900 flex justify-between items-center"
                  >
                    <span>{faq.question}</span>
                    <span>{openPanel === faq.id ? '−' : '+'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openPanel === faq.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="px-4 py-3 text-gray-700 text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}