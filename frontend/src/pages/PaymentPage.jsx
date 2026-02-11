import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';
import { CreditCard, Check, Shield, ArrowRight, Feather, AlertCircle, Users, Smartphone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { pricingTiers } from '../data/mock';

const PAYPAL_CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const bookingData = location.state?.bookingData || null;
  
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [selectedTier, setSelectedTier] = useState(
    bookingData?.pricingTier 
      ? pricingTiers.find(t => t.name === bookingData.pricingTier) || pricingTiers[0]
      : pricingTiers[0]
  );
  const [nights, setNights] = useState(bookingData?.numberOfNights || 2);
  const [peopleCount, setPeopleCount] = useState(
    bookingData?.exactPeopleCount 
      ? parseInt(bookingData.exactPeopleCount) 
      : (selectedTier?.groupSize || 2)
  );
  const [paymentType, setPaymentType] = useState('deposit');
  const [sdkReady, setSdkReady] = useState(false);
  
  const paypalButtonsRef = useRef(null);
  const paypalContainerRef = useRef(null);

  // Calculate totals
  const totalPrice = selectedTier.pricePerPersonPerNight * peopleCount * nights;
  const depositAmount = selectedTier.deposit;
  const amountToPay = paymentType === 'deposit' ? depositAmount : totalPrice;

  // Load PayPal SDK once
  useEffect(() => {
    if (window.paypal) {
      setSdkReady(true);
      return;
    }

    const existingScript = document.querySelector('script[src*="paypal.com/sdk"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => setSdkReady(true));
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&enable-funding=venmo`;
    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () => console.error('PayPal SDK failed to load');
    document.body.appendChild(script);

    return () => {
      // Don't remove script on unmount - let it stay loaded
    };
  }, []);

  // Render PayPal buttons when SDK is ready and values change
  useEffect(() => {
    if (!sdkReady || !window.paypal || !paypalContainerRef.current) return;

    // Close existing buttons if any
    if (paypalButtonsRef.current) {
      try {
        paypalButtonsRef.current.close();
      } catch (e) {
        // Ignore close errors
      }
    }

    // Clear container
    paypalContainerRef.current.innerHTML = '';

    // Create new buttons
    const buttons = window.paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'pill',
        label: 'pay'
      },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            description: `${selectedTier.name} - ${paymentType === 'deposit' ? 'Deposit' : 'Full Payment'} - The Lair of Liz`,
            amount: {
              value: amountToPay.toString()
            },
            custom_id: bookingData?.id || 'direct-payment'
          }]
        });
      },
      onApprove: async (data, actions) => {
        setPaymentStatus('processing');
        try {
          const order = await actions.order.capture();
          console.log('Payment successful:', order);
          setPaymentStatus('success');
        } catch (err) {
          console.error('Capture error:', err);
          setPaymentStatus('error');
        }
      },
      onError: (err) => {
        console.error('PayPal error:', err);
        setPaymentStatus('error');
      },
      onCancel: () => {
        console.log('Payment cancelled');
      }
    });

    buttons.render(paypalContainerRef.current).then(() => {
      paypalButtonsRef.current = buttons;
    }).catch(err => {
      console.error('Button render error:', err);
    });

    return () => {
      if (paypalButtonsRef.current) {
        try {
          paypalButtonsRef.current.close();
        } catch (e) {
          // Ignore
        }
        paypalButtonsRef.current = null;
      }
    };
  }, [sdkReady, selectedTier, paymentType, amountToPay, bookingData]);

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
                Thank you for your {paymentType === 'deposit' ? 'deposit' : 'payment'}! Your booking at The Lair of Liz is {paymentType === 'deposit' ? 'reserved' : 'confirmed'}! Liz will send you a confirmation email shortly with all the details for your stay.
              </p>
              <div className="bg-[#8A9B68]/10 p-6 rounded-xl mb-8 text-left">
                <p className="text-[#5D4E6D] font-montserrat">
                  <strong>Package:</strong> {selectedTier.name} ({peopleCount} people)<br />
                  <strong>Duration:</strong> {nights} nights<br />
                  <strong>Amount Paid:</strong> ${amountToPay.toLocaleString()} ({paymentType === 'deposit' ? 'Deposit' : 'Full Payment'})
                  {paymentType === 'deposit' && (
                    <>
                      <br /><strong>Remaining Balance:</strong> ${(totalPrice - depositAmount).toLocaleString()} (due 7 days before arrival)
                    </>
                  )}
                </p>
                {bookingData && (
                  <div className="mt-4 pt-4 border-t border-[#8A9B68]/20">
                    <p className="text-[#5D4E6D] font-montserrat text-sm">
                      <strong>Guest:</strong> {bookingData.name}<br />
                      <strong>Email:</strong> {bookingData.email}<br />
                      <strong>Dates:</strong> {bookingData.startDate} to {bookingData.endDate}
                    </p>
                  </div>
                )}
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
      <section className="relative py-20 bg-[#5D4E6D]">
        <div className="absolute top-10 right-10 opacity-10">
          <Feather className="w-48 h-48 text-white rotate-12" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Secure Payment</span>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Complete Your Booking
          </h1>
          <p className="text-lg text-[#D7C49E] font-montserrat leading-relaxed flex items-center justify-center gap-3">
            <Shield className="w-5 h-5" />
            Pay securely with PayPal or Venmo
          </p>
        </div>
      </section>

      {/* Booking Summary */}
      {bookingData && (
        <section className="py-8 bg-[#8A9B68]/10 border-b border-[#8A9B68]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <Check className="w-6 h-6 text-[#8A9B68]" />
              <h2 className="font-playfair text-xl font-semibold text-[#5D4E6D]">Booking Inquiry Submitted!</h2>
            </div>
            <p className="text-[#6B8CBE] font-montserrat">
              <strong>{bookingData.name}</strong> • {bookingData.groupType} • {bookingData.startDate} to {bookingData.endDate}
            </p>
          </div>
        </section>
      )}

      {/* Payment Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Selection */}
            <div>
              {!bookingData && (
                <>
                  <h2 className="font-playfair text-2xl font-bold text-[#5D4E6D] mb-6">Select Your Group Size</h2>
                  
                  <div className="space-y-4 mb-8">
                    {pricingTiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => {
                          setSelectedTier(tier);
                          if (!tier.isFlexible) {
                            setPeopleCount(tier.groupSize);
                          }
                        }}
                        className={`bg-white rounded-xl p-5 cursor-pointer transition-all duration-300 border-2 ${
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
                                <Users className="w-4 h-4" /> {tier.isFlexible ? `1-${tier.groupSize}` : tier.groupSize} people
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
                      </div>
                    ))}
                  </div>

                  {/* How Many People */}
                  <div className="bg-[#5D4E6D]/5 rounded-xl p-6 border border-[#5D4E6D]/20 mb-8">
                    <label className="block font-playfair text-lg font-semibold text-[#5D4E6D] mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      How many people in your group?
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                        className="w-10 h-10 rounded-full bg-white text-[#5D4E6D] font-bold hover:bg-[#5D4E6D] hover:text-white transition-colors border border-[#D7C49E]/30"
                      >
                        -
                      </button>
                      <span className="font-playfair text-3xl font-bold text-[#5D4E6D] w-16 text-center">{peopleCount}</span>
                      <button
                        type="button"
                        onClick={() => setPeopleCount(Math.min(40, peopleCount + 1))}
                        className="w-10 h-10 rounded-full bg-white text-[#5D4E6D] font-bold hover:bg-[#5D4E6D] hover:text-white transition-colors border border-[#D7C49E]/30"
                      >
                        +
                      </button>
                      <span className="text-[#6B8CBE] font-montserrat">guests</span>
                    </div>
                    <p className="text-[#8A9B68] font-montserrat text-sm mt-2">
                      {peopleCount} people × ${selectedTier.pricePerPersonPerNight}/night = ${selectedTier.pricePerPersonPerNight * peopleCount}/night
                    </p>
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
                </>
              )}

              {/* Payment Type Selection */}
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <label className="block font-montserrat font-medium text-[#5D4E6D] mb-4">
                  Payment Option
                </label>
                <div className="space-y-3">
                  <div
                    onClick={() => setPaymentType('deposit')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      paymentType === 'deposit'
                        ? 'border-[#5D4E6D] bg-[#5D4E6D]/5'
                        : 'border-[#D7C49E]/30 hover:border-[#5D4E6D]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentType === 'deposit' ? 'border-[#5D4E6D] bg-[#5D4E6D]' : 'border-[#D7C49E]'
                        }`}>
                          {paymentType === 'deposit' && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <p className="font-montserrat font-medium text-[#5D4E6D]">Pay Deposit Now</p>
                          <p className="text-[#8A9B68] font-montserrat text-xs">Secure your dates, pay balance later</p>
                        </div>
                      </div>
                      <p className="font-playfair text-xl font-bold text-[#B38E5D]">${depositAmount}</p>
                    </div>
                  </div>
                  
                  <div
                    onClick={() => setPaymentType('full')}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      paymentType === 'full'
                        ? 'border-[#5D4E6D] bg-[#5D4E6D]/5'
                        : 'border-[#D7C49E]/30 hover:border-[#5D4E6D]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentType === 'full' ? 'border-[#5D4E6D] bg-[#5D4E6D]' : 'border-[#D7C49E]'
                        }`}>
                          {paymentType === 'full' && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <p className="font-montserrat font-medium text-[#5D4E6D]">Pay Full Amount</p>
                          <p className="text-[#8A9B68] font-montserrat text-xs">Complete payment in one transaction</p>
                        </div>
                      </div>
                      <p className="font-playfair text-xl font-bold text-[#B38E5D]">${totalPrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works */}
              <div className="bg-[#F8F5F2] rounded-xl p-6">
                <h3 className="font-playfair text-lg font-semibold text-[#5D4E6D] mb-4">How It Works</h3>
                <div className="space-y-3">
                  {[
                    'Submit booking inquiry',
                    'Pay deposit to secure your dates',
                    'Receive confirmation email from Liz',
                    'Pay remaining balance 7 days before arrival'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#5D4E6D] text-white flex items-center justify-center font-montserrat font-semibold text-xs">
                        {index + 1}
                      </div>
                      <p className="text-[#6B8CBE] font-montserrat text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Payment */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-24">
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
                        {peopleCount} people × ${selectedTier.pricePerPersonPerNight}/night × {nights} nights
                      </span>
                    </div>
                  </div>
                  <div className="border-t border-[#D7C49E]/30 pt-4 space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#6B8CBE] font-montserrat">Total Retreat Cost</span>
                      <span className="font-montserrat text-[#5D4E6D]">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-[#6B8CBE] font-montserrat">Deposit Required</span>
                      <span className="font-montserrat text-[#5D4E6D]">${depositAmount}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#D7C49E]/30">
                      <span className="font-playfair font-bold text-[#5D4E6D]">
                        {paymentType === 'deposit' ? 'Pay Now (Deposit)' : 'Pay Now (Full)'}
                      </span>
                      <span className="font-playfair text-2xl font-bold text-[#B38E5D]">${amountToPay.toLocaleString()}</span>
                    </div>
                    {paymentType === 'deposit' && (
                      <p className="text-[#8A9B68] font-montserrat text-xs">
                        Remaining ${(totalPrice - depositAmount).toLocaleString()} due 7 days before arrival
                      </p>
                    )}
                  </div>
                </div>

                {/* Payment Methods Info */}
                <div className="flex items-center justify-center gap-4 mb-4 text-[#6B8CBE]">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    <span className="font-montserrat text-sm">Venmo</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4" />
                    <span className="font-montserrat text-sm">PayPal</span>
                  </div>
                </div>

                {/* PayPal Button Container */}
                <div ref={paypalContainerRef} id="paypal-button-container" className="mb-6 min-h-[150px]">
                  {!sdkReady && (
                    <div className="flex items-center justify-center h-[150px]">
                      <div className="animate-spin w-8 h-8 border-4 border-[#5D4E6D] border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>

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
                  <p className="font-montserrat text-sm">Secure payments via PayPal and Venmo</p>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="mt-6 text-center">
                <p className="text-[#6B8CBE] font-montserrat text-sm mb-4">
                  Questions about payment? Contact Liz directly.
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
