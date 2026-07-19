import { FaAward, FaHandshake, FaLightbulb, FaLeaf, FaIndustry, FaCheckCircle } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';
import { products } from '../data/products';

const About = () => {
  const iconMap = {
    'shield-check': FaCheckCircle,
    'handshake': FaHandshake,
    'lightbulb': FaLightbulb,
    'leaf': FaLeaf,
  };

  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about Excel Paints Company - Established in 2012, we are a leading ISO 9001:2015 certified manufacturer of wall putty, decorative white cement, and cement paints in Patna, Bihar."
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
              <FaAward className="text-accent-yellow" />
              <span className="text-white text-sm font-semibold">ABOUT US</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building Trust, <br />
              <span className="text-accent-yellow">One Wall at a Time</span>
            </h1>
            <p className="text-xl text-white/90">
              Over a decade of excellence in manufacturing premium construction materials
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <div className="inline-flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full mb-6">
                <IoSparkles className="text-primary-600" />
                <span className="text-primary-600 font-semibold text-sm">EST. {companyInfo.established}</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Welcome to <span className="gradient-text">{companyInfo.name}</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {companyInfo.about.intro}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We are proud to be an <span className="font-semibold text-primary-600">ISO 9001:2015 certified company</span>, ensuring that our manufacturing processes meet global quality standards.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our commitment to excellence and innovation makes us a trusted name in the industry. Whether you're looking to enhance the beauty of your home with decorative cement products or need durable solutions for construction projects, we have the ideal products for you.
              </p>
            </div>

            <div className="animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">{new Date().getFullYear() - parseInt(companyInfo.established)}+</div>
                  <div className="text-lg">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-accent-green to-green-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">{products.length}</div>
                  <div className="text-lg">Premium Products</div>
                </div>
                <div className="bg-gradient-to-br from-accent-red to-red-600 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaAward className="text-4xl" />
                    <div className="text-lg font-bold">ISO</div>
                  </div>
                  <div className="text-sm">9001:2015 Certified</div>
                </div>
                <div className="bg-gradient-to-br from-accent-yellow to-orange-500 rounded-2xl p-8 text-white shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-lg">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-primary-500 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FaIndustry className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {companyInfo.about.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-accent-green animate-fade-in animate-delay-100">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-green to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <IoSparkles className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {companyInfo.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent-red/10 px-4 py-2 rounded-full mb-4">
              <IoSparkles className="text-accent-red" />
              <span className="text-accent-red font-semibold text-sm">CORE VALUES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.about.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              const gradients = [
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
                'from-yellow-500 to-orange-500',
                'from-emerald-500 to-teal-600',
              ];

              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${gradients[index]} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
              <FaAward className="text-7xl text-accent-yellow mb-6 mx-auto animate-float" />
              <h2 className="text-4xl font-bold mb-4">ISO 9001:2015 Certified</h2>
              <p className="text-xl text-white/90 mb-6">
                We adhere to international quality management standards, ensuring premium products and services.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">Quality Management</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">Global Standards</span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">Continuous Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
