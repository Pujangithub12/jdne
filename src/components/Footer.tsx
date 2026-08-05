import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/jdne-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img src={logo} alt="Janda Devi Nepal Energy Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Janda Devi <br /> Nepal Energy
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading the transition to sustainable energy through innovative
              solar, biomass, and hydro solutions. Committed to a greener future
              for generations to come.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "Project", path: "/gallery" },
                { name: "Biomass", path: "/biomass" },
                { name: "Solar", path: "/solar" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-green-500 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-green-500 shrink-0" size={20} />
                <span>Trade Tower (2nd floor), Thapathali, Kathmandu</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-green-500 shrink-0" size={20} />
                <span>+977-98011 95043</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-green-500 shrink-0" size={20} />
                <span>jdnepalenergy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Janda Devi Nepal Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
