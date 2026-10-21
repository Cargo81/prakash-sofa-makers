
import { useEffect, useState } from "react";

import {
  Sofa,
  Hammer,
  Wrench,
  Home,
  Briefcase,
  Sparkles,
} from "lucide-react";


const icons = {
  Sofa,
  Hammer,
  Wrench,
  Home,
  Briefcase,
  Sparkles,
};


export default function Services() {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    fetch("https://prakash-sofa-makers.onrender.com/api/services/")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        return response.json();

      })

      .then((data) => {
        setServices(data);
      })

      .catch((error) => {
        console.error(error);
        setError(error.message);
      })

      .finally(() => {
        setLoading(false);
      });

  }, []);


  if (loading) {
    return (
      <section className="py-20">
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            Loading services...
          </p>
        </div>
      </section>
    );
  }


  if (error) {
    return (
      <section className="py-20">
        <div className="text-center">
          <p className="text-red-500">
            {error}
          </p>
        </div>
      </section>
    );
  }


  return (
    <section
      id="services"
      className="py-20 bg-gray-50"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-yellow-500 font-semibold uppercase tracking-widest">
            What We Offer
          </span>

          <h2 className="text-5xl font-black text-slate-900 mt-4">
            Luxury Furniture Services
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-5 rounded-full">
          </div>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600">
            We combine craftsmanship, comfort, and modern design
            to create furniture that lasts for years.
          </p>

        </div>


        {/* Services Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = icons[service.icon] || Sofa;

            return (

              <div
                key={service.id}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >

                {/* Gold Accent */}

                <div className="absolute top-0 left-0 h-1 w-full bg-yellow-500">
                </div>


                {/* Icon */}

                <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform">

                  <Icon
                    size={48}
                    strokeWidth={1.8}
                  />

                </div>


                {/* Title */}

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>


                {/* Description */}

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>


                {/* Hover Arrow */}

                <div className="mt-6 flex items-center text-yellow-500 font-semibold opacity-0 group-hover:opacity-100 transition">

                  Learn More →

                </div>


                {/* Background Number */}

                <div className="absolute -bottom-6 -right-4 text-8xl font-black text-slate-100 select-none">

                  {String(index + 1).padStart(2, "0")}

                </div>

              </div>

            );

          })}

        </div>


        {/* Bottom Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              5000+
            </h3>

            <p className="text-gray-600">
              Sofas Delivered
            </p>

          </div>


          <div className="text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              25+
            </h3>

            <p className="text-gray-600">
              Years Experience
            </p>

          </div>


          <div className="text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              100%
            </h3>

            <p className="text-gray-600">
              Custom Designs
            </p>

          </div>


          <div className="text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              ★★★★★
            </h3>

            <p className="text-gray-600">
              Customer Satisfaction
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

