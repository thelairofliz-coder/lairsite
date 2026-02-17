import React, { useState, useEffect } from 'react';
import { Flame, Droplets, Bath, Car, Trees, Star, BookOpen, Sparkles, Moon, Feather, Heart, Loader2, Baby, Dog } from 'lucide-react';
import { propertyPhotos, atmospherePhotos } from '../data/mock';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const AmenitiesPage = () => {
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);

  const iconMap = {
    Flame: Flame,
    Droplets: Droplets,
    Bath: Bath,
    Car: Car,
    Trees: Trees,
    Star: Star,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
    Baby: Baby,
    Dog: Dog
  };

  useEffect(() => {
    const fetchAmenities = async () => {
      try {
        const response = await fetch(`${API_URL}/api/amenities`);
        if (response.ok) {
          const data = await response.json();
          setAmenities(data);
        }
      } catch (error) {
        console.error('Error fetching amenities:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAmenities();
  }, []);

  const bohemianTouches = [
    {
      title: "Fire Circles",
      description: "Perfect for drum circles, storytelling, and evening ceremonies",
      icon: Flame
    },
    {
      title: "Open Fields",
      description: "Expansive spaces for meditation, yoga, and group activities",
      icon: Trees
    },
    {
      title: "Natural Altars",
      description: "Bring your crystals, flags, and sacred decor to create your space",
      icon: Sparkles
    },
    {
      title: "Stargazing Skies",
      description: "Minimal light pollution for celestial viewing and night ceremonies",
      icon: Moon
    }
  ];

  if (loading) {
    return (
      <div className="bg-[#F8F5F2] min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#5D4E6D] animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#5D4E6D]">
          <div className="absolute inset-0 opacity-20">
            <img
              src={propertyPhotos[2].url}
              alt="Amenities"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-10 left-10 opacity-10">
          <Feather className="w-48 h-48 text-white -rotate-12" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">What Awaits</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Amenities & Vibes
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed">
            Everything you need for your perfect gathering
          </p>
        </div>
      </section>

      {/* Bohemian Touches */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Sacred Spaces</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              Bohemian Touches
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bohemianTouches.map((touch, index) => (
              <div
                key={index}
                data-testid={`bohemian-touch-${index}`}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 flex gap-6 group"
              >
                <div className="w-16 h-16 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5D4E6D] transition-colors duration-300">
                  <touch.icon className="w-8 h-8 text-[#5D4E6D] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-2">
                    {touch.title}
                  </h3>
                  <p className="text-[#6B8CBE] font-montserrat leading-relaxed">
                    {touch.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Amenities */}
      <section className="py-24 bg-[#5D4E6D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Full List</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              All Amenities
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity) => {
              const IconComponent = iconMap[amenity.icon] || Sparkles;
              return (
                <div
                  key={amenity.id}
                  data-testid={`amenity-card-${amenity.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D7C49E]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5D4E6D] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#5D4E6D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-playfair font-semibold text-[#5D4E6D] mb-2">{amenity.name}</h4>
                  <p className="text-[#8A9B68] font-montserrat text-xs">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <img
                src={atmospherePhotos[0].url}
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E6D]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">Community Gatherings</h3>
                <p className="text-[#D7C49E] font-montserrat">Spaces designed for connection</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[400px]">
              <img
                src={atmospherePhotos[2].url}
                alt="Evening campfire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E6D]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl font-bold text-white mb-2">Evening Magic</h3>
                <p className="text-[#D7C49E] font-montserrat">Fire circles under the stars</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-24 bg-[#8A9B68]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-[#B38E5D] mx-auto mb-6" />
          <h2 className="font-playfair text-3xl font-bold text-[#5D4E6D] mb-6">
            Your Vision, Your Space
          </h2>
          <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed">
            We believe in providing the essentials while leaving room for your creativity. Bring your tapestries, your crystals, your decorations—make this land your own for your gathering. The only limit is your imagination.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
