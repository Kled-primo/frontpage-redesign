import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';

function Footer() {
  const socials = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/MarciHomes/' },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/marciandlauren_nvrealtors/',
    },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/marci-metzger-30642496/',
    },
    {
      icon: <FaYelp />,
      link: 'https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w',
    },
  ];

  return (
    <footer className="bg-slate-900 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-center text-sm md:text-left">
          © {new Date().getFullYear()} Marci Metzger Homes. All rights reserved.
        </div>

        <div className="flex gap-4">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition-colors duration-300 hover:bg-emerald-600 hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
