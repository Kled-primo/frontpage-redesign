import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="bg-[#FAFAF9] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-20 text-center text-5xl font-bold text-slate-900 md:text-6xl">
          Contact Us
        </h3>

        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="space-y-10">
            <ul className="space-y-6 text-lg text-slate-700">
              <li className="flex items-center gap-4 text-xl font-semibold text-slate-900">
                Marci Metzger - THE RIDGE REALTY GROUP
              </li>
              <li className="flex items-center gap-4">
                <FiPhone className="text-2xl text-emerald-600" />
                <span>(206) 919-6886</span>
              </li>
              <li className="flex items-center gap-4">
                <FiMail className="text-2xl text-emerald-600" />
                <span>marci.metzger@example.com</span>
              </li>
              <li className="flex items-center gap-4">
                <FiMapPin className="text-2xl text-emerald-600" />
                <span>
                  3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FiClock className="text-2xl text-emerald-600" />
                <span>
                  8:00 AM – 7:00 PM
                  <br />
                </span>
              </li>
            </ul>

            <p className="max-w-lg text-lg leading-relaxed text-slate-500">
              Marci Metzger is available to answer your questions, schedule
              viewings, and provide personalized guidance on buying or selling
              your home. Reach out via phone or email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <img src="/images/rrr.png" alt="Ridge Logo" className="h-20" />
              <img
                src="/images/eho.png"
                alt="Equal Housing Opportunity Logo"
                className="h-20"
              />
              <img
                src="/images/realtor.png"
                alt="Realtor Logo"
                className="h-20"
              />
              <img
                src="/images/chamber.png"
                alt="Chamber of Commerce Logo"
                className="h-20"
              />
            </div>
          </div>

          <div className="h-[500px] overflow-hidden rounded-3xl shadow-2xl md:h-[600px]">
            <iframe
              title="Pahrump, NV Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-116.145%2C36.15%2C-115.95%2C36.27&layer=mapnik&marker=36.2075%2C-116.0418"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
