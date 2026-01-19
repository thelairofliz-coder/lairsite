import React, { useState } from 'react';
import { Calendar, Users, DollarSign, Check, ArrowRight, Feather, Moon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { packages, groupTypes, siteInfo, propertyPhotos } from '../data/mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    groupType: '',
    groupSize: '',
    startDate: '',
    endDate: '',
    packageType: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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
                Thank you for your interest in The Lair of Liz. We'll review your request and send you a confirmation email with payment details within 24-48 hours.
              </p>
              <p className="text-[#8A9B68] font-montserrat text-sm mb-8">
                Check your email at <strong>{formData.email}</strong>
              </p>
              <a href="/" className="inline-block bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-3 rounded-full transition-all duration-300">
                Return Home
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#5D4E6D]">
          <div className="absolute inset-0 opacity-20">
            <img src={propertyPhotos[1].url} alt="Booking" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <Moon className="w-48 h-48 text-white" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Reserve Your Stay</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Your Gathering, Your Way
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed">
            We proudly welcome all groups: family reunions, spiritual retreats, LGBTQ+ gatherings, wedding parties, friend trips, RV clubs, and more.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 border-b border-[#D7C49E]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-[#5D4E6D] text-center mb-12">Our Packages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#B38E5D]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-[#5D4E6D]">{pkg.name}</h3>
                    <p className="text-[#8A9B68] font-montserrat">{pkg.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-playfair text-3xl font-bold text-[#B38E5D]">${pkg.price.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-[#6B8CBE] font-montserrat">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-10">
              <Feather className="w-10 h-10 text-[#B38E5D] mx-auto mb-4" />
              <h2 className="font-playfair text-3xl font-bold text-[#5D4E6D]">Booking Inquiry</h2>
              <p className="text-[#6B8CBE] font-montserrat mt-2">Fill out the form below and we'll get back to you shortly</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-[#5D4E6D] font-montserrat font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
                <div>
                  <Label htmlFor="groupSize" className="text-[#5D4E6D] font-montserrat font-medium">Group Size *</Label>
                  <Input
                    id="groupSize"
                    name="groupSize"
                    type="number"
                    min="1"
                    value={formData.groupSize}
                    onChange={handleInputChange}
                    required
                    placeholder="Number of guests"
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="groupType" className="text-[#5D4E6D] font-montserrat font-medium">Group Type *</Label>
                  <Select onValueChange={(value) => handleSelectChange('groupType', value)} required>
                    <SelectTrigger className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]">
                      <SelectValue placeholder="Select group type" />
                    </SelectTrigger>
                    <SelectContent>
                      {groupTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="packageType" className="text-[#5D4E6D] font-montserrat font-medium">Preferred Package *</Label>
                  <Select onValueChange={(value) => handleSelectChange('packageType', value)} required>
                    <SelectTrigger className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]">
                      <SelectValue placeholder="Select package" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.id} value={pkg.name}>
                          {pkg.name} ({pkg.duration}) - ${pkg.price.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="startDate" className="text-[#5D4E6D] font-montserrat font-medium">Preferred Start Date *</Label>
                  <Input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate" className="text-[#5D4E6D] font-montserrat font-medium">Preferred End Date *</Label>
                  <Input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required
                    className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="specialRequests" className="text-[#5D4E6D] font-montserrat font-medium">Tell Us About Your Vision</Label>
                <Textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your gathering, any special requirements, or questions you have..."
                  className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-semibold py-6 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <p className="text-center text-[#8A9B68] font-montserrat text-sm mt-6">
              After submitting, you'll receive an email with payment instructions via PayPal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
