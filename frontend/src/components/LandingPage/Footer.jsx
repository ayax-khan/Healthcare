import AboutUsSection from './AboutUsSection';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <AboutUsSection />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} [Company Name LLC]. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="[Privacy Policy URL]" className="hover:text-blue-400">Privacy Policy</a>
            <a href="[Terms of Service URL]" className="hover:text-blue-400">Terms of Service</a>
            <a href="/contact" className="hover:text-blue-400">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}