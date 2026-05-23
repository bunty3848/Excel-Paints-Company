import { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import SEO from '../components/SEO';
import { products } from '../data/products';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create gallery items from products
  const galleryItems = products.map((product, index) => ({
    id: index,
    image: product.image,
    title: product.name,
    category: product.shortDesc,
  }));

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryItems[index]);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryItems[newIndex]);
  };

  return (
    <div>
      <SEO
        title="Gallery"
        description="Explore our product gallery featuring Excel Wall Putty, White Cement, and Cement Paint. View high-quality images of our ISO certified products."
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
              <span className="text-white text-sm font-semibold">GALLERY</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Product <span className="text-accent-yellow">Gallery</span>
            </h1>
            <p className="text-xl text-white/90">
              Explore our range of premium construction materials
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-6 transform group-hover:scale-110 transition-transform duration-500"
                    style={{ 
                      filter: 'brightness(1.05) contrast(1.1) saturate(1.1) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.12))',
                      backgroundColor: 'transparent'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.category}</p>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white">
                      <IoSparkles className="text-white text-2xl" />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Click on any image to view in full size
            </h3>
            <p className="text-gray-600">
              Use arrow keys or navigation buttons to browse through the gallery
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            aria-label="Close"
          >
            <FaTimes className="text-white text-xl" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-white text-xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            aria-label="Next"
          >
            <FaChevronRight className="text-white text-xl" />
          </button>

          {/* Image Container */}
          <div className="max-w-6xl w-full animate-scale-in">
            <div className="bg-white rounded-3xl overflow-hidden">
              <div className="relative h-[70vh] bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain p-12"
                  style={{ 
                    filter: 'brightness(1.05) contrast(1.1) saturate(1.1) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
              <div className="p-8 bg-white">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">{selectedImage.title}</h2>
                <p className="text-lg text-gray-600 mb-4">{selectedImage.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Image {currentIndex + 1} of {galleryItems.length}
                  </span>
                  <div className="flex space-x-2">
                    {galleryItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => openLightbox(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'bg-primary-600 w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
