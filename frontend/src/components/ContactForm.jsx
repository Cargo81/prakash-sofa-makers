
import { useState } from "react";
import {
    Phone,
    MapPin,
    Clock,
    Upload,
    Sofa,
} from "lucide-react";


const API_URL = "http://127.0.0.1:8000/api/contact/";


export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
        sofa_image: null,
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    const handleChange = (e) => {

        const { name, value, files } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: files ? files[0] : value,
        }));
    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");


        try {

            const data = new FormData();

            data.append("name", formData.name);
            data.append("phone", formData.phone);
            data.append("email", formData.email);
            data.append("service", formData.service);
            data.append("message", formData.message);


            if (formData.sofa_image) {
                data.append(
                    "sofa_image",
                    formData.sofa_image
                );
            }


            const response = await fetch(API_URL, {
                method: "POST",
                body: data,
            });


            const result = await response.json();


            if (!response.ok) {

                console.error(
                    "Django validation error:",
                    result
                );

                const errorMessage =
                    result?.detail ||
                    result?.phone?.[0] ||
                    result?.name?.[0] ||
                    result?.email?.[0] ||
                    result?.message?.[0] ||
                    result?.sofa_image?.[0] ||
                    "Unable to submit quotation request.";

                throw new Error(errorMessage);
            }


            console.log(
                "Inquiry created:",
                result
            );


            setSuccess(
                "Thank you! Your quotation request has been submitted."
            );


            setFormData({
                name: "",
                phone: "",
                email: "",
                service: "",
                message: "",
                sofa_image: null,
            });


            const fileInput =
                document.getElementById("sofa-image");

            if (fileInput) {
                fileInput.value = "";
            }


        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );

            setError(
                error.message ||
                "Something went wrong. Please try again."
            );

        } finally {

            setLoading(false);

        }
    };


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

                        Send your requirements and receive a
                        personalized quotation from our experts.

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

                                    Prakash Sofa Makers

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

                                    <h4 className="font-semibold">
                                        Call Us
                                    </h4>

                                    <p className="text-gray-400">
                                        +91 98214 40046
                                    </p>

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
                                        Mumbai, Maharashtra
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
                                        Mon - Sun : 9 AM - 9 PM
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* Stats */}

                        <div className="grid grid-cols-2 gap-4 mt-10">

                            <div className="bg-white/10 rounded-2xl p-5 text-center">

                                <h4 className="text-3xl font-black text-yellow-500">
                                    5000+
                                </h4>

                                <p className="text-sm text-gray-400">
                                    Projects
                                </p>

                            </div>


                            <div className="bg-white/10 rounded-2xl p-5 text-center">

                                <h4 className="text-3xl font-black text-yellow-500">
                                    25+
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
                                    className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />


                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Mobile Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />

                            </div>


                            {/* Email */}

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-4 rounded-xl mt-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />


                            {/* Service */}

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-4 rounded-xl mt-4"
                            >

                                <option value="">
                                    Select Service
                                </option>

                                <option value="Custom Sofa Design">
                                    Custom Sofa Design
                                </option>

                                <option value="Sofa Repair">
                                    Sofa Repair
                                </option>

                                <option value="Upholstery">
                                    Upholstery
                                </option>

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
                                className="w-full border border-gray-300 p-4 rounded-xl mt-4"
                            />


                            {/* Image Upload */}

                            <label className="mt-4 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-yellow-500 transition">

                                <Upload size={20} />

                                <span>

                                    {formData.sofa_image
                                        ? formData.sofa_image.name
                                        : "Upload Sofa Photo"}

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


                            {/* Success */}

                            {success && (

                                <p className="mt-4 text-green-600 font-semibold">

                                    {success}

                                </p>

                            )}


                            {/* Error */}

                            {error && (

                                <p className="mt-4 text-red-600 font-semibold">

                                    {error}

                                </p>

                            )}


                            {/* Submit */}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-6 bg-yellow-500 text-slate-900 font-bold py-4 rounded-xl hover:scale-[1.02] transition disabled:opacity-50"
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
