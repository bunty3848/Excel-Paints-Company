import { Link } from 'react-router-dom';
import { FaAward, FaStar, FaHeart, FaRecycle, FaArrowRight, FaCheckCircle, FaPaintBrush, FaPhone } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { BiPaint } from 'react-icons/bi';
import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';
import { products } from '../data/products';

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="Excel Paints Company - Leading manufacturer of wall putty, decorative white cement, and cement paints in Patna, Bihar. ISO 9001:2015 certified with over a decade of excellence."
      />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* Hero Background Image using img tag */}
          <img 
            src="/images/hero/hero-1.jpg" 
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Gradient Overlay - Lighter for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/20" />
          
          {/* Colorful Accent Blobs - Matches your brand colors */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-red/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-xl font-bold transform hover:scale-105 transition-transform mb-8 animate-slide-right">
              <FaAward className="text-2xl" />
              <span className="text-sm">ISO 9001:2015 CERTIFIED</span>
            </div>
              
            {/* Main Heading */}
            <div className="mb-8 animate-slide-right" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                <span className="block text-white">Transform</span>
                <span className="block">
                  <span className="brush-stroke text-red-500">Your Walls</span>
                </span>
                <span className="block text-white">With Color!</span>
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full"></div>
            </div>
              
            <p className="text-2xl text-gray-100 leading-relaxed font-medium mb-10 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              Leading manufacturer of <span className="text-red-400 font-bold">Wall Putty</span>, 
              <span className="text-yellow-300 font-bold"> White Cement</span>, 
              <span className="text-green-400 font-bold"> Cement Paints</span>, and 
              <span className="text-orange-400 font-bold"> White Wash</span> in India
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10 animate-slide-right" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 border-l-4 border-red-500 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-red-400">{new Date().getFullYear() - parseInt(companyInfo.established)}+</div>
                <div className="text-sm font-semibold text-gray-200">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 border-l-4 border-green-500 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-green-400">{products.length}</div>
                <div className="text-sm font-semibold text-gray-200">Premium Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl px-6 py-4 border-l-4 border-yellow-500 hover:bg-white/20 transition-all">
                <div className="text-4xl font-black text-yellow-400">100%</div>
                <div className="text-sm font-semibold text-gray-200">Quality</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-right" style={{ animationDelay: '0.4s' }}>
              <Link to="/products" className="btn-primary group">
                <span className="flex items-center space-x-2">
                  <BiPaint className="text-2xl" />
                  <span>Our Products</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </span>
              </Link>
              <a href={`tel:${companyInfo.contact.phone}`} className="btn-secondary group">
                <span className="flex items-center space-x-2">
                  <FaPhone />
                  <span>Call Now</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Colorful Cards */}
      <section className="section-padding bg-gray-50 paint-splatter-bg relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Why Choose Excel Paints?
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for quality construction materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.whyChooseUs.map((item, index) => {
              const colors = [
                { bg: 'from-red-500 to-red-600', light: 'bg-red-50', border: 'border-red-500' },
                { bg: 'from-green-500 to-green-600', light: 'bg-green-50', border: 'border-green-500' },
                { bg: 'from-yellow-500 to-yellow-600', light: 'bg-yellow-50', border: 'border-yellow-500' },
                { bg: 'from-blue-500 to-blue-600', light: 'bg-blue-50', border: 'border-blue-500' },
                { bg: 'from-purple-500 to-purple-600', light: 'bg-purple-50', border: 'border-purple-500' },
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className="paint-card p-8 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${color.bg} rounded-2xl flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.icon === 'award' && <FaAward className="text-white text-3xl" />}
                    {item.icon === 'star' && <FaStar className="text-white text-3xl" />}
                    {item.icon === 'zap' && <IoSparkles className="text-white text-3xl" />}
                    {item.icon === 'heart' && <FaHeart className="text-white text-3xl" />}
                    {item.icon === 'recycle' && <FaRecycle className="text-white text-3xl" />}
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-gray-900">{item.title}</h3>
                  <div className={`w-16 h-1 ${color.light} ${color.border} border-2 rounded-full mb-4`}></div>
                  <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section - Bold & Colorful */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <h2 className="section-title mb-6">
              Our Premium Products
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-full mx-auto mb-6"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
              Every product manufactured under strict quality control to deliver unmatched performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {products.map((product, index) => {
              const gradients = [
                'from-red-500 to-orange-500',
                'from-green-500 to-emerald-500',
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-yellow-500 to-orange-500',
                'from-teal-500 to-cyan-500',
                'from-indigo-500 to-blue-500',
                'from-orange-500 to-red-500',
                'from-sky-500 to-indigo-500',
              ];
              const bgColors = [
                'bg-gradient-to-br from-red-50 to-orange-50',
                'bg-gradient-to-br from-green-50 to-emerald-50',
                'bg-gradient-to-br from-blue-50 to-cyan-50',
                'bg-gradient-to-br from-purple-50 to-pink-50',
                'bg-gradient-to-br from-yellow-50 to-orange-50',
                'bg-gradient-to-br from-teal-50 to-cyan-50',
                'bg-gradient-to-br from-indigo-50 to-blue-50',
                'bg-gradient-to-br from-orange-50 to-red-50',
                'bg-gradient-to-br from-sky-50 to-indigo-50',
              ];
              // Use modulo so styling never breaks even if more products are added later
              const colorIndex = index % gradients.length;

              return (
                <div
                  key={product.id}
                  className="group relative animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Product Card */}
                  <div className="paint-card overflow-hidden">
                    {/* Image Section */}
                    <div className={`relative h-80 ${bgColors[colorIndex]} overflow-hidden`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700"
                        style={{ 
                          filter: 'brightness(1.05) contrast(1.1) saturate(1.1) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12))',
                          backgroundColor: 'transparent'
                        }}
                      />
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span className="text-xs font-black text-gray-900">ISO CERTIFIED</span>
                      </div>
                      {/* Decorative Circle */}
                      <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${gradients[colorIndex]} rounded-full opacity-20 blur-2xl`}></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8 bg-white">
                      <div className={`inline-block px-4 py-1 bg-gradient-to-r ${gradients[colorIndex]} text-white text-xs font-bold rounded-full mb-4`}>
                        {product.shortDesc}
                      </div>
                      <h3 className="text-3xl font-black mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${gradients[colorIndex]} transition-all">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {product.description.substring(0, 100)}...
                      </p>
                      
                      {/* Features Preview */}
                      <div className="space-y-3 mb-6">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className={`w-6 h-6 bg-gradient-to-r ${gradients[colorIndex]} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <FaCheckCircle className="text-white text-xs" />
                            </div>
                            <span className="text-sm text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* View Details Button */}
                      <Link
                        to="/products"
                        className={`w-full py-4 rounded-full text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r ${gradients[colorIndex]}`}
                      >
                        <span>View Details</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Link to="/products" className="btn-accent inline-flex items-center space-x-3">
              <BiPaint className="text-2xl" />
              <span>View All Products</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Vibrant Paint Splash */}
      <section className="relative py-32 overflow-hidden">
        {/* Colorful Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Content Card */}
            <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 shadow-2xl border-4 border-white/20">
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl mb-8 transform hover:scale-110 transition-transform">
                  <FaPaintBrush className="text-5xl text-red-600" />
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                  Ready to Transform<br />Your Space?
                </h2>
                <div className="w-32 h-2 bg-white rounded-full mx-auto mb-8"></div>
                <p className="text-2xl md:text-3xl text-white/90 mb-4 font-semibold">
                  Whether you are a dealer, contractor, or homeowner
                </p>
                <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                  We are here to assist you with premium quality products that bring your vision to life!
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    to="/contact"
                    className="px-12 py-6 bg-white text-red-600 font-black rounded-full shadow-2xl hover:shadow-white/50 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-110 transition-all duration-300 text-xl flex items-center space-x-3"
                  >
                    <span>Get Free Quote</span>
                    <FaArrowRight />
                  </Link>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="px-12 py-6 bg-transparent border-4 border-white text-white font-black rounded-full hover:bg-white hover:text-red-600 transform hover:scale-110 transition-all duration-300 text-xl flex items-center space-x-3"
                  >
                    <FaPhone />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Paint Drops */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-white rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </section>
    </div>
  );
};

export default Home;
