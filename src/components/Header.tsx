import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/jdne-logo.png";

const subsidiaries = [
  { name: "Gridtie", url: "https://gridtiesolar.com.np/" },
  { name: "Troika", url: "https://troikaenergy.com.np/" },
  { name: "Usolar Janda Energy", url: "https://www.usolarje.com.np/" },
  { name: "Bhojpur Shiwalawa", url: null },
  { name: "Green Leaves", url: "https://greenleavesconsulting.com.np/" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [subsidiariesOpen, setSubsidiariesOpen] = useState(false);
  const [mobileSubsidiariesOpen, setMobileSubsidiariesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Biomass", to: "/biomass" },
    { name: "Solar", to: "/solar" },
    { name: "About", to: "/about" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white ${
        scrolled
          ? "shadow-lg shadow-gray-200/50 border-b border-gray-100"
          : "border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-18 lg:h-22">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <img
              src={logo}
              alt="Janda Energy Logo"
              className="h-10 w-auto -ml-5"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-gray-900 leading-tight">
                Janda Devi Nepal Energy
              </span>
              <span className="text-[10px] font-semibold text-green-600 ml-3 uppercase tracking-widest leading-tight">
                Renewable Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer
                  ${
                    location.pathname === link.to
                      ? "text-green-700 bg-green-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                {link.name}
                {location.pathname === link.to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-green-500 rounded-full" />
                )}
              </Link>
            ))}

            {/* Subsidiaries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSubsidiariesOpen(true)}
              onMouseLeave={() => setSubsidiariesOpen(false)}
            >
              <button
                className="relative flex items-center gap-1 px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 cursor-pointer text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                Subsidiaries
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    subsidiariesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                  subsidiariesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  {subsidiaries.map((item) =>
                    item.url ? (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span
                        key={item.name}
                        className="block px-4 py-2.5 text-sm font-medium text-gray-400 cursor-default"
                      >
                        {item.name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-100 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                  ${
                    location.pathname === link.to
                      ? "text-green-700 bg-green-50 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
              >
                {location.pathname === link.to && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-3" />
                )}
                {link.name}
              </Link>
            ))}

            {/* Mobile Subsidiaries Accordion */}
            <div>
              <button
                onClick={() => setMobileSubsidiariesOpen(!mobileSubsidiariesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
              >
                Subsidiaries
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileSubsidiariesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileSubsidiariesOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                {subsidiaries.map((item) =>
                  item.url ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-8 py-2.5 text-sm text-gray-600 hover:text-green-700"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span
                      key={item.name}
                      className="block px-8 py-2.5 text-sm text-gray-400"
                    >
                      {item.name}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="pt-3 px-4">
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-3 rounded-xl font-semibold shadow-lg shadow-green-500/20"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
