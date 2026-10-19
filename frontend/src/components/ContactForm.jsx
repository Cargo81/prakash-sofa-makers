import { useEffect, useState } from "react";
import {
    Phone,
    MapPin,
    Clock,
    Upload,
    Sofa,
    MessageCircle,
} from "lucide-react";

const API_BASE =
    import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

const MAX_IMAGE_MB = 5;

const EMPTY_FORM = {
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    sofa_image: null,
};

// Shown if /site-settings/ is unreachable
const FALLBACK_SITE = {
    business_name: "Prakash Sofa Makers",
    phone: "+91 98214 40046",
    whatsapp: "+91 98214 40046",
    location: "Mumbai, Maharashtra",
    working_hours: "Mon - Sun : 9 AM - 9 PM",
    projects_completed: 5000,
    years_experience: 25,
};

const digitsOnly = (value) => (value || "").replace(/\D/g, "");

export default function ContactForm() {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [site, setSite] = useState(FALLBACK_SITE);

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // Load phone, location, hours and stats from the admin-managed settings
    useEffect(() => {
        fetch(`${API_BASE}/site-settings/`)
            .then((res) => (res.ok ? res.json() : Promise.reject()))
            .then((data) => setSite({ ...FALLBACK_SITE, ...data }))
            .catch(() => {
                /* keep fallback values */
            });
    }, []);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: files ? files[0] || null : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess("");
        setError("");

        // Same limit as the backend, checked before uploading
        if (
            formData.sofa_image &&
            formData.sofa_image.size > MAX_IMAGE_MB * 1024 * 1024
        ) {
            setError(`Photo must be under ${MAX_IMAGE_MB} MB.`);
            return;
        }

        setLoading(true);

        try {
            const data = new FormData();

            data.append("name", formData.name.trim());
            data.append("phone", formData.phone.trim());
            data.append("email", formData.email.trim());
            data.append("service", formData.service);
            data.append("message", formData.message.trim());

            if (formData.sofa_image) {
                data.append("sofa_image", formData.sofa_image);
            }

            // Do not set Content-Type: the browser adds the multipart boundary
            const response = await fetch(`${API_BASE}/contact/`, {
                method: "POST",
                body: data,
            });

            if (response.status === 429) {
                throw new Error(
                    `Too many requests. Please call or WhatsApp us on ${site.phone}.`
                );
            }

            // The server can return HTML on 500/502, so don't assume JSON
            let result = null;
            try {
                result = await response.json();
            } catch {
                result = null;
            }

            if (!response.ok) {
                console.error("Django validation error:", result);

                const firstFieldError = result
                    ? Object.values(result).flat()[0]
                    : null;

                throw new Error(
                    result?.detail ||
                        (typeof firstFieldError === "string"
                            ? firstFieldError
                            : null) ||
                        "Unable to submit your request. Please try again or call us."
                );
            }

            setSuccess(
                "Thank you! Your quotation request has been submitted. We will contact you shortly."
            );
            setFormData(EMPTY_FORM);

            const fileInput = document.getElementById("sofa-image");
            if (fileInput) fileInput.value = "";
        } catch (err) {
            console.error("Contact form error:", err);

            setError(
                err instanceof TypeError
                    ? "Could not reach the server. Please check your connection or call us."
                    : err.message ||
                          "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const whatsappLink = `https://wa.me/${digitsOnly(site.whatsapp)}`;

    return (
        <section
            id="contact"
            className="py-24 bg-gradient-to-b from-slate-100 to-white"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-yellow-500 font-semibold uppercase tracking-widest">
                        Get Free Quote
                    </span>

                    <h2 className="text-5xl font-black text-slate-900 mt-4">
                        Let's Build Your Dream Sofa
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        Send your requirements and receive a personalized
                        quotation from our experts.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* LEFT SIDE */}
                    <div className="bg-slate-900 text-white rounded-3xl p-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-yellow-500 p-3 rounded-xl">
                                <Sofa className="text-slate-900" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">
                                    {site.business_name}
                                </h3>

                                <p className="text-gray-400">
                                    Custom Sofa & Upholstery Experts
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Phone className="text-yellow-500" />

                                <div>
                                    <h4 className="font-semibold">Call Us</h4>

                                    <a
                                        href={`tel:${site.phone.replace(/\s/g, "")}`}
                                        className="text-gray-400 hover:text-yellow-500 transition"
                                    >
                                        {site.phone}
                                    </a>
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="flex items-start gap-4">
                                <MessageCircle className="text-yellow-500" />

                                <div>
                                    <h4 className="font-semibold">
                                        WhatsApp
                                    </h4>

                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-yellow-500 transition"
                                    >
                                        Chat with us
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <MapPin className="text-yellow-500" />

                                <div>
                                    <h4 className="font-semibold">
                                        Location
                                    </h4>

                                    <p className="text-gray-400">
                                        {site.location}
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4">
                                <Clock className="text-yellow-500" />

                                <div>
                                    <h4 className="font-semibold">
                                        Working Hours
                                    </h4>

                                    <p className="text-gray-400">
                                        {site.working_hours}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="bg-white/10 rounded-2xl p-5 text-center">
                                <h4 className="text-3xl font-black text-yellow-500">
                                    {site.projects_completed}+
                                </h4>

                                <p className="text-sm text-gray-400">
                                    Projects
                                </p>
                            </div>

                            <div className="bg-white/10 rounded-2xl p-5 text-center">
                                <h4 className="text-3xl font-black text-yellow-500">
                                    {site.years_experience}+
                                </h4>

                                <p className="text-sm text-gray-400">
                                    Years Experience
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10">
                        <form onSubmit={handleSubmit}>
                            {/* Name + Phone */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    maxLength={100}
                                    autoComplete="name"
                                    className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Mobile Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    maxLength={20}
                                    autoComplete="tel"
                                    className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>

                            {/* Email */}
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address (optional)"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="w-full border border-gray-300 p-4 rounded-xl mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Service */}
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-4 rounded-xl mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            >
                                <option value="">Select Service</option>
                                <option value="Custom Sofa Design">
                                    Custom Sofa Design
                                </option>
                                <option value="Sofa Repair">Sofa Repair</option>
                                <option value="Upholstery">Upholstery</option>
                                <option value="Cushion Replacement">
                                    Cushion Replacement
                                </option>
                                <option value="Office Furniture">
                                    Office Furniture
                                </option>
                            </select>

                            {/* Message */}
                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Tell us about your requirement..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-4 rounded-xl mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />

                            {/* Image Upload */}
                            <label className="mt-4 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-yellow-500 transition">
                                <Upload size={20} />

                                <span>
                                    {formData.sofa_image
                                        ? formData.sofa_image.name
                                        : `Upload Sofa Photo (max ${MAX_IMAGE_MB} MB)`}
                                </span>

                                <input
                                    id="sofa-image"
                                    type="file"
                                    name="sofa_image"
                                    accept="image/*"
                                    onChange={handleChange}
                                    className="hidden"
                                />
                            </label>

                            {/* Messages */}
                            <div aria-live="polite">
                                {success && (
                                    <p className="mt-4 text-green-600 font-semibold">
                                        {success}
                                    </p>
                                )}

                                {error && (
                                    <p
                                        role="alert"
                                        className="mt-4 text-red-600 font-semibold"
                                    >
                                        {error}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-6 bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl hover:scale-[1.02] transition disabled:opacity-50 disabled:hover:scale-100"
                            >
                                {loading
                                    ? "Submitting..."
                                    : "Request Free Quotation"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}