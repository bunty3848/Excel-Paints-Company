import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeart } from 'react-icons/fa';
import { companyInfo } from '../data/companyInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-navy-800 via-navy-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/Logo.png" 
                alt="Excel Paints Company Logo"
                className="w-14 h-14 rounded-xl shadow-lg object-contain bg-white p-1"
              />
              <div>
                <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                <p className="text-sm text-gray-400">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading manufacturer of wall putty, white cement, cement paints, and white wash in India. ISO 9001:2015 certified.
            </p>
            <div className="flex space-x-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-700 to-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent-yellow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent-green transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-green rounded-full group-hover:w-3 transition-all duration-300"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent-yellow">Our Products</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products/wall-putty" className="text-gray-300 hover:text-accent-green transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent-green rounded-full group-hover:w-3 transition-all duration-300"></span>
                  <span>Wall Putty</span>
                </Link>
              </li>
              <li>
                <Link to="/products/white-cement" className="text-gray-300 hover:text-accent-green transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent-green rounded-full group-hover:w-3 transition-all duration-300"></span>
                  <span>White Cement</span>
                </Link>
              </li>
              <li>
                <Link to="/products/cement-paints" className="text-gray-300 hover:text-accent-green transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent-green rounded-full group-hover:w-3 transition-all duration-300"></span>
                  <span>Cement Paints</span>
                </Link>
              </li>
              <li>
                <Link to="/products/white-wash" className="text-gray-300 hover:text-accent-green transition-colors duration-300 flex items-center space-x-2 group">
                  <span className="w-1.5 h-1.5 bg-accent-green rounded-full group-hover:w-3 transition-all duration-300"></span>
                  <span>White Wash</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent-yellow">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-accent-red mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{companyInfo.contact.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-accent-green flex-shrink-0" />
                <a href={`tel:${companyInfo.contact.phone}`} className="text-gray-300 text-sm hover:text-accent-green transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-accent-yellow flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="text-gray-300 text-sm hover:text-accent-yellow transition-colors break-all">
                  {companyInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-primary-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <div>{companyInfo.contact.hours}</div>
                  <div className="text-gray-400">{companyInfo.contact.daysOpen}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <FaHeart className="text-accent-red mx-1 animate-pulse" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
