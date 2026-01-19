import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Feather, Moon, Trees, Users, Flame, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteInfo, reviews, values, amenities, propertyPhotos } from '../data/mock';

const HomePage = () => {
  return (
    <div className="bg-[#F8F5F2]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src={propertyPhotos[1].url}
            alt="The Lair of Liz sanctuary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5D4E6D]/90 via-[#5D4E6D]/70 to-transparent" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 opacity-20">
          <Moon className="w-32 h-32 text-[#D7C49E]" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Feather className="w-48 h-48 text-[#D7C49E] rotate-45" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[#B38E5D]" />
              <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">
                Welcome to
              </span>
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {siteInfo.tagline}
            </h1>
            <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed mb-8">
              {siteInfo.subTagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button className="bg-[#B38E5D] hover:bg-[#D7C49E] hover:text-[#5D4E6D] text-white font-montserrat font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gallery">
                <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-montserrat font-medium px-8 py-6 rounded-full text-lg transition-all duration-300">
                  Explore the Land
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5D4E6D]/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Our Philosophy</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              What We Believe In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = { Heart: Users, Wind: Feather, Moon: Moon, Users: Users }[value.icon] || Sparkles;
              return (
                <div
                  key={value.id}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#D7C49E]/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center mb-6 group-hover:bg-[#5D4E6D] transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-[#5D4E6D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B8CBE] font-montserrat text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-24 bg-[#5D4E6D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Our Sanctuary</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4 mb-6">
                12 Acres of Pure Magic
              </h2>
              <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed mb-6">
                Nestled in the heart of Michigan's woodlands, The Lair of Liz offers a blank canvas for your unique gathering. Whether you're seeking spiritual connection, family bonding, or simply an escape from the ordinary.
              </p>
              <p className="text-[#6B8CBE] font-montserrat leading-relaxed mb-8">
                Our land welcomes all—from vintage RVs to modern campers, from intimate ceremonies to joyful reunions. Here, you're free to be authentically you.
              </p>
              <Link to="/about">
                <Button className="bg-[#8A9B68] hover:bg-[#5D4E6D] text-white font-montserrat font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2">
                  Learn Our Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={propertyPhotos[0].url}
                  alt="The Lair of Liz grounds"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#B38E5D]/20 rounded-full flex items-center justify-center">
                      <Trees className="w-6 h-6 text-[#B38E5D]" />
                    </div>
                    <div>
                      <p className="font-playfair text-2xl font-bold text-[#5D4E6D]">12</p>
                      <p className="font-montserrat text-sm text-[#8A9B68]">Acres of Peace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">What Awaits You</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              Amenities & Vibes
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.slice(0, 4).map((amenity) => {
              const IconComponent = { Flame, Trees, Star: Sparkles, Sparkles }[amenity.icon] || Sparkles;
              return (
                <div key={amenity.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group">
                  <div className="w-14 h-14 rounded-full bg-[#D7C49E]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#5D4E6D] transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-[#5D4E6D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-playfair font-semibold text-[#5D4E6D] mb-2">{amenity.name}</h4>
                  <p className="text-[#8A9B68] font-montserrat text-xs">{amenity.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/amenities">
              <Button variant="outline" className="border-2 border-[#5D4E6D] text-[#5D4E6D] hover:bg-[#5D4E6D] hover:text-white font-montserrat font-medium px-8 py-4 rounded-full transition-all duration-300">
                View All Amenities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-24 bg-[#5D4E6D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Testimonials</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-4">
              Voices from the Land
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.slice(0, 2).map((review) => (
              <div key={review.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#B38E5D] fill-current" />
                  ))}
                </div>
                <p className="text-white font-montserrat text-lg leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div>
                  <p className="text-[#D7C49E] font-playfair font-semibold">— {review.author}</p>
                  <p className="text-white/60 font-montserrat text-sm">{review.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/reviews">
              <Button className="bg-[#B38E5D] hover:bg-[#D7C49E] hover:text-[#5D4E6D] text-white font-montserrat font-medium px-8 py-4 rounded-full transition-all duration-300">
                Read All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8A9B68]/10" />
        <div className="absolute top-10 right-10 opacity-10">
          <Feather className="w-64 h-64 text-[#5D4E6D]" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Moon className="w-12 h-12 text-[#5D4E6D] mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mb-6">
            Ready to Create Your Sacred Gathering?
          </h2>
          <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether it's a weekend retreat or a weekday escape, your journey to connection begins here. Let us help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-semibold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Book Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-[#5D4E6D] text-[#5D4E6D] hover:bg-[#5D4E6D] hover:text-white font-montserrat font-medium px-10 py-6 rounded-full text-lg transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
