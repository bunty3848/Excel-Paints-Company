import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaLinkedinIn, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual EmailJS or API call)
    setTimeout(() => {
      console.log('Form Data:', data);
      setIsSubmitted(true);
      setIsSubmitting(false);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with Excel Paints Company. Located in Patna, Bihar. Call us at +919798081022 or email excelpaintscompany@gmail.com. Business hours: 9 AM - 6 PM."
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-accent-green to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-yellow rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-6">
              <FaEnvelope className="text-accent-yellow" />
              <span className="text-white text-sm font-semibold">GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We'd Love to <br />
              <span className="text-accent-yellow">Hear from You</span>
            </h1>
            <p className="text-xl text-white/90">
              Looking for a trusted partner for your walls? We are here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-green to-green-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="text-lg text-primary-600 hover:text-primary-700 font-semibold"
              >
                {companyInfo.contact.phone}
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon - Sat: 9 AM - 6 PM</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up animate-delay-100">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-red to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="text-lg text-primary-600 hover:text-primary-700 font-semibold break-all"
              >
                {companyInfo.contact.email}
              </a>
              <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up animate-delay-200">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Address</h3>
              <p className="text-gray-600 leading-relaxed">
                {companyInfo.contact.address}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-4">
                  <IoSparkles className="text-primary-600" />
                  <span className="text-primary-600 font-semibold text-sm">SEND US A MESSAGE</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Get a Quote</h2>
                <p className="text-gray-600">Fill out the form and our representative will get in touch with you shortly.</p>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-slide-up">
                  <FaCheckCircle className="text-green-600 text-2xl flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-800">Message Sent Successfully!</p>
                    <p className="text-sm text-green-600">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.name ? 'border-red-500' : 'border-gray-200'
                    } focus:border-primary-500 focus:outline-none transition-colors`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:border-primary-500 focus:outline-none transition-colors`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]{10,}$/,
                        message: 'Invalid phone number',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    } focus:border-primary-500 focus:outline-none transition-colors`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Product Interest */}
                <div>
                  <label htmlFor="product" className="block text-sm font-semibold text-gray-700 mb-2">
                    Product Interest
                  </label>
                  <select
                    id="product"
                    {...register('product')}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a product (optional)</option>
                    <option value="wall-putty">Wall Putty</option>
                    <option value="white-cement">Decorative White Cement</option>
                    <option value="cement-paint">Cement Paint</option>
                    <option value="all">All Products</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message / Inquiry *
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    {...register('message', { required: 'Message is required' })}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } focus:border-primary-500 focus:outline-none transition-colors resize-none`}
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 gradient-bg-red flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="loading-spinner"></div>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-yellow to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Monday - Saturday</span>
                    <span className="text-gray-600">{companyInfo.contact.hours}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Sunday</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={companyInfo.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FaFacebookF />
                    <span>Facebook</span>
                  </a>
                  <a
                    href={companyInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <FaLinkedinIn />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
