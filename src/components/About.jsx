import React from 'react';

function About() {
  return (
    <section className="flex min-h-screen items-center bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-6 text-xl font-medium tracking-widest text-emerald-600 uppercase">
              About Marci Metzger
            </p>

            <h2 className="mb-8 text-4xl leading-tight font-semibold text-slate-900 md:text-5xl">
              Experience Rooted in Trust, Strategy, and Results
            </h2>

            <div className="max-w-xl space-y-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              <p>
                Marci Metzger is a seasoned real estate professional serving
                Southern Nevada, with a career defined by market expertise,
                strategic guidance, and unwavering client advocacy.
              </p>

              <p>
                From first-time buyers to seasoned investors, Marci provides
                clarity throughout every stage of the process—ensuring each
                decision is informed, confident, and aligned with long-term
                goals.
              </p>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute top-1/2 right-60 z-10 hidden h-[28rem] w-72 -translate-y-1/2 overflow-hidden md:block">
              <img
                src="/images/marci.png"
                alt="Marci Metzger, Broker and Owner"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative rounded-3xl border border-[#E7E5E4] bg-[#FAFAF9] p-12 shadow-xl md:pl-40">
              <span className="absolute -top-4 -left-4 font-serif text-8xl leading-none text-emerald-600">
                “
              </span>

              <blockquote className="mb-8 max-w-xl text-xl leading-relaxed text-slate-700 md:text-xl">
                I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there's a place for
                you here! I enjoy living in the Mountain Falls community and
                will strive to find you a home that will suit you just as this
                community does me.
              </blockquote>

              <div className="text-m font-medium text-slate-500">
                — Marci Metzger, Broker / Owner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
