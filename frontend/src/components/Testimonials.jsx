import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import useFetch from "../hooks/useFetch";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://prakash-sofa-makers.onrender.com/api";

// Shown if /site-settings/ is unreachable
const FALLBACK_SITE = {
  whatsapp: "+91 98214 40046",
  projects_completed: 5000,
  customer_rating: "4.9",
  years_experience: 25,
  satisfaction: 100,
};

const digitsOnly = (value) => (value || "").replace(/\D/g, "");

export default function Testimonials() {
  const { data: reviews, loading, error } = useFetch("/testimonials/");
  const [site, setSite] = useState(FALLBACK_SITE);

  useEffect(() => {
    fetch(`${API_BASE}/site-settings/`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setSite({ ...FALLBACK_SITE, ...data }))
      .catch(() => {
        /* keep fallback values */
      });
  }, []);

  // Hide the section if the API is down or there are no reviews yet
  if (error || (!loading && reviews.length === 0)) return null;

  const stats = [
    { value: `${site.projects_completed}+`, label: "Happy Customers" },
    { value: site.customer_rating, label: "Average Rating" },
    { value: `${site.years_experience}+`, label: "Years Experience" },
    { value: `${site.satisfaction}%`, label: "Satisfaction" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-yellow-500 uppercase tracking-[0.3em] font-semibold">
            Client Stories
          </span>

          <h2 className="text-5xl font-black mt-4">
            What Our Customers Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Trusted by hundreds of homeowners for custom sofa design,
            upholstery, and furniture restoration.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-64 rounded-3xl bg-white/5 animate-pulse"
                />
              ))
            : reviews.map((review) => {
                const rating = Math.min(Math.max(review.rating, 0), 5);

                return (
                  <div
                    key={review.id}
                    className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-500"
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-yellow-500/30">
                      <Quote size={50} />
                    </div>

                    {/* Rating */}
                    <div
                      className="flex gap-1 mb-5"
                      role="img"
                      aria-label={`${rating} out of 5 stars`}
                    >
                      {Array.from({ length: rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className="fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="text-gray-300 leading-relaxed mb-8">
                      "{review.message}"
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4">
                      {review.image ? (
                        <img
                          src={review.image}
                          alt={review.name}
                          loading="lazy"
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 flex items-center justify-center text-slate-900 font-bold text-lg">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div>
                        <h4 className="font-bold text-lg">{review.name}</h4>

                        {review.location && (
                          <p className="text-gray-400 text-sm">
                            {review.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="text-5xl font-black text-yellow-500">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl p-10">
          <h3 className="text-3xl font-black text-slate-900">
            Ready to Upgrade Your Sofa?
          </h3>

          <p className="text-slate-800 mt-3">
            Get a free consultation and quotation today.
          </p>

          <a
            href={`https://wa.me/${digitsOnly(site.whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  );
}