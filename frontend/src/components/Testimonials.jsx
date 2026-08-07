
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";


const BASE_URL = "http://127.0.0.1:8000";


export default function Testimonials() {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    fetch(`${BASE_URL}/api/testimonials/`)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }

        return response.json();

      })

      .then((data) => {
        setReviews(data);
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
            Loading customer reviews...
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

    <section
      id="testimonials"
      className="py-20 bg-slate-950 text-white"
    >

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

          {reviews.map((review) => (

            <div
              key={review.id}
              className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 hover:-translate-y-2 transition-all duration-500"
            >


              {/* Quote Icon */}

              <div className="absolute top-6 right-6 text-yellow-500/30">

                <Quote size={50} />

              </div>


              {/* Rating */}

              <div className="flex gap-1 mb-5">

                {[...Array(review.rating)].map((_, i) => (

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


                {/* User Image / Initial */}

                {review.image ? (

                  <img
                    src={`${BASE_URL}${review.image}`}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                ) : (

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 flex items-center justify-center text-slate-900 font-bold text-lg">

                    {review.name.charAt(0)}

                  </div>

                )}


                <div>

                  <h4 className="font-bold text-lg">

                    {review.name}

                  </h4>


                  <p className="text-gray-400 text-sm">

                    {review.location}

                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* Trust Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">


          <div className="text-center">

            <h3 className="text-5xl font-black text-yellow-500">

              5000+

            </h3>

            <p className="text-gray-400 mt-2">

              Happy Customers

            </p>

          </div>


          <div className="text-center">

            <h3 className="text-5xl font-black text-yellow-500">

              4.9

            </h3>

            <p className="text-gray-400 mt-2">

              Average Rating

            </p>

          </div>


          <div className="text-center">

            <h3 className="text-5xl font-black text-yellow-500">

              25+

            </h3>

            <p className="text-gray-400 mt-2">

              Years Experience

            </p>

          </div>


          <div className="text-center">

            <h3 className="text-5xl font-black text-yellow-500">

              100%

            </h3>

            <p className="text-gray-400 mt-2">

              Satisfaction

            </p>

          </div>

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
            href="https://wa.me/919821440046"
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
