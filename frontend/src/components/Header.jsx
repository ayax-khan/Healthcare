import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for fixed header height
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="bg-white fixed top-0 left-0 right-0 w-full z-50 shadow-md">
      <nav className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToSection('hero')}>
            <span className="sr-only">HICAN Medical Billing</span>
            <img className="h-8 w-auto float-left" src="/logo.png" alt="HICAN Medical Billing" />HICAN Medical Billing
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <button onClick={() => scrollToSection('hero')} className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </button>
          <button onClick={() => scrollToSection('features')} className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </button>
          <button onClick={() => scrollToSection('solutions')} className="text-sm font-semibold leading-6 text-gray-900">
            Solutions
          </button>
          <button onClick={() => scrollToSection('workflows')} className="text-sm font-semibold leading-6 text-gray-900">
            Workflows
          </button>
          <button onClick={() => scrollToSection('about')} className="text-sm font-semibold leading-6 text-gray-900">
            About
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 text-sm font-semibold leading-6 text-gray-900" onClick={() => scrollToSection('hero')}>
              <span className="sr-only">HICAN Medical Billing</span>
              <img className="h-8 w-auto float-left" src="/logo.png" alt="HICAN Medical Billing" />HICAN Medical Billing
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="py-6">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Solutions
                </button>
                <button
                  onClick={() => scrollToSection('workflows')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Workflows
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}