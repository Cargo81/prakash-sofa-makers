import { Sofa, Star, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      {/* Decorative Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-yellow-500/20 border border-yellow-500 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Luxury Sofa Experts Since 2001
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Crafting
              <span className="text-yellow-500"> Comfort </span>
              Designing
              <span className="text-yellow-500"> Luxury </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-xl">
              Custom Sofa Manufacturing, Repair, Upholstery &
              Premium Furniture Solutions tailored to your home.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#gallery"
                className="bg-yellow-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                View Collection
              </a>

              <a
                href="https://wa.me/919821440046"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition"
              >
                Get Free Quote
              </a>

            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 mt-12">

              <div className="flex items-center gap-2 text-gray-300">
                <ShieldCheck className="text-yellow-500" />
                Quality Guaranteed
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Truck className="text-yellow-500" />
                Home Service
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Star className="text-yellow-500" />
                5 Star Reviews
              </div>

            </div>

          </div>

          {/* Right Side Floating Cards */}
          <div className="hidden lg:flex justify-center">

            <div className="relative">

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-80">

                <div className="flex justify-center mb-6">
                  <div className="bg-yellow-500 p-4 rounded-2xl">
                    <Sofa size={48} className="text-slate-900" />
                  </div>
                </div>

                <h3 className="text-center text-white text-2xl font-bold">
                  Premium Sofa Collection
                </h3>

                <p className="text-center text-gray-300 mt-4">
                  Modern designs with premium materials and expert craftsmanship.
                </p>

              </div>

              {/* Floating Stat Card */}
              <div className="absolute -top-8 -left-8 bg-white text-slate-900 p-5 rounded-2xl shadow-xl">
                <h4 className="text-3xl font-black text-yellow-500">
                  5000+
                </h4>
                <p>Projects Completed</p>
              </div>

              {/* Floating Rating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white text-slate-900 p-5 rounded-2xl shadow-xl">
                <h4 className="text-3xl font-black text-yellow-500">
                  ★★★★★
                </h4>
                <p>Customer Rating</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

  );
}
