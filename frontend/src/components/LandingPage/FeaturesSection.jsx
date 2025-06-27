// filename: FeaturesSection.jsx
export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="relative bg-[#EDF2F6] z-0">
        <div className="font-sans py-[70px] md:py-[40px] col-md-9 mx-auto">
          <div>
            <h3 className="text-[#004b79] font-bold text-[24px] md:text-[34px] md:px-0 px-2 pb-[20px] md:pb-[30px]">
              What services do we offer?
            </h3>
          </div>
          <div className="text-[#000F18] text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] w-full md:w-[100%] m-auto md:px-0 px-2">
            <p>
              Our services include Medical Billing and Coding, Revenue Cycle Management,
              Enrollment and Credentialing, Claim and Denial Management, Eligibility Verification, Prior
              Authorization, Accounts Receivable, Medical Hican , and Patient Billing.
            </p>
            <p>
              In addition, we provide Medical Transcription, Appointment Scheduling, and Medical
              Records Management services.
            </p>
          </div>
          <div className="w-full gap-[20px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 py-[20px] md:py-[4px] md:px-0 px-2">
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Medical Billing &amp;<br />Coding
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                Medical billing and coding can be a complex and time-consuming task, but with our professional
                services, you can streamline the process and enhance the financial success of your practice.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/medical-billing-and-coding" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Revenue Cycle Management
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                Revenue cycle management is a critical component of the medical billing process. HICAN Medical 
                provides comprehensive solutions to help healthcare providers optimize their revenue and improve
                their bottom line.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/revenue-cycle-management" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Credentialing<br />Services
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                At HICAN Medical , we understand the importance of credentialing and work hard to give our clients
                the most reliable service possible. Our experienced team of professionals can help you
                throughout the credentialing process.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/credentialing-services" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Eligibility<br />Verification
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                Eligibility and Benefit Verification are crucial for the financial success of healthcare
                providers. It helps reduce the risk of denied or delayed claims, ensuring providers receive
                accurate payment for their services.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/eligibility-verification" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Account<br />Receivable
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                Maintaining accurate and up-to-date records of Accounts Receivable is crucial for healthcare
                providers as it directly affects their cash flow. AR management helps healthcare providers to
                ensure timely payment.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/accounts-receivable-in-medical-billing" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Denial<br />Management
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                Denial management is a critical aspect of medical billing that can greatly impact the revenue of
                healthcare providers. At HICAN Medical , we understand the complexities and frustrations of denied
                claims and aim to help providers.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/denial-management" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Prior<br />Authorization
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                Prior authorization is a critical component of the medical billing and coding process. It helps
                ensure that patients receive the right coverage for their medical treatments, reduces the risk
                of denied claims, and streamlines the payment process.
              </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/prior-authorization" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
            <div className="w-full text-[#004B79] bg-[#fff] px-4 py-4 my-2 relative">
              <p className="text-[24px] md:text-[26px] font-bold leading-[28px] md:leading-[34px]">
                Virtual Medical<br />Hican
              </p>
              <p className="text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] text-[#000F18] pt-[8px] pb-[20px] md:pt-[10px] md:pb-[50px]">
                <p>As the healthcare industry shifts towards telehealth and remote care, the need for efficient and
                accurate documentation has never been greater. That's why we're proud to offer our virtual
                medical HICAN Medical services to help streamline your practice. </p>
                </p>
              <button className="lg:absolute lg:bottom-6 w-[80px] md:w-[100px] h-[26px] md:h-[36px] rounded-[6px] text-[#fff] bg-blue-500 hover:bg-blue-600 text-[12px] md:text-[16px]">
                <a href="/virtual-medical-hican" className="hover:no-underline hover:text-[#fff]">
                  <p>Read More</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}