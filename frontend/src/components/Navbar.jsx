import { useState } from "react";
import { Menu, X, Sofa } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">


      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-yellow-500 p-2 rounded-xl">
              <Sofa className="text-slate-900" size={24} />
            </div>

            <div>
              <h1 className="text-xl md:text-2xl font-black text-white">
                Prakash
              </h1>

              <p className="text-xs text-yellow-500 tracking-widest uppercase">
                Sofa Makers
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-500 transition font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/919821440046"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-slate-900 px-5 py-2.5 rounded-full font-bold hover:scale-105 transition"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-slate-900 rounded-2xl p-6">

            <ul className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 hover:text-yellow-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

            <a
              href="https://wa.me/919821440046"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-center bg-yellow-500 text-slate-900 py-3 rounded-xl font-bold"
            >
              WhatsApp Now
            </a>

          </div>
        )}

      </div>
    </nav>

  );
}
