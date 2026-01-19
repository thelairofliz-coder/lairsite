import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Heart, Feather, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { toast } from 'sonner';
import { siteInfo, groupTypes } from '../data/mock';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    groupType: '',
    gatheringPurpose: '',
    preferredDates: '',
    message: ''
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
      const response = await fetch(`${BACKEND_URL}/api/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success('Message sent! We\'ll be in touch soon.');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#5D4E6D]">
        <div className="absolute top-10 left-10 opacity-10">
          <Feather className="w-48 h-48 text-white rotate-45" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Get in Touch</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Let's Co-Create Your Gathering
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed">
            We'd love to hear about your vision
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <h2 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#5D4E6D]" />
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-[#5D4E6D]">Phone</p>
                      <a href={`tel:${siteInfo.phone}`} className="text-[#6B8CBE] font-montserrat hover:text-[#B38E5D] transition-colors">
                        {siteInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#5D4E6D]" />
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-[#5D4E6D]">Email</p>
                      <a href={`mailto:${siteInfo.email}`} className="text-[#6B8CBE] font-montserrat hover:text-[#B38E5D] transition-colors">
                        {siteInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#5D4E6D]" />
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-[#5D4E6D]">Location</p>
                      <p className="text-[#6B8CBE] font-montserrat">
                        {siteInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#5D4E6D]" />
                    </div>
                    <div>
                      <p className="font-montserrat font-medium text-[#5D4E6D]">Response Time</p>
                      <p className="text-[#6B8CBE] font-montserrat">
                        Within 24-48 hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-[#8A9B68]/10 rounded-xl">
                  <div className="flex items-center gap-2 text-[#5D4E6D] mb-3">
                    <Heart className="w-5 h-5 text-[#B38E5D]" />
                    <span className="font-playfair font-semibold">All Are Welcome</span>
                  </div>
                  <p className="text-[#6B8CBE] font-montserrat text-sm leading-relaxed">
                    We honor your journey, whatever form it takes. Don't hesitate to reach out—we're here to help you create something beautiful.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-3xl p-12 shadow-xl text-center">
                  <div className="w-20 h-20 bg-[#8A9B68] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="font-playfair text-3xl font-bold text-[#5D4E6D] mb-4">
                    Message Sent!
                  </h2>
                  <p className="text-[#6B8CBE] font-montserrat mb-8">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        groupType: '',
                        gatheringPurpose: '',
                        preferredDates: '',
                        message: ''
                      });
                    }}
                    className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-3 rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                  <h2 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-8">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-[#5D4E6D] font-montserrat font-medium">Name *</Label>
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
                        <Label htmlFor="groupType" className="text-[#5D4E6D] font-montserrat font-medium">Group Type</Label>
                        <Select onValueChange={(value) => handleSelectChange('groupType', value)}>
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
                        <Label htmlFor="preferredDates" className="text-[#5D4E6D] font-montserrat font-medium">Preferred Dates</Label>
                        <Input
                          id="preferredDates"
                          name="preferredDates"
                          value={formData.preferredDates}
                          onChange={handleInputChange}
                          placeholder="e.g., Sept 15-18, 2025"
                          className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="gatheringPurpose" className="text-[#5D4E6D] font-montserrat font-medium">Gathering Purpose</Label>
                      <Input
                        id="gatheringPurpose"
                        name="gatheringPurpose"
                        value={formData.gatheringPurpose}
                        onChange={handleInputChange}
                        placeholder="What's the occasion?"
                        className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-[#5D4E6D] font-montserrat font-medium">Tell Us About Your Vision *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Share your ideas, questions, or anything else you'd like us to know..."
                        className="mt-2 border-[#D7C49E]/30 focus:border-[#5D4E6D] focus:ring-[#5D4E6D]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-semibold py-6 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>

                  <p className="text-center text-[#8A9B68] font-montserrat text-sm mt-6 flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 text-[#B38E5D]" />
                    All are welcome here. We honor your journey.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
