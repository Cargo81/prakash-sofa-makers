
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";


const BASE_URL = "http://127.0.0.1:8000";


export default function BeforeAfter() {

  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    fetch(`${BASE_URL}/api/before-after/`)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch transformations");
        }

        return response.json();

      })

      .then((data) => {
        setTransformations(data);
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
      <section className="py-20 bg-slate-950 text-white">

        <div className="text-center">

          <p className="text-gray-400">
            Loading transformations...
          </p>

        </div>

      </section>
    );

  }


  if (error) {

    return (
      <section className="py-20 bg-slate-950 text-white">

        <div className="text-center">

          <p className="text-red-400">
            {error}
          </p>

        </div>

      </section>
    );

  }


  return (

    <section className="py-20 bg-slate-950 text-white">

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

            See how we transform old, damaged sofas into stunning
            premium furniture with expert craftsmanship.

          </p>

        </div>


        {/* Transformations */}

        <div className="space-y-10">

          {transformations.map((item) => (

            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl"
            >

              <div className="grid lg:grid-cols-2">


                {/* Before */}

                <div className="relative group overflow-hidden">

                  <img
                    src={`${BASE_URL}${item.before_image}`}
                    alt={`${item.title} - Before`}
                    className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition duration-700"
                  />


                  <div className="absolute top-5 left-5 bg-red-500 text-white px-5 py-2 rounded-full font-bold">

                    BEFORE

                  </div>

                </div>


                {/* After */}

                <div className="relative group overflow-hidden">

                  <img
                    src={`${BASE_URL}${item.after_image}`}
                    alt={`${item.title} - After`}
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

                  <p className="text-gray-400 mb-4">

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


          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              5000+
            </h3>

            <p className="text-gray-400 mt-2">
              Sofas Restored
            </p>

          </div>


          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              25+
            </h3>

            <p className="text-gray-400 mt-2">
              Years Experience
            </p>

          </div>


          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              100%
            </h3>

            <p className="text-gray-400 mt-2">
              Custom Work
            </p>

          </div>


          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <h3 className="text-4xl font-black text-yellow-500">
              ★★★★★
            </h3>

            <p className="text-gray-400 mt-2">
              Client Satisfaction
            </p>

          </div>


        </div>

      </div>

    </section>

  );

}