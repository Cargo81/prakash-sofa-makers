import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useFetch from "../hooks/useFetch";

export default function FAQ() {
  const { data: faqs, loading, error } = useFetch("/faq/");
  const [open, setOpen] = useState(null);

  // Hide the section if the API is down or there are no FAQs yet
  if (error || (!loading && faqs.length === 0)) return null;

  const toggleFAQ = (id) => setOpen(open === id ? null : id);

  return (
    <section id="faq" className="py-20 bg-gray-50">
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
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 rounded-2xl bg-gray-200 animate-pulse"
                />
              ))
            : faqs.map((faq) => {
                const isOpen = open === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="border rounded-2xl overflow-hidden shadow-sm bg-white"
                  >
                    {/* Question */}
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggleFAQ(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${faq.id}`}
                        className="w-full flex items-center justify-between gap-4 p-5 bg-white hover:bg-gray-50 text-left"
                      >
                        <span className="font-semibold text-slate-900">
                          {faq.question}
                        </span>

                        {isOpen ? (
                          <ChevronUp className="shrink-0 text-yellow-500" />
                        ) : (
                          <ChevronDown className="shrink-0 text-gray-500" />
                        )}
                      </button>
                    </h3>

                    {/* Answer */}
                    {isOpen && (
                      <div
                        id={`faq-panel-${faq.id}`}
                        className="px-5 pb-5 text-gray-600 leading-relaxed whitespace-pre-line"
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}