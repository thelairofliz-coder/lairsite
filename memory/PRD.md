# The Lair of Liz - Spiritual Sanctuary Website

## Project Overview
A comprehensive website for The Lair of Liz, an elevated rustic sanctuary located in the Manistee National Forest in Chase, Michigan. The sanctuary offers private group retreat experiences for 10-40 people.

## Owner Information
- **Name:** Elizabeth Towne
- **Phone:** 231-287-7821
- **Email:** thelairofliz@gmail.com
- **Address:** 8732 E 72nd St, Chase MI, 49623
- **Location:** Manistee National Forest, Chase, MI

---

## Core Features Implemented

### 1. Pricing Structure (Per Person/Per Night, 2-Night Minimum)
| Tier | Group Size | Price/Person/Night | 2-Night Total | Deposit |
|------|------------|-------------------|---------------|---------|
| The Intimate Pod | 10 | $33 | $660 | $200 |
| The Gathering | 20 | $30 | $1,200 | $300 |
| The Council | 30 | $28 | $1,680 | $400 |
| The Full Circle | 40 | $27 | $2,160 | $500 |

### 2. What's Included
- Complete Sanctuary Privacy (exclusive booking)
- Prepared & Intentional Camping Sites
- Sanitation Facilities (portable toilets, handwashing stations)
- The Heart Fire (fire ring per camping pod)
- Grounding Welcome (firewood bundle per group/night)
- Personal Welcome (digital guide + on-site orientation with Liz)
- Peace of Mind (liability insurance)

### 3. Add-Ons

**Farm & Nourishment Experiences:**
- Farmstead Breakfast: $15/person (24-hour notice)
- Harvest Hearth Dinner: $22/person (48-hour notice)
- Garden Walk & Gather: $50/group (~45 minutes)

**Comfort & Convenience Upgrades:**
- The Base Camp Teepee: $125/stay (gathering space for 10-12)
- Power Station Access: $40/day (3 hours charging)
- Extra Shelter Pods: $75/tent/stay (4-6 person tents)

**Professional Support:**
- Guest Facilitator Liaison & Walk-Through: $150 flat fee
  - Must be scheduled 7 days to 3 months prior to visit

### 4. Policies
**Cancellation Policy:**
- >60 days prior: Deposit applied to future booking (within 1 year)
- 30-60 days prior: 50% of total forfeited
- <30 days prior: 100% of total forfeited
- Add-ons: Fully refundable if cancelled >7 days before arrival

**Final Balance:** Due 7 days prior to arrival

### 5. Payment Integration
- **PayPal** (Client ID: LMQB7GDA9RQ3L)
- **Venmo** (enabled through PayPal SDK)
- Options: Pay deposit only OR full amount

---

## Website Pages

1. **Home** (`/`) - Hero with camping image, development notice, pricing preview, features
2. **About** (`/about`) - Story and mission
3. **Gallery** (`/gallery`) - Property photos with category filters
4. **Pricing** (`/pricing`) - Full pricing structure, what's included, add-ons, policies
5. **Amenities** (`/amenities`) - Features and facilities
6. **Booking** (`/booking`) - Inquiry form → redirects to payment
7. **Payment** (`/payment`) - PayPal/Venmo integration
8. **Reviews** (`/reviews`) - Testimonials
9. **Contact** (`/contact`) - Contact form

---

## Key Highlights Featured
- ✅ Kid-Friendly
- ✅ Pet-Friendly
- ✅ Working Farm
- ✅ Manistee National Forest Location
- ✅ Early Developmental Stages Notice
- ✅ Coming Soon: Community Kitchen & Upgraded Restrooms

---

## Technical Stack
- **Frontend:** React, Tailwind CSS, Shadcn/UI
- **Backend:** FastAPI (Python), MongoDB
- **Payment:** PayPal SDK with Venmo enabled

---

## Booking Flow
1. User browses pricing on Homepage or Pricing page
2. User clicks "Book Your Stay" or "Inquire for Availability"
3. User selects group size tier on Booking page
4. User fills out booking inquiry form
5. Form submitted → saved to database → redirected to Payment
6. User selects deposit or full payment
7. User pays via PayPal or Venmo
8. Confirmation shown with booking details

---

## Completed Work (January 2026)
- [x] Multi-page website with bohemian/rustic theme
- [x] Full pricing structure with 4 tiers
- [x] Add-ons section (farm experiences, comfort upgrades, professional support)
- [x] Booking & cancellation policies
- [x] PayPal + Venmo payment integration
- [x] Seamless booking → payment flow
- [x] Kid-friendly & pet-friendly badges
- [x] Manistee National Forest location featured
- [x] Development notice about early stages
- [x] New property photos with camping scenes added
- [x] Facilitator walk-through timing (7 days - 3 months prior)
- [x] Backend API for bookings and contacts

---

## Future Enhancements (Backlog)
- [ ] Email notifications when booking submitted
- [ ] Admin dashboard for managing bookings
- [ ] Calendar availability display
- [ ] Guest welcome guide download
- [ ] Photo lightbox gallery
- [ ] Integration with booking calendar software
