import React from 'react';
import { Heart, Wind, Moon, Users, Feather, Sparkles, Quote } from 'lucide-react';
import { siteInfo, values, propertyPhotos } from '../data/mock';

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
              src={propertyPhotos[1].url}
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
            Welcome to {siteInfo.name}
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed">
            A Sanctuary for Connection
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={propertyPhotos[0].url}
                alt="The Lair of Liz grounds"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">The Beginning</span>
              <h2 className="font-playfair text-4xl font-bold text-[#5D4E6D] mt-4 mb-6">
                Born from a Vision of Inclusive Wilderness
              </h2>
              <div className="space-y-4 text-[#6B8CBE] font-montserrat leading-relaxed">
                <p>
                  Founded on the belief that nature should be accessible to all, The Lair of Liz was born from a vision of inclusive wilderness escapes. We celebrate diversity in people, vehicles, and gatherings—offering a blank canvas for your unique story.
                </p>
                <p>
                  Our 12-acre sanctuary in the heart of Michigan's beautiful woodlands provides the perfect backdrop for spiritual retreats, family reunions, wellness gatherings, and celebrations of all kinds.
                </p>
                <p>
                  Here, there are no rigid rules or age restrictions. Whether you arrive in a vintage RV or a modern camper, whether you're planning a wedding or a drum circle—you're welcome as you are.
                </p>
              </div>
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

      {/* Owner's Note */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-10">
              <Quote className="w-24 h-24 text-[#5D4E6D]" />
            </div>
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#D7C49E]/30 mx-auto mb-8 flex items-center justify-center">
                <Moon className="w-12 h-12 text-[#5D4E6D]" />
              </div>
              <blockquote className="text-center">
                <p className="font-playfair text-2xl md:text-3xl text-[#5D4E6D] leading-relaxed mb-8 italic">
                  "I wanted a place where my own family—and yours—could gather without limits. Here, you're free to be you."
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
                Located in Chase, Michigan
              </h2>
              <p className="text-[#6B8CBE] font-montserrat leading-relaxed mb-6">
                Surrounded by Michigan's beautiful forests, our sanctuary offers the perfect escape from everyday life. The peaceful woodlands provide a natural backdrop for meditation, ceremonies, and gatherings of all kinds.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="font-montserrat text-[#5D4E6D]">
                  <strong>Address:</strong><br />
                  {siteInfo.address}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={propertyPhotos[2].url}
                alt="Forest area"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src={propertyPhotos[3].url}
                alt="Wild blackberries"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
              <img
                src={propertyPhotos[0].url}
                alt="Clearing"
                className="rounded-xl shadow-lg w-full h-48 object-cover"
              />
              <img
                src={propertyPhotos[1].url}
                alt="Trail"
                className="rounded-xl shadow-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
