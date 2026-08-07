
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export default function FAQ() {

  const [faqs, setFaqs] = useState([]);
  const [open, setOpen] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch FAQs from Django
  useEffect(() => {

    fetch("http://127.0.0.1:8000/api/faq/")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }

        return response.json();

      })

      .then((data) => {

        console.log("FAQs:", data);

        setFaqs(data);

      })

      .catch((error) => {

        console.error(error);

        setError(error.message);

      })

      .finally(() => {

        setLoading(false);

      });

  }, []);


  // Open / close FAQ
  const toggleFAQ = (index) => {

    setOpen(
      open === index
        ? null
        : index
    );

  };


  // Loading
  if (loading) {

    return (

      <section className="py-20">

        <div className="text-center">

          <p className="text-gray-500">
            Loading FAQs...
          </p>

        </div>

      </section>

    );

  }


  // Error
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
      id="faq"
      className="py-20 bg-gray-50"
    >

      <div className="max-w-4xl mx-auto px-6">


        {/* Header */}

        <div className="text-center mb-16">

          <span className="text-yellow-500 font-semibold uppercase tracking-[0.25em]">

            FAQ

          </span>


          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4">

            Frequently Asked Questions

          </h2>


          <p className="text-gray-600 mt-4">

            Find answers to common questions about our sofa services.

          </p>

        </div>


        {/* FAQ List */}

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={faq.id}
              className="border rounded-2xl overflow-hidden shadow-sm bg-white"
            >


              {/* Question */}

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-gray-50 text-left"
              >

                <span className="font-semibold text-slate-900">

                  {faq.question}

                </span>


                {open === index ? (

                  <ChevronUp className="text-yellow-500" />

                ) : (

                  <ChevronDown className="text-gray-500" />

                )}

              </button>


              {/* Answer */}

              {open === index && (

                <div className="px-5 pb-5 text-gray-600 leading-relaxed">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}
