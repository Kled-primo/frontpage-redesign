import React from 'react';
import { FiHome, FiDollarSign, FiBarChart2, FiMapPin } from 'react-icons/fi';

function OurServices() {
  const services = [
    {
      title: 'Buying Guidance',
      description:
        'From first-time buyers to seasoned investors, we provide insight-driven strategies to help you make informed decisions.',
      icon: <FiHome className="text-5xl text-emerald-600" />,
    },
    {
      title: 'Selling Expertise',
      description:
        'Maximize the value of your home with a tailored marketing plan, strategic positioning, and seamless selling process.',
      icon: <FiDollarSign className="text-5xl text-emerald-600" />,
    },
    {
      title: 'Property Valuations',
      description:
        'Accurate market analysis and pricing strategies to ensure your property is competitively positioned for sale or investment.',
      icon: <FiBarChart2 className="text-5xl text-emerald-600" />,
    },
    {
      title: 'Local Insights',
      description:
        'Deep understanding of Southern Nevada communities, neighborhoods, and amenities to match you with your ideal home.',
      icon: <FiMapPin className="text-5xl text-emerald-600" />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-16 text-center text-4xl font-bold text-slate-900 md:text-5xl">
          Our Services
        </h3>
        <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
          We provide comprehensive real estate services tailored to buyers,
          sellers, and investors to ensure every transaction is smooth,
          strategic, and successful.
        </p>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-white p-10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6">{service.icon}</div>

              <h4 className="mb-4 text-xl font-semibold text-slate-900 md:text-2xl">
                {service.title}
              </h4>

              <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                {service.description}
              </p>

              <div className="absolute bottom-4 left-10 h-1 w-0 rounded-full bg-emerald-600 transition-all duration-500 group-hover:w-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
