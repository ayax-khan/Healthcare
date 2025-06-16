import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUsSection() {
  const benefits = [
    "100% HIPAA complaint process",
    "98% claims payment on first submission",
    "Increased efficiency owing to certified coding team",
    "Continuous and rigorous follow ups on denied and pending claims",
    "Reduced staffing issues and operating costs",
    "Denial follow up and resolution by industry experts",
    "You will save almost 70% on operating costs",
    "No headache of staff training or update",
    "Quick response and answers to any billing query",
    "Dedicated practice manager for every practice to ensure streamlined communication",
    "Shortest turnaround time and faster reimbursements Cycle management by billing specialists"
  ];

  const stats = [
    { value: "10+", label: "Year Of Experience" },
    { value: "100+", label: "Medical Specialties" },
    { value: "100+", label: "Happy Clients" }
  ];

  return (
    <div className="relative bg-[url('https://scribealign.com/assets/pics/bg-image.webp')] bg-center z-40">
      <div className="font-outfit py-[70px] md:py-[100px] col-md-9 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-[#004b79] font-bold text-[24px] md:text-[34px] mb-6">
              Why Choose us
            </h3>
            
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <FontAwesomeIcon 
                    icon={faCircleChevronRight} 
                    className="text-[#00aeef] mt-1 flex-shrink-0" 
                    size="lg"
                  />
                  <span className="text-[#000F18] text-[14px] md:text-[18px]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-8 border-t pt-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center px-4 ${index < stats.length - 1 ? "border-r border-gray-300" : ""}`}
                >
                  <p className="text-[#00Aeef] font-bold text-[20px] md:text-[26px]">
                    {stat.value}
                  </p>
                  <p className="text-[#000] font-medium text-[14px] md:text-[16px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img 
              src="https://scribealign.com/assets/pics/smiling-doc.webp" 
              alt="An old doctor is smiling with his colleagues" 
              className="w-full max-w-md rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}