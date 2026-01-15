import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBg = scrolled
    ? 'bg-white/95 backdrop-blur shadow-sm'
    : 'bg-transparent';

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${navbarBg} ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center px-6 transition-all duration-500">
          <div
            className={`flex-1 transition-all duration-500 ${
              scrolled ? 'flex justify-start' : 'flex justify-center'
            }`}
          >
            <img
              src="/images/navbar.webp"
              alt="Marci Metzger Homes"
              className={`transition-all duration-500 ease-out ${
                scrolled ? 'h-14' : 'h-24'
              }`}
            />
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="text-slate-800 transition hover:text-emerald-600"
            >
              <FiChevronDown size={28} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-20 right-0 z-50 transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className={`w-64 overflow-hidden rounded-b-lg shadow-lg transition-colors duration-300 ${navbarBg}`}
        >
          <ul className="flex flex-col text-lg font-medium text-slate-900">
            {['Home', 'Listings', 'About', 'Contact'].map((item, idx) => (
              <li
                key={item}
                className={`cursor-pointer px-4 py-3 hover:text-emerald-700 ${
                  idx !== 0 ? 'border-t border-slate-200' : ''
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
