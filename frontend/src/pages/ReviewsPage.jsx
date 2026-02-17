import React, { useState, useEffect } from 'react';
import { Star, Quote, Feather, Loader2 } from 'lucide-react';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/reviews`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#F8F5F2] min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#5D4E6D] animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#5D4E6D]">
        <div className="absolute top-10 right-10 opacity-10">
          <Quote className="w-48 h-48 text-white" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#D7C49E] font-montserrat text-sm tracking-widest uppercase">Testimonials</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            Voices from the Land
          </h1>
          <p className="text-xl text-[#D7C49E] font-montserrat leading-relaxed">
            Stories from those who've found magic in our sanctuary
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                data-testid={`review-card-${review.id}`}
                className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute top-4 right-4 opacity-5">
                  <Quote className="w-24 h-24 text-[#5D4E6D]" />
                </div>
                
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#B38E5D] fill-current" />
                    ))}
                  </div>
                  
                  <p className={`text-[#5D4E6D] font-montserrat leading-relaxed mb-6 italic ${
                    index === 0 ? 'text-xl' : 'text-lg'
                  }`}>
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5D4E6D]/10 flex items-center justify-center">
                      <Feather className="w-6 h-6 text-[#5D4E6D]" />
                    </div>
                    <div>
                      <p className="font-playfair font-semibold text-[#5D4E6D]">
                        — {review.author}
                      </p>
                      <p className="font-montserrat text-sm text-[#8A9B68]">
                        {review.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#5D4E6D]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold text-[#5D4E6D] mb-6">
            Ready to Write Your Own Story?
          </h2>
          <p className="text-[#6B8CBE] font-montserrat text-lg leading-relaxed mb-8">
            Join the growing community of souls who've found their sanctuary at The Lair of Liz. Your unique gathering awaits.
          </p>
          <a
            href="/booking"
            data-testid="begin-journey-btn"
            className="inline-block bg-[#B38E5D] hover:bg-[#8A9B68] text-white font-montserrat font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Begin Your Journey
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
