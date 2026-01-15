import React from 'react';

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="h-full w-full scale-100 bg-[url('/images/hero.webp')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/35 to-white/20" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-6 flex translate-y-6 items-center gap-6 opacity-0 motion-safe:animate-[fadeUp_0.8s_ease-out_forwards]">
            <span className="h-px w-12 bg-emerald-600" />
            <p className="text-sm font-medium tracking-widest text-emerald-600 uppercase">
              Southern Nevada Real Estate
            </p>
          </div>

          <div className="grid items-end gap-12 md:grid-cols-12">
            <div className="translate-y-6 opacity-0 motion-safe:animate-[fadeUp_0.9s_ease-out_0.1s_forwards] md:col-span-7">
              <h1 className="mb-6 text-[clamp(2.5rem,4.5vw,4rem)] leading-tight font-semibold text-slate-900">
                Strategic Guidance for Buying & Selling Exceptional Homes
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-800">
                With decades of local experience, Marci Metzger delivers
                insight-driven strategies and a refined client experience across
                Pahrump and the greater Las Vegas area.
              </p>
            </div>

            <div className="translate-y-6 space-y-10 opacity-0 motion-safe:animate-[fadeUp_1s_ease-out_0.2s_forwards] md:col-span-5">
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    document
                      .getElementById('listings')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="relative overflow-hidden rounded-md bg-emerald-700 px-9 py-3.5 font-medium tracking-wide text-white shadow-lg shadow-emerald-700/25 transition-all duration-300 hover:scale-[1.04] hover:bg-emerald-800 hover:shadow-xl"
                >
                  View Featured Listings
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="rounded-md border border-slate-300 bg-white/90 px-9 py-3.5 font-medium tracking-wide text-slate-800 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg"
                >
                  Contact Marci
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-2xl font-semibold text-slate-900">30+</p>
                  <p className="text-slate-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    1,000+
                  </p>
                  <p className="text-slate-600">Homes Sold</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-slate-900">
                    Top 1%
                  </p>
                  <p className="text-slate-600">Local Agent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;
