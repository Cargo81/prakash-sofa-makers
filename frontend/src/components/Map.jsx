import { MapPin, Phone } from "lucide-react";

export default function Map() {
  return (
    <section
      id="location"
      className="py-16 md:py-24 bg-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">

          <span className="text-yellow-500 font-semibold uppercase tracking-[0.25em]">
            Location
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">
            Visit Our Workshop
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="bg-slate-900 text-white rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Prakash Sofa Makers
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <MapPin className="text-yellow-500" />
                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>
                  <p className="text-gray-300">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-yellow-500" />
                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>
                  <p className="text-gray-300">
                    +91 98214 40046
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/919821440046"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-yellow-500 text-slate-900 px-6 py-3 rounded-xl font-bold"
            >
              Contact on WhatsApp
            </a>

          </div>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-xl">

            <iframe
              src="YOUR_GOOGLE_MAP_EMBED_URL"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Prakash Sofa Makers Location"
            />

          </div>

        </div>

      </div>
    </section>
  );
}