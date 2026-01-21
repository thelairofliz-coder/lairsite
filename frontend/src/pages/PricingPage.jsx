import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Check, ArrowRight, Shield, Tent, Bath, Flame, TreePine, Heart, 
  ShieldCheck, Coffee, UtensilsCrossed, Sprout, Home, Zap, Info, 
  Calendar, Clock, FileText, Download, Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { 
  pricingTiers, whatsIncluded, farmExperiences, comfortUpgrades, 
  professionalSupport, cancellationPolicy, noteFromLiz, siteInfo 
} from '../data/mock';

const iconMap = {
  Shield, Tent, Bath, Flame, TreePine, Heart, ShieldCheck, Coffee,
  UtensilsCrossed, Sprout, Home, Zap, Users
};

const PricingPage = () => {
  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#5D4E6D] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#B38E5D] blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#8A9B68] blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">
            Private Group Retreat Pricing
          </span>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            The Lair of Liz
          </h1>
          <p className="text-[#D7C49E] font-montserrat text-lg max-w-2xl mx-auto mb-4">
            {siteInfo.location}
          </p>
          <p className="text-white/80 font-montserrat text-xl max-w-3xl mx-auto leading-relaxed">
            An Elevated Rustic Sanctuary for Spiritual Gatherings
          </p>
          <p className="text-[#D7C49E] font-montserrat mt-6 max-w-2xl mx-auto">
            A private and personally curated sanctuary on a working farm, designed exclusively for your group's retreat. 
            Our pricing reflects our commitment to providing a meticulously prepared, authentic, and grounding environment for connection and renewal.
          </p>
        </div>
      </section>

      {/* Core Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Core Retreat Pricing</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4E6D] mt-4">
              Choose Your Group Size
            </h2>
            <p className="text-[#6B8CBE] font-montserrat mt-4 max-w-xl mx-auto">
              All rates are per person, per night. A <strong>2-night minimum stay</strong> is required for all bookings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <div 
                key={tier.id}
                className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${
                  index === 3 ? 'border-[#B38E5D]' : 'border-transparent hover:border-[#D7C49E]'
                }`}
              >
                {index === 3 && (
                  <div className="bg-[#B38E5D] text-white text-xs font-montserrat font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    MAX CAPACITY
                  </div>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-[#5D4E6D]" />
                  <span className="font-montserrat text-sm text-[#8A9B68]">{tier.groupSize} People</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#5D4E6D] mb-2">{tier.name}</h3>
                
                <div className="my-4">
                  <span className="font-playfair text-4xl font-bold text-[#B38E5D]">${tier.pricePerPersonPerNight}</span>
                  <span className="text-[#6B8CBE] font-montserrat text-sm">/person/night</span>
                </div>
                
                <div className="bg-[#F8F5F2] rounded-lg p-3 mb-4">
                  <p className="font-montserrat text-sm text-[#5D4E6D]">
                    <strong>2-Night Weekend:</strong> ${tier.totalWeekend.toLocaleString()}
                  </p>
                </div>
                
                <p className="text-[#6B8CBE] font-montserrat text-sm mb-4 leading-relaxed">
                  {tier.idealFor}
                </p>
                
                <div className="text-[#8A9B68] font-montserrat text-xs">
                  Deposit: ${tier.deposit}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#6B8CBE] font-montserrat text-sm mt-8 italic">
            *Total reflects base lodging cost. See "What's Included" for full value.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-[#5D4E6D]/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Your Investment Includes</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4E6D] mt-4">
              What's Included in Your Retreat Fee
            </h2>
            <p className="text-[#6B8CBE] font-montserrat mt-4 max-w-xl mx-auto">
              Your investment ensures a seamless and authentic experience. Every booking includes:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item) => {
              const IconComponent = iconMap[item.icon] || Check;
              return (
                <div 
                  key={item.id}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#8A9B68]/20 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#8A9B68]" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-[#5D4E6D] mb-1">{item.title}</h3>
                    <p className="text-[#6B8CBE] font-montserrat text-sm">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Enhance Your Experience</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4E6D] mt-4">
              Curated Experiences & Add-Ons
            </h2>
            <p className="text-[#6B8CBE] font-montserrat mt-4 max-w-xl mx-auto">
              Maximize convenience and deepen your group's connection to the land with our hands-on offerings.
            </p>
          </div>

          {/* Farm & Nourishment */}
          <div className="mb-16">
            <h3 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-6 flex items-center gap-3">
              <UtensilsCrossed className="w-6 h-6 text-[#B38E5D]" />
              Farm & Nourishment Experiences
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {farmExperiences.map((item) => {
                const IconComponent = iconMap[item.icon] || Sprout;
                return (
                  <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#D7C49E]/20 hover:border-[#B38E5D] transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#B38E5D]/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#B38E5D]" />
                      </div>
                      <div className="text-right">
                        <span className="font-playfair text-2xl font-bold text-[#B38E5D]">${item.price}</span>
                        <p className="text-[#6B8CBE] font-montserrat text-xs">{item.priceType}</p>
                      </div>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-[#5D4E6D]">{item.name}</h4>
                    {item.subtitle && <p className="text-[#8A9B68] font-montserrat text-sm mb-2">{item.subtitle}</p>}
                    <p className="text-[#6B8CBE] font-montserrat text-sm mb-3">{item.description}</p>
                    {item.note && (
                      <p className="text-[#B38E5D] font-montserrat text-xs italic flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.note}
                      </p>
                    )}
                    {item.duration && (
                      <p className="text-[#8A9B68] font-montserrat text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.duration}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Comfort & Convenience */}
          <div className="mb-16">
            <h3 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-6 flex items-center gap-3">
              <Home className="w-6 h-6 text-[#B38E5D]" />
              Comfort & Convenience Upgrades
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {comfortUpgrades.map((item) => {
                const IconComponent = iconMap[item.icon] || Home;
                return (
                  <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#D7C49E]/20 hover:border-[#B38E5D] transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#5D4E6D]" />
                      </div>
                      <div className="text-right">
                        <span className="font-playfair text-2xl font-bold text-[#B38E5D]">${item.price}</span>
                        <p className="text-[#6B8CBE] font-montserrat text-xs">{item.priceType}</p>
                      </div>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-[#5D4E6D] mb-2">{item.name}</h4>
                    <p className="text-[#6B8CBE] font-montserrat text-sm mb-2">{item.description}</p>
                    {item.note && (
                      <p className="text-[#8A9B68] font-montserrat text-xs italic">{item.note}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Support */}
          <div>
            <h3 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#B38E5D]" />
              Professional Support
            </h3>
            <div className="max-w-xl">
              {professionalSupport.map((item) => {
                const IconComponent = iconMap[item.icon] || Users;
                return (
                  <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm border border-[#D7C49E]/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#8A9B68]/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#8A9B68]" />
                      </div>
                      <div className="text-right">
                        <span className="font-playfair text-2xl font-bold text-[#B38E5D]">${item.price}</span>
                        <p className="text-[#6B8CBE] font-montserrat text-xs">{item.priceType}</p>
                      </div>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold text-[#5D4E6D] mb-2">{item.name}</h4>
                    <p className="text-[#6B8CBE] font-montserrat text-sm mb-3">{item.description}</p>
                    {item.timing && (
                      <p className="text-[#B38E5D] font-montserrat text-xs font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {item.timing}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-[#5D4E6D]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#8A9B68] font-montserrat text-sm tracking-widest uppercase">Important Information</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#5D4E6D] mt-4">
              Booking & Financial Policies
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Reservation & Deposit */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-[#B38E5D]" />
                <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D]">Reservation & Setup Deposit</h3>
              </div>
              <p className="text-[#6B8CBE] font-montserrat text-sm mb-4">
                A non-refundable deposit is required to secure your dates and cover dedicated preparation.
              </p>
              <ul className="space-y-2 font-montserrat text-sm">
                {pricingTiers.map((tier) => (
                  <li key={tier.id} className="flex justify-between text-[#5D4E6D]">
                    <span>{tier.name} ({tier.groupSize})</span>
                    <span className="font-semibold">${tier.deposit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-[#D7C49E]/20">
                <p className="text-[#8A9B68] font-montserrat text-sm">
                  <strong>Final Balance:</strong> The remaining balance, including any selected add-ons, is due 7 days prior to arrival.
                </p>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#B38E5D]" />
                <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D]">Cancellation Policy</h3>
              </div>
              <p className="text-[#6B8CBE] font-montserrat text-sm mb-4">
                Due to the exclusive, prepared nature of our bookings:
              </p>
              <ul className="space-y-3 font-montserrat text-sm">
                {cancellationPolicy.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-[#B38E5D] font-semibold whitespace-nowrap">{item.timeframe}:</span>
                    <span className="text-[#5D4E6D]">{item.policy}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-[#D7C49E]/20">
                <p className="text-[#8A9B68] font-montserrat text-xs italic">
                  *Add-on packages are fully refundable if cancelled more than 7 days before arrival.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Note from Liz */}
      <section className="py-16 bg-[#8A9B68]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-[#8A9B68]/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#8A9B68]/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 text-[#8A9B68]" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold text-[#5D4E6D] mb-3">A Note from Liz</h3>
                <p className="text-[#6B8CBE] font-montserrat leading-relaxed italic">
                  "{noteFromLiz}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#5D4E6D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-10 h-10 text-[#D7C49E] mx-auto mb-6" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your Sanctuary?
          </h2>
          <p className="text-[#D7C49E] font-montserrat text-lg mb-8 max-w-2xl mx-auto">
            Availability for curated retreats at The Lair is limited. Contact us to check dates, discuss meal plans, and begin planning your group's immersive farmstead experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button 
                data-testid="inquire-availability-btn"
                className="bg-[#B38E5D] hover:bg-[#D7C49E] hover:text-[#5D4E6D] text-white font-montserrat font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300 flex items-center gap-2"
              >
                Inquire for Availability & Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
