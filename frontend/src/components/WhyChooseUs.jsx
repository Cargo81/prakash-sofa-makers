import {
  ShieldCheck,
  Sofa,
  Truck,
  BadgeIndianRupee,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Sofa size={32} />,
    title: "Custom Sofa Designs",
    description:
      "Unique sofa designs tailored to your space, style, and comfort requirements.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Premium Materials",
    description:
      "High-quality fabrics, foam, wood, and finishing for long-lasting durability.",
  },
  {
    icon: <Users size={32} />,
    title: "Expert Craftsmanship",
    description:
      "Skilled furniture makers with years of experience in sofa manufacturing and repair.",
  },
  {
    icon: <Truck size={32} />,
    title: "Home Visit Service",
    description:
      "Free consultation, measurement, and fabric selection at your doorstep.",
  },
  {
    icon: <BadgeIndianRupee size={32} />,
    title: "Affordable Pricing",
    description:
      "Luxury-quality furniture solutions at competitive and transparent prices.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Quality Guarantee",
    description:
      "Every project is completed with attention to detail and customer satisfaction.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">

          <span className="inline-block text-yellow-500 uppercase tracking-[0.25em] font-semibold text-xs sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-4">
            Experience The Difference
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 px-2 text-sm sm:text-base md:text-lg leading-relaxed">
            We combine premium craftsmanship, quality materials,
            and personalized service to deliver furniture that
            enhances your living space and lasts for years.
          </p>

        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-yellow-300"
            >

              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

        {/* Trust Banner */}
        <div className="mt-16 md:mt-20 bg-slate-900 rounded-3xl p-6 md:p-10 text-white overflow-hidden relative">

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-4xl font-black">
                Trusted By Thousands Of Customers
              </h3>

              <p className="text-gray-400 mt-3">
                Delivering comfort, quality, and craftsmanship for over 25 years.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">

              <div>
                <h4 className="text-3xl md:text-5xl font-black text-yellow-500">
                  5000+
                </h4>

                <p className="mt-2 text-gray-300 text-sm md:text-base">
                  Projects Completed
                </p>
              </div>

              <div>
                <h4 className="text-3xl md:text-5xl font-black text-yellow-500">
                  25+
                </h4>

                <p className="mt-2 text-gray-300 text-sm md:text-base">
                  Years Experience
                </p>
              </div>

              <div>
                <h4 className="text-3xl md:text-5xl font-black text-yellow-500">
                  100%
                </h4>

                <p className="mt-2 text-gray-300 text-sm md:text-base">
                  Custom Solutions
                </p>
              </div>

              <div>
                <h4 className="text-3xl md:text-5xl font-black text-yellow-500">
                  ★★★★★
                </h4>

                <p className="mt-2 text-gray-300 text-sm md:text-base">
                  Customer Satisfaction
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}