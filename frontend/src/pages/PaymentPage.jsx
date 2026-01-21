import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CreditCard, Check, Shield, ArrowRight, Feather, AlertCircle, Users } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteInfo, pricingTiers } from '../data/mock';

const PAYPAL_CLIENT_ID = 'LMQB7GDA9RQ3L';

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get('booking');
  const [paymentStatus, setPaymentStatus] = useState('pending'); // pending, processing, success, error
  const [selectedTier, setSelectedTier] = useState(pricingTiers[0]);
  const [nights, setNights] = useState(2);

  // Calculate total based on tier and nights
  const totalPrice = selectedTier.pricePerPersonPerNight * selectedTier.groupSize * nights;

  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                description: `${selectedTier.name} (${nights} nights) - The Lair of Liz`,
                amount: {
                  value: totalPrice.toString()
                }
              }]
            });
          },
          onApprove: async (data, actions) => {
            setPaymentStatus('processing');
            const order = await actions.order.capture();
            console.log('Payment successful:', order);
            setPaymentStatus('success');
          },
          onError: (err) => {
            console.error('PayPal error:', err);
            setPaymentStatus('error');
          }
        }).render('#paypal-button-container');
      }
    };
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src*="paypal"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [selectedTier, nights, totalPrice]);

  if (paymentStatus === 'success') {
    return (
      <div className="bg-[#F8F5F2] min-h-screen">
        <section className="py-32">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-[#8A9B68] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h1 className="font-playfair text-3xl font-bold text-[#5D4E6D] mb-4">
                Payment Successful!
              </h1>
              <p className="text-[#6B8CBE] font-montserrat mb-6">
                Thank you for your payment. Your booking at The Lair of Liz is confirmed! You'll receive a confirmation email shortly with all the details for your stay.
              </p>
              <div className="bg-[#8A9B68]/10 p-6 rounded-xl mb-8">
                <p className="text-[#5D4E6D] font-montserrat">
                  <strong>Package:</strong> {selectedTier.name} ({selectedTier.groupSize} people)<br />
                  <strong>Duration:</strong> {nights} nights<br />
                  <strong>Amount Paid:</strong> ${totalPrice.toLocaleString()}
                </p>
              </div>
              <Link to="/">
                <Button 
                  data-testid="payment-return-home-btn"
                  className="bg-[#5D4E6D] hover:bg-[#B38E5D] text-white font-montserrat font-medium px-8 py-3 rounded-full"
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
      <section className="relative py-24 bg-[#5D4E6D]">
        <div className="absolute top-10 right-10 opacity-10">
          <Feather className="w-48 h-48 text-white rotate-12" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Secure Payment</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Secure Your Stay
          </h1>
          <p className="text-lg text-[#D7C49E] font-montserrat leading-relaxed">
            Complete your booking with secure PayPal payment
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Package Selection */}
            <div>
              <h2 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-6">Select Your Group Size</h2>
              
              <div className="space-y-4 mb-8">
                {pricingTiers.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                      selectedTier.id === tier.id
                        ? 'border-[#5D4E6D] shadow-lg'
                        : 'border-transparent shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedTier.id === tier.id
                            ? 'border-[#5D4E6D] bg-[#5D4E6D]'
                            : 'border-[#D7C49E]'
                        }`}>
                          {selectedTier.id === tier.id && (
                            <Check className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-playfair text-lg font-semibold text-[#5D4E6D]">{tier.name}</h3>
                          <p className="text-[#8A9B68] font-montserrat text-sm flex items-center gap-1">
                            <Users className="w-4 h-4" /> {tier.groupSize} people
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-playfair text-xl font-bold text-[#B38E5D]">
                          ${tier.pricePerPersonPerNight}
                        </p>
                        <p className="text-[#6B8CBE] font-montserrat text-xs">/person/night</p>
                      </div>
                    </div>
                    <p className="text-[#6B8CBE] font-montserrat text-sm mt-3 ml-10">
                      {tier.idealFor}
                    </p>
                  </div>
                ))}
              </div>

              {/* Number of Nights */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <label className="block font-montserrat font-medium text-[#5D4E6D] mb-3">
                  Number of Nights
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setNights(Math.max(2, nights - 1))}
                    className="w-10 h-10 rounded-full bg-[#F8F5F2] text-[#5D4E6D] font-bold hover:bg-[#5D4E6D] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="font-playfair text-2xl font-bold text-[#5D4E6D] w-12 text-center">{nights}</span>
                  <button
                    type="button"
                    onClick={() => setNights(nights + 1)}
                    className="w-10 h-10 rounded-full bg-[#F8F5F2] text-[#5D4E6D] font-bold hover:bg-[#5D4E6D] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className="text-[#8A9B68] font-montserrat text-xs mt-2">2-night minimum required</p>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="font-playfair text-lg font-semibold text-[#5D4E6D] mb-4">How It Works</h3>
                <div className="space-y-4">
                  {[
                    'Fill out booking inquiry form',
                    'Receive confirmation & invoice via email',
                    'Pay deposit securely through PayPal',
                    'Get your digital guidebook & access details'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#5D4E6D] text-white flex items-center justify-center font-montserrat font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-[#6B8CBE] font-montserrat">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard className="w-6 h-6 text-[#5D4E6D]" />
                  <h2 className="font-playfair text-xl font-bold text-[#5D4E6D]">Payment Details</h2>
                </div>

                {/* Order Summary */}
                <div className="bg-[#F8F5F2] rounded-xl p-6 mb-6">
                  <h3 className="font-montserrat font-medium text-[#5D4E6D] mb-4">Order Summary</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[#6B8CBE] font-montserrat">{selectedTier.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#8A9B68] font-montserrat">
                        {selectedTier.groupSize} people × ${selectedTier.pricePerPersonPerNight}/night × {nights} nights
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-[#D7C49E]/30 pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-playfair font-bold text-[#5D4E6D]">Total</span>
                      <span className="font-playfair text-2xl font-bold text-[#B38E5D]">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#8A9B68] font-montserrat">Deposit Required</span>
                      <span className="font-montserrat font-medium text-[#5D4E6D]">${selectedTier.deposit}</span>
                    </div>
                  </div>
                </div>

                {/* PayPal Button Container */}
                <div id="paypal-button-container" className="mb-6"></div>

                {paymentStatus === 'processing' && (
                  <div className="text-center py-4">
                    <div className="animate-spin w-8 h-8 border-4 border-[#5D4E6D] border-t-transparent rounded-full mx-auto mb-2"></div>
                    <p className="text-[#6B8CBE] font-montserrat">Processing payment...</p>
                  </div>
                )}

                {paymentStatus === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-center gap-3 mb-6">
                    <AlertCircle className="w-5 h-5" />
                    <p className="font-montserrat text-sm">Payment failed. Please try again.</p>
                  </div>
                )}

                {/* Security Note */}
                <div className="flex items-center gap-3 justify-center text-[#8A9B68]">
                  <Shield className="w-5 h-5" />
                  <p className="font-montserrat text-sm">All payments are secure and protected by PayPal</p>
                </div>
              </div>

              {/* Alternative Payment */}
              <div className="mt-6 text-center">
                <p className="text-[#6B8CBE] font-montserrat text-sm mb-4">
                  Prefer to pay another way? Contact us directly.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#5D4E6D] text-[#5D4E6D] hover:bg-[#5D4E6D] hover:text-white font-montserrat rounded-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
