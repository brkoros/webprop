export default function BadilishaPropertiesWebsite() {
  const featuredProperties = [
    {
      title: 'Luxury Apartments - Westlands',
      price: 'KES 24M',
      location: 'Nairobi, Kenya',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Modern Villas - Karen',
      price: 'KES 65M',
      location: 'Karen, Nairobi',
      image:
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Commercial Spaces',
      price: 'KES 120M',
      location: 'Upper Hill',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const services = [
    'Property Management',
    'Property Listings',
    'Property Swaps',
    'Investment Advisory',
    'Tenant Management',
    'Secure Transactions',
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-900">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B1F3A]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-black tracking-wide text-white">
              Badilisha <span className="text-[#D4A537]">Properties</span>
            </h1>
          </div>

          <nav className="hidden gap-8 md:flex">
            {[
              'Home',
              'Properties',
              'Management',
              'Investments',
              'Swap',
              'Blog',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-white transition hover:text-[#D4A537]"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="rounded-full bg-[#D4A537] px-5 py-2 text-sm font-semibold text-[#0B1F3A] shadow-lg transition hover:scale-105">
            List Property
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0B1F3A] pt-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/90 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-[#D4A537]/30 bg-white/10 px-4 py-2 text-sm text-[#D4A537] backdrop-blur-lg">
              Premium Property Marketplace in Kenya
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Transforming Property Ownership & Management
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-slate-300">
              Buy, Sell, Swap, Rent, and Manage Properties Seamlessly Across Kenya with a premium digital real estate experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#D4A537] px-8 py-4 font-semibold text-[#0B1F3A] shadow-2xl transition hover:scale-105">
                Browse Properties
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-lg transition hover:bg-white/20">
                List Your Property
              </button>
            </div>
          </div>

          {/* SEARCH PANEL */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
            <h3 className="mb-6 text-2xl font-bold text-white">
              Find Your Next Property
            </h3>

            <div className="grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-slate-300"
                placeholder="Location"
              />

              <select className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <option>Property Type</option>
              </select>

              <select className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <option>Budget</option>
              </select>

              <select className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white">
                <option>Buy / Rent / Swap</option>
              </select>

              <button className="mt-4 rounded-2xl bg-[#D4A537] p-4 font-bold text-[#0B1F3A] transition hover:scale-[1.02]">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
          {[
            ['1,200+', 'Properties Managed'],
            ['8,500+', 'Happy Clients'],
            ['32+', 'Counties Covered'],
            ['3,000+', 'Successful Transactions'],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg"
            >
              <h2 className="mb-2 text-4xl font-black text-[#0B1F3A]">
                {number}
              </h2>
              <p className="text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#D4A537]">
                Featured Listings
              </p>
              <h2 className="text-4xl font-black text-[#0B1F3A]">
                Premium Properties Across Kenya
              </h2>
            </div>

            <button className="rounded-full border border-slate-300 px-6 py-3 font-semibold transition hover:bg-[#0B1F3A] hover:text-white">
              View All
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <div
                key={property.title}
                className="overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#D4A537] px-4 py-2 text-sm font-bold text-[#0B1F3A]">
                    Featured
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">
                      {property.title}
                    </h3>
                    <span className="text-xl font-black text-[#D4A537]">
                      {property.price}
                    </span>
                  </div>

                  <p className="mb-6 text-slate-500">{property.location}</p>

                  <div className="mb-6 flex gap-3 text-sm text-slate-600">
                    <span className="rounded-full bg-slate-100 px-4 py-2">
                      4 Beds
                    </span>
                    <span className="rounded-full bg-slate-100 px-4 py-2">
                      3 Baths
                    </span>
                    <span className="rounded-full bg-slate-100 px-4 py-2">
                      Parking
                    </span>
                  </div>

                  <button className="w-full rounded-2xl bg-[#0B1F3A] py-4 font-semibold text-white transition hover:bg-[#132b4f]">
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0B1F3A] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#D4A537]">
              Why Choose Us
            </p>
            <h2 className="text-5xl font-black">
              A Modern Real Estate Ecosystem
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-[#D4A537]/50"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A537] text-2xl font-black text-[#0B1F3A]">
                  ✦
                </div>

                <h3 className="mb-4 text-2xl font-bold">{service}</h3>

                <p className="leading-relaxed text-slate-300">
                  Delivering premium property experiences across Kenya through innovation, trust, and seamless digital solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY SWAP */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#D4A537]">
              Property Swap
            </p>

            <h2 className="mb-6 text-5xl font-black text-[#0B1F3A]">
              Trade-In Your Property Seamlessly
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Badilisha Properties introduces modern property swapping solutions designed for Kenya’s evolving real estate market.
            </p>

            <div className="space-y-4">
              {[
                'Property Valuation & Verification',
                'AI-Powered Matching',
                'Legal Documentation Support',
                'Secure Transfer Process',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A537] font-black text-[#0B1F3A]">
                    ✓
                  </div>
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
              alt="Property Swap"
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl">
              <h3 className="mb-2 text-2xl font-bold text-white">
                Smart Property Matching
              </h3>
              <p className="text-slate-200">
                Match buyers, sellers, and investors intelligently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENTS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.3em] text-[#D4A537]">
              Investments
            </p>
            <h2 className="text-5xl font-black text-[#0B1F3A]">
              Explore High-Growth Investment Opportunities
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-4">
            {[
              'Land Banking',
              'Luxury Apartments',
              'Commercial Real Estate',
              'Agricultural Investments',
            ].map((item) => (
              <div
                key={item}
                className="rounded-[32px] border border-slate-200 bg-[#F5F7FA] p-8 shadow-lg transition hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex rounded-full bg-[#D4A537]/10 px-4 py-2 text-sm font-bold text-[#D4A537]">
                  ROI 18%+
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[#0B1F3A]">
                  {item}
                </h3>

                <p className="mb-6 text-slate-600">
                  Premium investment opportunities across Kenya and East Africa.
                </p>

                <button className="font-semibold text-[#0B1F3A]">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0B1F3A] py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] to-[#132b4f]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-black">
            Ready to Transform Your Property Journey?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
            Join Kenya’s next-generation property ecosystem built for investors, homeowners, tenants, and developers.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#D4A537] px-8 py-4 font-bold text-[#0B1F3A] transition hover:scale-105">
              Contact Us
            </button>

            <button className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-lg transition hover:bg-white/20">
              Start Investing
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#081526] py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-3xl font-black">
              Badilisha <span className="text-[#D4A537]">Properties</span>
            </h2>

            <p className="leading-relaxed text-slate-400">
              Premium real estate, investment, and property management solutions across Kenya.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Home</li>
              <li>Properties</li>
              <li>Investments</li>
              <li>Property Swap</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Property Management</li>
              <li>Tenant Management</li>
              <li>Property Valuation</li>
              <li>Investment Advisory</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Nairobi, Kenya</li>
              <li>info@badilishaproperties.co.ke</li>
              <li>+254 700 000 000</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-white/10 pt-8 px-6 text-center text-slate-500">
          © 2026 Badilisha Properties. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
