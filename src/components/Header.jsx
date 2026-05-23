import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';
import { productCategories } from '../data/products';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-navy-700 to-navy-800 text-white py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <a href={`tel:${companyInfo.contact.phone}`} className="flex items-center space-x-2 hover:text-accent-yellow transition-colors">
              <FaPhone className="text-accent-green" />
              <span>{companyInfo.contact.phone}</span>
            </a>
            <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center space-x-2 hover:text-accent-yellow transition-colors">
              <FaEnvelope className="text-accent-red" />
              <span>{companyInfo.contact.email}</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">{companyInfo.contact.hours}</span>
            <span className="px-3 py-1 bg-accent-green/20 border border-accent-green rounded-full text-accent-green text-xs font-semibold">
              ISO 9001:2015
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-xl py-3'
            : 'bg-white/95 backdrop-blur-md py-4'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/images/Logo.png" 
                  alt="Excel Paints Company Logo"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl shadow-lg group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300 object-contain bg-white p-1"
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-black bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
                  {companyInfo.name}
                </h1>
                <p className="text-xs font-semibold text-gray-600">{companyInfo.tagline}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${
                  location.pathname === '/'
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${
                  location.pathname === '/about'
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                About Us
              </Link>
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <button
                  className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 flex items-center space-x-1 ${
                    location.pathname.startsWith('/products')
                      ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                      : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  <span>Products</span>
                  <FaChevronDown className={`text-xs transition-transform ${showProductsDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {showProductsDropdown && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fade-in">
                      {productCategories.map((category) => (
                        <Link
                          key={category.id}
                          to={`/products/${category.id}`}
                          className="block px-6 py-3 hover:bg-red-50 transition-colors"
                        >
                          <div className="font-bold text-gray-900">{category.name}</div>
                          <div className="text-xs text-gray-600">{category.description}</div>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          to="/products"
                          className="block px-6 py-3 hover:bg-red-50 transition-colors font-bold text-red-600"
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/gallery"
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${
                  location.pathname === '/gallery'
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${
                  location.pathname === '/contact'
                    ? 'text-white bg-gradient-to-r from-red-600 to-red-700 shadow-lg'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="ml-4 px-8 py-2.5 rounded-full text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 bg-gradient-to-r from-yellow-500 to-orange-500"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 animate-slide-up">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-white bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg'
                        : 'text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="px-4 py-3 rounded-xl text-white font-semibold shadow-lg gradient-bg-red text-center"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
