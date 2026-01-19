import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { allGalleryPhotos, galleryCategories } from '../data/mock';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredPhotos = selectedCategory === 'All'
    ? allGalleryPhotos
    : allGalleryPhotos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#5D4E6D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Visual Journey</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Gallery
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed">
            Explore the beauty of our sanctuary through images
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-[#D7C49E]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 font-montserrat text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#5D4E6D] text-white'
                    : 'bg-white text-[#5D4E6D] border border-[#D7C49E]/30 hover:bg-[#5D4E6D]/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E6D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-[#B38E5D] text-white text-xs font-montserrat px-3 py-1 rounded-full mb-2">
                    {photo.category}
                  </span>
                  <p className="text-white font-montserrat text-sm">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#B38E5D] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-[#B38E5D] transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="max-w-5xl max-h-[80vh] px-16">
            <img
              src={filteredPhotos[currentImageIndex].url}
              alt={filteredPhotos[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="inline-block bg-[#B38E5D] text-white text-xs font-montserrat px-3 py-1 rounded-full mb-2">
                {filteredPhotos[currentImageIndex].category}
              </span>
              <p className="text-white font-montserrat">{filteredPhotos[currentImageIndex].alt}</p>
            </div>
          </div>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-[#B38E5D] transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
