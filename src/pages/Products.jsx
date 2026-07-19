import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCheckCircle, FaTimes, FaArrowRight } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import SEO from '../components/SEO';
import { products, getProductsByCategory, getCategoryById } from '../data/products';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { category } = useParams();
  
  // Filter products by category if category parameter exists
  const displayProducts = category 
    ? getProductsByCategory(category)
    : products;
  
  const categoryInfo = category ? getCategoryById(category) : null;
  const pageTitle = categoryInfo ? categoryInfo.name : 'All Products';
  const pageDescription = categoryInfo ? categoryInfo.description : 'Premium quality construction materials';

  return (
    <div>
      <SEO
        title={pageTitle}
        description={`${pageDescription}. All ISO 9001:2015 certified and manufactured with the highest quality standards.`}
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
              <IoSparkles className="text-accent-yellow" />
              <span className="text-white text-sm font-semibold">OUR PRODUCTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {pageTitle} <br />
              <span className="text-accent-yellow">Premium Quality</span>
            </h1>
            <p className="text-xl text-white/90">
              {pageDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {displayProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className={`relative h-72 bg-gradient-to-br ${product.bgGradient} overflow-hidden`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-6 relative z-10"
                    style={{ 
                      filter: 'brightness(1.05) contrast(1.1) saturate(1.1) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12))',
                      backgroundColor: 'transparent'
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-xs font-semibold text-gray-800">ISO Certified</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-accent-red font-semibold text-sm mb-1">{product.tagline}</p>
                  <p className="text-gray-500 text-sm mb-4">{product.shortDesc}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                  {/* Key Features Preview */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <FaCheckCircle className="text-accent-green mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                    style={{ background: `linear-gradient(90deg, ${product.accentColor}, ${product.accentColor}dd)` }}
                  >
                    View Full Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            {/* Modal Header */}
            <div className={`relative p-8 bg-gradient-to-br ${selectedProduct.bgGradient} text-white`}>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-white" />
              </button>
              <div className="flex items-center space-x-6">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-2xl p-4 flex-shrink-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-lg mb-1">{selectedProduct.tagline}</p>
                  <p className="text-white/90">{selectedProduct.shortDesc}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Product Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-gray-50 p-3 rounded-lg">
                      <FaCheckCircle className="text-accent-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProduct.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <span className="font-semibold text-gray-700">{spec.label}:</span>
                        <span className="text-gray-600">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  {selectedProduct.coverageNote && (
                    <p className="text-xs text-gray-500 italic mt-4 pt-4 border-t border-gray-200">
                      {selectedProduct.coverageNote}
                    </p>
                  )}
                </div>
              </div>

              {/* Application */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">How to Apply</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProduct.application.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-primary-50 p-4 rounded-lg">
                      <div className={`w-8 h-8 bg-gradient-to-r ${selectedProduct.bgGradient} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is here to help you select the perfect product for your project needs.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-2xl hover:bg-accent-yellow hover:text-navy-900 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
