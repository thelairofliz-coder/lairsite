// Mock Data for The Lair of Liz - Spiritual Campground Retreat

export const siteInfo = {
  name: "The Lair of Liz",
  tagline: "A Spiritual Retreat for All",
  subTagline: "An exclusive 12-acre sanctuary where every group—and every RV—is welcome. Create your own sacred gathering in nature.",
  phone: "231-287-7821",
  email: "thelairofliz@gmail.com",
  address: "8732 E 72nd St, Chase MI, 49623",
  ownerName: "Elizabeth Towne"
};

export const packages = [
  {
    id: 1,
    name: "Weekend Sanctuary",
    duration: "3 nights",
    price: 1800,
    description: "Perfect for weekend gatherings, spiritual retreats, or family reunions"
  },
  {
    id: 2,
    name: "Weekday Retreat",
    duration: "4 nights",
    price: 1500,
    description: "Extended mid-week getaway for deeper connection with nature"
  }
];

export const reviews = [
  {
    id: 1,
    text: "Our women's circle found magic here. The energy of the land is pure, and Liz made everyone feel seen and welcomed.",
    author: "Maya",
    title: "Spiritual Retreat Leader",
    rating: 5
  },
  {
    id: 2,
    text: "Finally, an RV park that didn't judge our vintage camper! Our family reunion was perfect.",
    author: "The Chen Family",
    title: "Family Reunion",
    rating: 5
  },
  {
    id: 3,
    text: "As a queer camping group, we felt safe, celebrated, and free. This place is a gift.",
    author: "Alex & Friends",
    title: "Community Gathering",
    rating: 5
  },
  {
    id: 4,
    text: "The stars, the silence, the freedom… our yoga retreat was transformative.",
    author: "River",
    title: "Yoga Instructor",
    rating: 5
  }
];

export const amenities = [
  { id: 1, name: "Fire Pits", description: "Multiple fire circles for drum circles & storytelling", icon: "Flame" },
  { id: 2, name: "Water Station", description: "Fresh water access for all campers", icon: "Droplets" },
  { id: 3, name: "Restroom", description: "Permanent restroom facility (coming soon)", icon: "Bath" },
  { id: 4, name: "Secluded Parking", description: "Private parking for RVs and vehicles", icon: "Car" },
  { id: 5, name: "Open Fields", description: "Perfect for meditation, yoga & ceremonies", icon: "Trees" },
  { id: 6, name: "Stargazing Skies", description: "Minimal light pollution for celestial viewing", icon: "Star" },
  { id: 7, name: "Digital Guidebook", description: "Local spiritual spots & recommendations", icon: "BookOpen" },
  { id: 8, name: "Natural Altars", description: "Bring your own crystals, flags & decor", icon: "Sparkles" }
];

export const values = [
  { id: 1, title: "Inclusivity", description: "All groups, all ages, all RVs welcome", icon: "Heart" },
  { id: 2, title: "Freedom", description: "No rigid rules, no age restrictions", icon: "Wind" },
  { id: 3, title: "Spirituality", description: "Land that welcomes ceremony, reflection & joy", icon: "Moon" },
  { id: 4, title: "Community", description: "A space for togetherness & connection", icon: "Users" }
];

export const groupTypes = [
  "Family Reunion",
  "Spiritual Retreat",
  "Wedding/Celebration",
  "LGBTQ+ Gathering",
  "Friends Trip",
  "RV Club",
  "Yoga/Wellness",
  "Other"
];

// Real property photos
export const propertyPhotos = [
  {
    id: 1,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/xinpnh99_20250708_185839.jpg",
    alt: "Peaceful wooded clearing at The Lair of Liz",
    category: "The Land"
  },
  {
    id: 2,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/2g9vm8sl_20250708_185919.jpg",
    alt: "Forest path through the sanctuary",
    category: "The Land"
  },
  {
    id: 3,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/j583zaxy_20250708_185944.jpg",
    alt: "Fire pit area surrounded by trees",
    category: "The Land"
  },
  {
    id: 4,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/soqtcmzy_1000002352.jpg",
    alt: "Wild blackberry bushes on the property",
    category: "The Land"
  }
];

// Stock photos for atmosphere
export const atmospherePhotos = [
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1651522986586-181f9b3c5fe2?w=800",
    alt: "Community gathered around campfire",
    category: "Groups in Action"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1593976243570-64e54b3c42b8?w=800",
    alt: "Evening community gathering",
    category: "Groups in Action"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1660590763018-9730ab97a0bb?w=800",
    alt: "Atmospheric campfire at dusk",
    category: "Ceremonial Spaces"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/7149146/pexels-photo-7149146.jpeg?w=800",
    alt: "Bohemian camping setup",
    category: "RV Love"
  }
];

export const allGalleryPhotos = [...propertyPhotos, ...atmospherePhotos];

export const galleryCategories = ["All", "The Land", "Groups in Action", "Ceremonial Spaces", "RV Love"];
