import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  AlertCircle,
} from "lucide-react";
import SectionHeader from "../components/SectionHeader";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Solar",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (data = formData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^(?:\+977|0)?[97]\d{9}$/.test(data.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid Nepal number (e.g. +977 98XXXXXXXX)";
    }

    if (!data.message.trim()) {
      newErrors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate());
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      setErrors(validate(updated));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Thank you for your inquiry! We will contact you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Solar",
        message: "",
      });
      setTouched({});
      setErrors({});
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-gray-50 border-0 rounded-xl px-4 py-4 text-base focus:ring-2 outline-none transition-all ${
      errors[field as keyof FormErrors] && touched[field]
        ? "ring-2 ring-red-400 bg-red-50"
        : "focus:ring-green-600"
    }`;

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader
          title="Get in Touch"
          subtitle="Ready to start your green energy journey? Contact us today for a free consultation and quote."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">
                  Call Us
                </h4>
                <p className="text-gray-600 text-base">+977-98011 95043</p>
                {/* <p className="text-gray-600 text-base">+977 98XXXXXXXX</p> */}
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">
                  Email Us
                </h4>
                <p className="text-gray-600 text-base">jdnepalenergy@gmail.com</p>
                {/* <p className="text-gray-600 text-base">sales@jandaenergy.com</p> */}
              </div>
            </div>

            {/* Google Maps — Trade Tower, Kathmandu */}
            <div className="w-full h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.293036858482!2d85.3186!3d27.6947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64af4f47d%3A0x1234567890abcdef!2sTrade%20Tower!5e0!3m2!1sen!2snp!4v1716812000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trade Tower Kathmandu"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              <a
                href="https://maps.google.com/?q=Trade+Tower,+Thapathali,+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>
            <p className="mt-3 text-gray-500 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              Trade Tower, Thapathali, Kathmandu, Nepal
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur("name")}
                    className={inputClass("name")}
                    placeholder="John Doe"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur("email")}
                    className={inputClass("email")}
                    placeholder="john@example.com"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => handleBlur("phone")}
                    className={inputClass("phone")}
                    placeholder="+977 98XXXXXXXX"
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-0 rounded-xl px-4 py-4 text-base focus:ring-2 focus:ring-green-600 outline-none transition-all appearance-none"
                  >
                    <option value="Solar">Solar Solutions</option>
                    <option value="Biomass">Biomass Conversion</option>
                    <option value="Hydro">Hydropower & Grid</option>
                    <option value="Other">Other Services</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  className={`${inputClass("message")} resize-none`}
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && touched.message && (
                  <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-500/20"
              >
                Send Inquiry
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/97798XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all hover:bg-green-600 group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us on WhatsApp
        </span>
      </a>
    </section>
  );
};

export default Contact;
