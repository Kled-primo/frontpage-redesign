import React, { useState, useRef } from 'react';

function Listings() {
  const properties = [
    {
      id: 1,
      price: '$598,900',
      location: '2061 Iroquois Ave, Pahrump, NV 89048',
      beds: 3,
      baths: 3,
      sqft: 2802,
      images: [
        '/images/listings/1/1.webp',
        '/images/listings/1/2.webp',
        '/images/listings/1/3.webp',
      ],
      height: 'h-80',
    },
    {
      id: 2,
      price: '$435,000',
      location: '5528 Eleganza Ave, Pahrump, NV 89061',
      beds: 3,
      baths: 3,
      sqft: 2043,
      images: [
        '/images/listings/2/1.webp',
        '/images/listings/2/2.webp',
        '/images/listings/2/3.webp',
      ],
      height: 'h-96',
    },
    {
      id: 3,
      price: '$969,000',
      location: '2851 Winchester Ave, Pahrump, NV 89048',
      beds: 4,
      baths: 4,
      sqft: 2877,
      images: [
        '/images/listings/3/1.webp',
        '/images/listings/3/2.webp',
        '/images/listings/3/3.webp',
      ],
      height: 'h-72',
    },
  ];

  const [currentImages, setCurrentImages] = useState(properties.map(() => 0));
  const intervalsRef = useRef([]);

  const handleMouseEnter = (index) => {
    if (intervalsRef.current[index]) return;

    intervalsRef.current[index] = setInterval(() => {
      setCurrentImages((prev) =>
        prev.map((imgIndex, i) =>
          i === index ? (imgIndex + 1) % properties[i].images.length : imgIndex
        )
      );
    }, 1000);
  };

  const handleMouseLeave = (index) => {
    clearInterval(intervalsRef.current[index]);
    intervalsRef.current[index] = null;
    setCurrentImages((prev) =>
      prev.map((imgIndex, i) => (i === index ? 0 : imgIndex))
    );
  };

  return (
    <section
      id="listings"
      className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="mb-16 text-center text-4xl font-semibold text-slate-900 md:text-5xl">
          Featured Listings
        </h3>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`relative mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className={`relative ${property.height} overflow-hidden`}>
                <img
                  src={property.images[currentImages[index]]}
                  alt={property.location}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-md">
                  Featured
                </span>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900">
                  {property.price} – {property.location}
                </h4>
                <p className="mt-2 text-sm text-slate-500">
                  {property.beds} Beds • {property.baths} Baths •{' '}
                  {property.sqft} sqft
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
}

export default Listings;
