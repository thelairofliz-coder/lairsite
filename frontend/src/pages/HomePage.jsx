import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Feather, Moon, Trees, Users, Flame, Sparkles, Baby, Dog, Leaf, Construction } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteInfo, reviews, values, amenities, propertyPhotos, developmentNotice, pricingTiers } from '../data/mock';

const HomePage = () => {
  return (
    <div className="bg-[#F8F5F2]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with overlay - using new camping image */}
        <div className="absolute inset-0">
          <img
            src={propertyPhotos[6]?.url || propertyPhotos[1].url}
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
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              {siteInfo.name}
            </h1>
            <p className="text-2xl text-[#D7C49E] font-playfair mb-4">
              {siteInfo.tagline}
            </p>
            <p className="text-lg text-white/80 font-montserrat leading-relaxed mb-6">
              {siteInfo.subTagline}
            </p>
            
            {/* Kid & Pet Friendly Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Baby className="w-4 h-4 text-[#D7C49E]" />
                <span className="text-white font-montserrat text-sm">Kid-Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Dog className="w-4 h-4 text-[#D7C49E]" />
                <span className="text-white font-montserrat text-sm">Pet-Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-[#8A9B68]" />
                <span className="text-white font-montserrat text-sm">Working Farm</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/pricing">
                <Button 
                  data-testid="view-pricing-btn"
                  className="bg-[#B38E5D] hover:bg-[#D7C49E] hover:text-[#5D4E6D] text-white font-montserrat font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  View Pricing & Packages
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

      {/* Development Notice Banner */}
      <section className="py-8 bg-[#8A9B68]/20 border-y border-[#8A9B68]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#8A9B68]/20 flex items-center justify-center flex-shrink-0">
              <Construction className="w-6 h-6 text-[#8A9B68]" />
            </div>
            <div>
              <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-2">{developmentNotice.title}</h3>
              <p className="text-[#6B8CBE] font-montserrat leading-relaxed">
                {developmentNotice.message}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Pricing Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Private Group Retreats</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4E6D] mt-4">
              Pricing Starting at $27/person/night
            </h2>
            <p className="text-[#6B8CBE] font-montserrat mt-3">2-night minimum • Groups of 10-40 people</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {pricingTiers.map((tier) => (
              <div key={tier.id} className="bg-[#F8F5F2] rounded-xl p-4 text-center hover:shadow-md transition-all duration-300">
                <p className="font-montserrat text-sm text-[#8A9B68] mb-1">{tier.groupSize} People</p>
                <p className="font-playfair text-lg font-semibold text-[#5D4E6D]">{tier.name}</p>
                <p className="font-playfair text-2xl font-bold text-[#B38E5D]">${tier.pricePerPersonPerNight}</p>
                <p className="font-montserrat text-xs text-[#6B8CBE]">per person/night</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing">
              <Button 
                data-testid="full-pricing-btn"
                className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                View Full Pricing & What's Included
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        
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
                A Working Farm Sanctuary
              </h2>
              <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed mb-6">
                Nestled in the heart of Michigan's woodlands, The Lair of Liz offers a personally curated sanctuary on a working farm. Whether you're seeking spiritual connection, family bonding, or simply an escape from the ordinary.
              </p>
              <p className="text-[#6B8CBE] font-montserrat leading-relaxed mb-8">
                Our land welcomes all—from yoga retreats to family reunions, from intimate ceremonies to large group gatherings. Here, you're free to be authentically you.
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
                  src={propertyPhotos[4]?.url || propertyPhotos[0].url}
                  alt="Family camping at The Lair of Liz"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#B38E5D]/20 rounded-full flex items-center justify-center">
                      <Trees className="w-6 h-6 text-[#B38E5D]" />
                    </div>
                    <div>
                      <p className="font-playfair text-2xl font-bold text-[#5D4E6D]">Up to 40</p>
                      <p className="font-montserrat text-sm text-[#8A9B68]">Guests Welcome</p>
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
            {amenities.slice(0, 8).map((amenity) => {
              const IconComponent = { Flame, Trees, Star: Sparkles, Sparkles, Baby, Dog }[amenity.icon] || Sparkles;
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

      {/* Photo Gallery Preview */}
      <section className="py-24 bg-[#5D4E6D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">See The Land</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              Your Retreat Awaits
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {propertyPhotos.slice(0, 6).map((photo) => (
              <div key={photo.id} className="relative rounded-xl overflow-hidden group aspect-[4/3]">
                <img 
                  src={photo.url} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5D4E6D]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-4 rounded-full transition-all duration-300">
                View Full Gallery
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
            Ready to Book Your Sanctuary?
          </h2>
          <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Availability for curated retreats at The Lair is limited. Contact us to check dates, discuss meal plans, and begin planning your group's immersive farmstead experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button 
                data-testid="book-now-btn"
                className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-semibold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Inquire for Availability
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
