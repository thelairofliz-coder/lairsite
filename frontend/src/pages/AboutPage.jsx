import React from 'react';
import { Heart, Wind, Moon, Users, Feather, Sparkles, Quote, Shield, Leaf, Rainbow } from 'lucide-react';
import { siteInfo, values, propertyPhotos, mission } from '../data/mock';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const AboutPage = () => {
  const iconMap = {
    Heart: Heart,
    Wind: Wind,
    Moon: Moon,
    Users: Users
  };

  return (
    <div className="bg-[#F8F5F2]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#5D4E6D]">
          <div className="absolute inset-0 opacity-20">
            <img
              src={propertyPhotos[1]?.url}
              alt="The sanctuary"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-10 right-10 opacity-10">
          <Feather className="w-64 h-64 text-white rotate-45" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Our Story</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Reconnect with Nature
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed mb-6">
            Love, Introspection, Zen.
          </p>
          
          {/* Friendly Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Rainbow className="w-4 h-4 text-[#D7C49E]" />
              <span className="text-white font-montserrat text-sm">LGBTQ+ Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Leaf className="w-4 h-4 text-[#8A9B68]" />
              <span className="text-white font-montserrat text-sm">Cannabis Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-[#D7C49E]" />
              <span className="text-white font-montserrat text-sm">Safe Space</span>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-[#5D4E6D] mb-8">WELCOME</h2>
          <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed mb-6">
            Welcome to our vibrant, intentional community! Whether you're looking to fully engage with our communal lifestyle and embark on a journey of self-discovery, or simply wish to unwind amidst nature, we can tailor an experience to suit your needs.
          </p>
          <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed">
            Our offerings range from practical lessons in cultivating whole foods to stimulating discussions with fascinating individuals that elevate your thinking to new heights.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#5D4E6D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-12 h-12 text-[#D7C49E] mx-auto mb-6" />
          <h2 className="font-playfair text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-[#D7C49E] font-montserrat text-lg leading-relaxed italic">
            "{mission.statement}"
          </p>
          <p className="text-white/80 font-montserrat mt-6">
            We invite you to join us in our mission and work towards a world where everyone can thrive without fear of violence.
          </p>
        </div>
      </section>

      {/* Liz's Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={propertyPhotos[0]?.url}
                alt="The Lair of Liz grounds"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Our Story</span>
              <h2 className="font-playfair text-4xl font-bold text-[#5D4E6D] mt-4 mb-6">
                From Survivor to Sanctuary Creator
              </h2>
              <div className="space-y-4 text-[#6B8CBE] font-montserrat leading-relaxed">
                <p>
                  I would like to share some information about myself. I have survived both child trafficking and domestic abuse and have faced numerous challenges in rebuilding my life as a result.
                </p>
                <p>
                  Through my experiences, I have come to realize that there is a significant need for safe spaces where individuals can begin the healing process without fear of judgment.
                </p>
                <p>
                  At The Lair of Liz, we are a holistic community campground focused on regenerative permaculture and healing. Our mission is to help people reconnect with nature and find inner peace through plant medicine, inner work, and crafts.
                </p>
              </div>
              <div className="mt-8 p-4 bg-[#8A9B68]/10 rounded-xl border-l-4 border-[#8A9B68]">
                <p className="font-playfair text-xl text-[#5D4E6D] italic">
                  "{siteInfo.motto}"
                </p>
                <p className="font-montserrat text-sm text-[#8A9B68] mt-2">— Liz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-[#F8F5F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              Our Wellness Studio
            </h2>
            <p className="text-[#6B8CBE] font-montserrat mt-4 max-w-2xl mx-auto">
              Our Wellness Studio offers something for everyone, at all levels. Whether you are looking to practice yoga, meditation, or simply relax in nature, we have you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#8A9B68]/20 flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-[#8A9B68]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-3">Plant Medicine</h3>
              <p className="text-[#6B8CBE] font-montserrat text-sm">
                Learn about natural healing through our plant medicine workshops and guided experiences.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-[#5D4E6D]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-3">Inner Work</h3>
              <p className="text-[#6B8CBE] font-montserrat text-sm">
                Guided meditation, yoga, and introspective practices for personal growth and healing.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#B38E5D]/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#B38E5D]" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-3">Crafts & Skills</h3>
              <p className="text-[#6B8CBE] font-montserrat text-sm">
                Hands-on learning in survival skills, camping, and traditional crafts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#5D4E6D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">What Guides Us</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#5D4E6D] mt-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = iconMap[value.icon] || Sparkles;
              return (
                <div
                  key={value.id}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#5D4E6D] transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-[#5D4E6D] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-[#5D4E6D] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#6B8CBE] font-montserrat leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-24 h-24 text-[#5D4E6D]" />
            </div>
            <div className="relative text-center">
              <blockquote>
                <p className="font-playfair text-2xl md:text-3xl text-[#5D4E6D] leading-relaxed mb-8 italic">
                  "Never forget: your past experiences do not define you. You can grow and become the person you want to be. Believe in yourself, take action, and never stop striving for progress."
                </p>
                <footer>
                  <p className="font-playfair text-xl font-semibold text-[#B38E5D]">— Liz</p>
                  <p className="font-montserrat text-sm text-[#8A9B68] mt-2">Founder & Caretaker</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#8A9B68]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Find Us</span>
              <h2 className="font-playfair text-4xl font-bold text-[#5D4E6D] mt-4 mb-6">
                Located in the Manistee National Forest
              </h2>
              <p className="text-[#6B8CBE] font-montserrat leading-relaxed mb-6">
                Surrounded by Michigan's beautiful forests, our sanctuary offers the perfect escape from everyday life. The peaceful woodlands provide a natural backdrop for meditation, ceremonies, and gatherings of all kinds.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <p className="font-montserrat text-[#5D4E6D]">
                  <strong>Address:</strong><br />
                  {siteInfo.address}
                </p>
                <p className="font-montserrat text-[#5D4E6D] mt-4">
                  <strong>Contact:</strong><br />
                  {siteInfo.phone}<br />
                  {siteInfo.email}
                </p>
              </div>
              <Link to="/booking">
                <Button className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-4 rounded-full">
                  Book Your Stay
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {propertyPhotos.slice(0, 4).map((photo, index) => (
                <img
                  key={photo.id}
                  src={photo.url}
                  alt={photo.alt}
                  className={`rounded-xl shadow-lg w-full h-48 object-cover ${index % 2 === 1 ? 'mt-8' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
