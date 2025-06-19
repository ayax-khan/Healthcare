// filename: WorkflowsSection.jsx
import { useState } from 'react';

export default function WorkflowsSection() {
  const [activeTab, setActiveTab] = useState('ai-powered');
  const [activeAccordions, setActiveAccordions] = useState({});

  const tabs = [
    { id: 'ai-powered', title: 'AI-Powered Healthcare', img: 'https://carecloud.com/wp-content/uploads/2025/04/2025_03_ai_powered_1_1x.webp' },
    { id: 'therapy', title: 'Therapy Solution Suite', img: 'https://carecloud.com/wp-content/uploads/2025/04/2025_03_therapy_pic_03_1_1x.webp' },
    { id: 'digital-health', title: 'Digital Health', img: 'https://carecloud.com/wp-content/uploads/2025/03/patient-engagement-1.jpg' },
    { id: 'analytics', title: 'Intelligent Analytics', img: 'https://carecloud.com/wp-content/uploads/2025/03/Intelligent-Analytics-3-1.jpg' },
  ];

  const content = {
    'ai-powered': [
      { title: 'Clinical Decision Support', desc: 'Let cirrusAI Guide lighten your load with automated data input and real-time, evidence-based recommendations via Vertex AI’s generative AI tools for providers to consider. It’s your go-to for better diagnoses and treatment plans.' },
      { title: 'AI-Powered Clinical Notes', desc: 'Using Generative AI technology, cirrusAI Notes can capture natural patient-provider conversations, automatically generate clinical documentation, and save them directly into EHR.' },
    ],
    'therapy': [
      { title: 'Comprehensive Practice Management', desc: 'The suite offers a complete solution for managing therapy practices, including scheduling, billing, and patient management, all in one platform.' },
    ],
    'digital-health': [
      { title: 'Patient Engagement', desc: 'CareCloud Digital Health enhances patient engagement by providing tools like secure messaging, appointment reminders, and access to personal health information.' },
    ],
    'analytics': [
      { title: 'Advanced Analytics', desc: 'Our Business Intelligence software offers advanced analytics tools to help healthcare organizations gain valuable insights from patient data, financial data, and operational metrics.' },
    ],
  };

  const toggleAccordion = (tabId, index) => {
    setActiveAccordions(prev => ({
      ...prev,
      [tabId]: prev[tabId] === index ? null : index,
    }));
  };

  return (
    <section id="workflows" className="bg-gray-100 font-sans">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-2">Seamless Workflows</h2>
        <h3 className="text-2xl font-semibold text-center mb-4">for Smarter Healthcare</h3>
        <p className="text-center mb-6">Our integrated EHR and AI-driven tools help streamline daily operations, reduce administrative burden, and enhance patient care.</p>
        <div className="tabs">
          <div className="flex justify-center space-x-2 mb-4 flex-wrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {tabs.map(tab => (
            <div key={tab.id} className={`tab-content ${activeTab === tab.id ? 'block' : 'hidden'}`}>
              <div className="accordion">
                {content[tab.id].map((item, index) => (
                  <div key={index} className="border-b">
                    <button
                      onClick={() => toggleAccordion(tab.id, index)}
                      className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300"
                    >
                      {item.title}
                    </button>
                    <div className={`accordion-content p-4 bg-white ${activeAccordions[tab.id] === index ? '' : 'hidden'}`}>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <img src={tab.img} alt={tab.title} className="mt-4 w-full max-w-md mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}