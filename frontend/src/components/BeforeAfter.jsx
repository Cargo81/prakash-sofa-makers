import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import useFetch from "../hooks/useFetch";

const API_BASE =
  import.meta.env.VITE_API_URL || "https://prakash-sofa-makers.onrender.com/api";

// Shown if /site-settings/ is unreachable
const FALLBACK_SITE = {
  projects_completed: 5000,
  years_experience: 25,
};

export default function BeforeAfter() {
  const {
    data: transformations,
    loading,
    error,
  } = useFetch("/before-after/");
  const [site, setSite] = useState(FALLBACK_SITE);

  useEffect(() => {
    fetch(`${API_BASE}/site-settings/`)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setSite({ ...FALLBACK_SITE, ...data }))
      .catch(() => {
        /* keep fallback values */
      });
  }, []);

  // Hide the section if the API is down or there is nothing to show
  if (error || (!loading && transformations.length === 0)) return null;

  const stats = [
    { value: `${site.projects_completed}+`, label: "Sofas Restored" },
    { value: `${site.years_experience}+`, label: "Years Experience" },
    { value: "100%", label: "Custom Work" },
    { value: "★★★★★", label: "Client Satisfaction" },
  ];

  return (
    <section id="before-after" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-yellow-500 font-semibold uppercase tracking-[0.25em]">
            <Sparkles size={18} />
            Before & After
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-black">
            Sofa Transformations
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            See how we transform old, damaged sofas into stunning premium
            furniture with expert craftsmanship.
          </p>
        </div>

        {/* Transformations */}
        <div className="space-y-10">
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[400px] rounded-3xl bg-slate-900 animate-pulse"
                />
              ))
            : transformations.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl"
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Before */}
                    <div className="relative group overflow-hidden">
                      <img
                        src={item.before_image}
                        alt={`${item.title} - Before`}
                        loading="lazy"
                        className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition duration-700"
                      />

                      <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full font-bold">
                        BEFORE
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative group overflow-hidden">
                      <img
                        src={item.after_image}
                        alt={`${item.title} - After`}
                        loading="lazy"
                        className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition duration-700"
                      />

                      <div className="absolute top-5 left-5 bg-green-500 text-white px-5 py-2 rounded-full font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="text-gray-400 mb-4 whitespace-pre-line">
                        {item.description}
                      </p>
                    )}

                    <div className="flex items-center text-yellow-500 font-semibold gap-2">
                      Transformation Completed
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-900 rounded-2xl p-6 text-center"
            >
              <h3 className="text-4xl font-black text-yellow-500">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}