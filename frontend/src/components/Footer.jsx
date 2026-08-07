export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl font-black">
          PSM
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl p-8 mb-16 text-slate-900 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-3xl font-bold">
                Ready to Transform Your Sofa?
              </h2>

              <p className="mt-2 text-lg">
                Send us a photo and get a free quotation within minutes.
              </p>
            </div>

            <a
              href="https://wa.me/919821440046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Get Free Quote →
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-4xl font-black text-yellow-500 mb-4">
              Prakash
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Premium Sofa Manufacturing, Repair, Upholstery &
              Custom Furniture Solutions crafted with precision.
            </p>

            <div className="flex gap-3 mt-6">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Luxury Sofa Design</li>
              <li>Sofa Repair</li>
              <li>Upholstery Work</li>
              <li>Cushion Replacement</li>
              <li>Office Furniture</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-yellow-500">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-yellow-500">
                  Services
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-yellow-500">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-5">
                Contact
              </h4>

              <div className="space-y-4 text-gray-300">
                <p>📞 +91 98214 40046</p>

                <p>📍 Mumbai, Maharashtra</p>

                <p>🕒 Mon - Sun</p>

                <p>⭐ Trusted by Hundreds of Customers</p>
              </div>

              <a
                href="https://wa.me/919821440046"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 text-center bg-green-500 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
              >
                WhatsApp Now
              </a>
            </div>
          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t border-slate-800 pt-10">

          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">
              5000+
            </h3>
            <p className="text-gray-400">
              Sofas Delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">
              25+
            </h3>
            <p className="text-gray-400">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">
              100%
            </h3>
            <p className="text-gray-400">
              Custom Designs
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-500">
              ★★★★★
            </h3>
            <p className="text-gray-400">
              Customer Rating
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500">

          <p>
            © {new Date().getFullYear()} Prakash Sofa Makers
          </p>

          <p>
            Crafted with Comfort • Designed with Luxury
          </p>

        </div>

      </div>
    </footer>
  );
}