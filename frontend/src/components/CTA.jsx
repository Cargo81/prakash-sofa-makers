import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 p-8 md:p-16">

          {/* Background Decoration */}
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="relative z-10 text-center">

            <span className="inline-block bg-black/10 text-slate-900 font-bold px-4 py-2 rounded-full mb-6">
              ✨ Free Consultation Available
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              Transform Your Old Sofa Into
              <br />
              A Luxury Masterpiece
            </h2>

            <p className="mt-6 text-lg md:text-xl text-slate-800 max-w-3xl mx-auto">
              Custom Sofa Design, Repair, Upholstery & Furniture
              Solutions. Get a free quote today and give your home
              the comfort it deserves.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

              <a
                href="https://wa.me/919821440046"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>

              <a
                href="tel:+919821440046"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                <Phone size={20} />
                Call Now
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  5000+
                </h3>
                <p className="text-slate-800">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  25+
                </h3>
                <p className="text-slate-800">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  ★★★★★
                </h3>
                <p className="text-slate-800">
                  Reviews
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900">
                  100%
                </h3>
                <p className="text-slate-800">
                  Satisfaction
                </p>
              </div>

            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-slate-900 font-bold">
              Get Your Free Quote Today
              <ArrowRight size={18} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}