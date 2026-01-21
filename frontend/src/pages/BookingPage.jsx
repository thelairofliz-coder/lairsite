import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, Users, Check, ArrowRight, Feather, Moon, Info, 
  DollarSign, Clock, Baby, Dog, ChevronDown, ChevronUp 
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';
import { 
  pricingTiers, groupTypes, siteInfo, propertyPhotos, 
  farmExperiences, comfortUpgrades, professionalSupport 
} from '../data/mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupType: '',
    groupSize: '',
    pricingTier: '',
    startDate: '',
    endDate: '',
    numberOfNights: 2,
    specialRequests: '',
    addOns: [],
    hasChildren: false,
    hasPets: false,
    bringingFacilitator: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showAddOns, setShowAddOns] = useState(false);

  // Calculate pricing based on selected tier
  const selectedTier = pricingTiers.find(t => t.name === formData.pricingTier);
  const nights = Math.max(2, formData.numberOfNights || 2);
  const basePrice = selectedTier ? selectedTier.pricePerPersonPerNight * selectedTier.groupSize * nights : 0;
  const deposit = selectedTier ? selectedTier.deposit : 0;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Auto-set group size based on tier
    if (name === 'pricingTier') {
      const tier = pricingTiers.find(t => t.name === value);
      if (tier) {
        setFormData(prev => ({ ...prev, groupSize: tier.groupSize.toString() }));
      }
    }
  };

  const handleAddOnToggle = (addOnName) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(addOnName)
        ? prev.addOns.filter(a => a !== addOnName)
        : [...prev.addOns, addOnName]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          estimatedTotal: basePrice,
          deposit: deposit
        })
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success('Booking inquiry submitted! We\'ll be in touch soon.');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#F8F5F2] min-h-screen">
        <section className="py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-[#8A9B68] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-playfair text-3xl font-bold text-[#5D4E6D] mb-4">
                Inquiry Received!
              </h1>
              <p className="text-[#6B8CBE] font-montserrat mb-6">
                Thank you for your interest in The Lair of Liz. Liz will review your request and send you a personalized confirmation email within 24-48 hours with next steps and payment details.
              </p>
              <div className="bg-[#F8F5F2] rounded-xl p-4 mb-6">
                <p className="text-[#5D4E6D] font-montserrat text-sm">
                  <strong>Your Selected Package:</strong> {formData.pricingTier}
                </p>
                {selectedTier && (
                  <>
                    <p className="text-[#8A9B68] font-montserrat text-sm mt-1">
                      Estimated Total: ${basePrice.toLocaleString()} ({nights} nights)
                    </p>
                    <p className="text-[#B38E5D] font-montserrat text-sm">
                      Deposit to Reserve: ${deposit}
                    </p>
                  </>
                )}
              </div>
              <p className="text-[#8A9B68] font-montserrat text-sm mb-8">
                Check your email at <strong>{formData.email}</strong>
              </p>
              <Link to="/">
                <Button 
                  data-testid="return-home-btn"
                  className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-3 rounded-full transition-all duration-300"
                >
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#5D4E6D]">
          <div className="absolute inset-0 opacity-20">
            <img src={propertyPhotos[6]?.url || propertyPhotos[1].url} alt="Booking" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Moon className="w-48 h-48 text-white" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Reserve Your Stay</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Inquire for Availability
          </h1>
          <p className="text-lg text-[#D7C49E] font-montserrat leading-relaxed max-w-2xl mx-auto">
            Fill out the form below to begin planning your group's immersive farmstead experience. 
            Liz will personally reach out to discuss your needs and finalize details.
          </p>
          
          {/* Kid & Pet Friendly Badges */}
          <div className="flex justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Baby className="w-5 h-5 text-[#D7C49E]" />
              <span className="text-white font-montserrat text-sm">Kid-Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Dog className="w-5 h-5 text-[#D7C49E]" />
              <span className="text-white font-montserrat text-sm">Pet-Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Quick View */}
      <section className="py-12 bg-white border-b border-[#D7C49E]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-playfair text-2xl font-bold text-[#5D4E6D]">Select Your Group Size</h2>
            <Link to="/pricing" className="text-[#B38E5D] font-montserrat text-sm hover:underline flex items-center gap-1">
              View full pricing details <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-[#6B8CBE] font-montserrat text-sm mb-6">
            All rates are per person, per night. <strong>2-night minimum</strong> required.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pricingTiers.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => handleSelectChange('pricingTier', tier.name)}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  formData.pricingTier === tier.name
                    ? 'border-[#B38E5D] bg-[#B38E5D]/10'
                    : 'border-[#D7C49E]/30 hover:border-[#B38E5D]/50'
                }`}
              >
                <div className="flex items-center gap-1 mb-1">
                  <Users className="w-4 h-4 text-[#5D4E6D]" />
                  <span className="font-montserrat text-xs text-[#8A9B68]">{tier.groupSize} people</span>
                </div>
                <h3 className="font-playfair text-sm font-semibold text-[#5D4E6D]">{tier.name}</h3>
                <p className="font-playfair text-xl font-bold text-[#B38E5D]">${tier.pricePerPersonPerNight}<span className="text-xs text-[#6B8CBE]">/pp/night</span></p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10">
              <Feather className="w-10 h-10 text-[#B38E5D] mx-auto mb-4" />
              <h2 className="font-playfair text-3xl font-bold text-[#5D4E6D]">Booking Inquiry</h2>
              <p className="text-[#6B8CBE] font-montserrat mt-2">Tell us about your group and preferred dates</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-[#5D4E6D] font-montserrat font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    data-testid="booking-name-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-[#5D4E6D] font-montserrat font-medium">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-testid="booking-email-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-[#5D4E6D] font-montserrat font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    data-testid="booking-phone-input"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
                <div>
                  <Label htmlFor="groupType" className="text-[#5D4E6D] font-montserrat font-medium">Type of Gathering *</Label>
                  <Select onValueChange={(value) => handleSelectChange('groupType', value)} required>
                    <SelectTrigger data-testid="booking-group-type-select" className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]">
                      <SelectValue placeholder="Select gathering type" />
                    </SelectTrigger>
                    <SelectContent>
                      {groupTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Selected Package Display */}
              {selectedTier && (
                <div className="bg-[#8A9B68]/10 rounded-xl p-4 border border-[#8A9B68]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-playfair text-lg font-semibold text-[#5D4E6D]">{selectedTier.name}</h4>
                      <p className="text-[#8A9B68] font-montserrat text-sm">{selectedTier.groupSize} people • ${selectedTier.pricePerPersonPerNight}/person/night</p>
                    </div>
                    <div className="text-right">
                      <p className="font-playfair text-2xl font-bold text-[#B38E5D]">${basePrice.toLocaleString()}</p>
                      <p className="text-[#6B8CBE] font-montserrat text-xs">Est. for {nights} nights</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Dates */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="startDate" className="text-[#5D4E6D] font-montserrat font-medium">Arrival Date *</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    data-testid="booking-start-date-input"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-[#5D4E6D] font-montserrat font-medium">Departure Date *</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    data-testid="booking-end-date-input"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
                <div>
                  <Label htmlFor="numberOfNights" className="text-[#5D4E6D] font-montserrat font-medium">Number of Nights</Label>
                  <Input
                    id="numberOfNights"
                    name="numberOfNights"
                    type="number"
                    min="2"
                    data-testid="booking-nights-input"
                    value={formData.numberOfNights}
                    onChange={handleInputChange}
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                  <p className="text-[#8A9B68] font-montserrat text-xs mt-1">2-night minimum</p>
                </div>
              </div>

              {/* Special Options */}
              <div className="space-y-3">
                <Label className="text-[#5D4E6D] font-montserrat font-medium">Special Considerations</Label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={formData.hasChildren}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, hasChildren: checked }))}
                    />
                    <span className="font-montserrat text-sm text-[#5D4E6D] flex items-center gap-1">
                      <Baby className="w-4 h-4" /> Bringing Children
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={formData.hasPets}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, hasPets: checked }))}
                    />
                    <span className="font-montserrat text-sm text-[#5D4E6D] flex items-center gap-1">
                      <Dog className="w-4 h-4" /> Bringing Pets
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      checked={formData.bringingFacilitator}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, bringingFacilitator: checked }))}
                    />
                    <span className="font-montserrat text-sm text-[#5D4E6D]">Bringing Outside Facilitator</span>
                  </label>
                </div>
              </div>

              {/* Add-Ons Accordion */}
              <div className="border border-[#D7C49E]/30 rounded-xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowAddOns(!showAddOns)}
                  className="w-full flex items-center justify-between p-4 bg-[#F8F5F2] hover:bg-[#F8F5F2]/80 transition-colors"
                >
                  <span className="font-montserrat font-medium text-[#5D4E6D]">
                    Interested in Add-Ons? (Optional)
                  </span>
                  {showAddOns ? <ChevronUp className="w-5 h-5 text-[#5D4E6D]" /> : <ChevronDown className="w-5 h-5 text-[#5D4E6D]" />}
                </button>
                
                {showAddOns && (
                  <div className="p-4 space-y-4">
                    <p className="text-[#6B8CBE] font-montserrat text-sm">
                      Select any add-ons you're interested in. Final pricing will be confirmed in your quote.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-montserrat font-medium text-[#5D4E6D] text-sm">Farm & Nourishment</h4>
                      {farmExperiences.map((item) => (
                        <label key={item.id} className="flex items-center gap-3 p-2 hover:bg-[#F8F5F2] rounded cursor-pointer">
                          <Checkbox
                            checked={formData.addOns.includes(item.name)}
                            onCheckedChange={() => handleAddOnToggle(item.name)}
                          />
                          <span className="font-montserrat text-sm text-[#5D4E6D]">
                            {item.name} - ${item.price} {item.priceType}
                          </span>
                        </label>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-montserrat font-medium text-[#5D4E6D] text-sm">Comfort Upgrades</h4>
                      {comfortUpgrades.map((item) => (
                        <label key={item.id} className="flex items-center gap-3 p-2 hover:bg-[#F8F5F2] rounded cursor-pointer">
                          <Checkbox
                            checked={formData.addOns.includes(item.name)}
                            onCheckedChange={() => handleAddOnToggle(item.name)}
                          />
                          <span className="font-montserrat text-sm text-[#5D4E6D]">
                            {item.name} - ${item.price} {item.priceType}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <Label htmlFor="specialRequests" className="text-[#5D4E6D] font-montserrat font-medium">Tell Us About Your Vision</Label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  data-testid="booking-special-requests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your gathering, any accessibility needs, dietary requirements, or questions you have..."
                  className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                />
              </div>

              {/* Deposit Info */}
              {selectedTier && (
                <div className="bg-[#B38E5D]/10 rounded-xl p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#B38E5D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-montserrat text-sm text-[#5D4E6D]">
                      <strong>Deposit Required:</strong> ${selectedTier.deposit} (non-refundable) to secure your dates.
                    </p>
                    <p className="font-montserrat text-xs text-[#6B8CBE] mt-1">
                      Final balance due 7 days before arrival. Payment instructions will be sent after inquiry approval.
                    </p>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                data-testid="booking-submit-btn"
                disabled={isSubmitting || !formData.pricingTier}
                className="w-full bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-semibold py-6 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <p className="text-center text-[#8A9B68] font-montserrat text-sm mt-6">
              After submitting, Liz will personally review your request and reach out within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
