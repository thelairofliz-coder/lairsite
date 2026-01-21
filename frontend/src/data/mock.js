// Data for The Lair of Liz - An Elevated Rustic Sanctuary for Spiritual Gatherings

export const siteInfo = {
  name: "The Lair of Liz",
  tagline: "An Elevated Rustic Sanctuary",
  subTagline: "A private and personally curated sanctuary nestled in the heart of the Manistee National Forest, designed exclusively for your group's retreat. Experience connection and renewal surrounded by towering trees and pristine wilderness.",
  phone: "231-287-7821",
  email: "thelairofliz@gmail.com",
  address: "8732 E 72nd St, Chase MI, 49623",
  ownerName: "Elizabeth Towne",
  location: "Chase, MI • Manistee National Forest"
};

// Development notice
export const developmentNotice = {
  title: "Growing Together",
  message: "Our sanctuary is in its early developmental stages, and we're excited to grow with our community! Nestled deep within the Manistee National Forest, surrounded by towering trees and natural beauty. Coming within the next year: a large community cooking area and upgraded outhouse/waste systems. Join us on this journey as we create something beautiful together."
};

// Core Retreat Pricing - Per person, per night (2-night minimum)
export const pricingTiers = [
  {
    id: 1,
    name: "The Intimate Pod",
    groupSize: 10,
    pricePerPersonPerNight: 33,
    totalWeekend: 660,
    idealFor: "Small circles, mastermind retreats, deep personal work",
    deposit: 200
  },
  {
    id: 2,
    name: "The Gathering",
    groupSize: 20,
    pricePerPersonPerNight: 30,
    totalWeekend: 1200,
    idealFor: "Wellness workshops, spiritual groups, community retreats",
    deposit: 300
  },
  {
    id: 3,
    name: "The Council",
    groupSize: 30,
    pricePerPersonPerNight: 28,
    totalWeekend: 1680,
    idealFor: "Larger communities, multi-day seminars, extended gatherings",
    deposit: 400
  },
  {
    id: 4,
    name: "The Full Circle",
    groupSize: 40,
    pricePerPersonPerNight: 27,
    totalWeekend: 2160,
    idealFor: "Maximum capacity events, transformational immersions, large group ceremonies",
    deposit: 500
  }
];

// What's Included
export const whatsIncluded = [
  {
    id: 1,
    title: "Complete Sanctuary Privacy",
    description: "Exclusive booking of the entire Lair property",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Prepared & Intentional Camping Sites",
    description: "Cleared, level areas spaced for energy flow and privacy",
    icon: "Tent"
  },
  {
    id: 3,
    title: "Sanitation Facilities",
    description: "Serviced, clean portable toilets and handwashing stations",
    icon: "Bath"
  },
  {
    id: 4,
    title: "The Heart Fire",
    description: "A dedicated, pre-laid fire ring per camping pod",
    icon: "Flame"
  },
  {
    id: 5,
    title: "Grounding Welcome",
    description: "One generous bundle of seasoned firewood per group, per night",
    icon: "TreePine"
  },
  {
    id: 6,
    title: "Personal Welcome",
    description: "A detailed digital guide and an on-site orientation with Liz",
    icon: "Heart"
  },
  {
    id: 7,
    title: "Peace of Mind",
    description: "Comprehensive liability insurance for your stay",
    icon: "ShieldCheck"
  }
];

// Add-Ons: Farm & Nourishment Experiences
export const farmExperiences = [
  {
    id: 1,
    name: "Farmstead Breakfast",
    subtitle: "Rustic Meal",
    price: 15,
    priceType: "per person",
    description: "Liz prepares and serves a hearty, simple breakfast. Think farm-fresh scrambled eggs (when available), rustic potatoes, toast, and locally sourced coffee. Served in the communal area.",
    note: "Select morning, 24-hour notice required",
    icon: "Coffee"
  },
  {
    id: 2,
    name: "Harvest Hearth",
    subtitle: "Rustic Dinner",
    price: 22,
    priceType: "per person",
    description: "A nourishing end to the day. A one-pot wonder or grilled fare featuring local produce, served with a side and bread. Prepared and served by Liz over the open fire or camp stove.",
    note: "Select evening, 48-hour notice required",
    icon: "UtensilsCrossed"
  },
  {
    id: 3,
    name: "Garden Walk & Gather",
    price: 50,
    priceType: "per group",
    description: "A guided walk through the farm's growing spaces with Liz. Learn basic harvesting tips and gather a modest, seasonal bounty of fresh produce (e.g., herbs, greens, tomatoes) for your group to enjoy.",
    duration: "~45 minutes",
    icon: "Sprout"
  }
];

// Add-Ons: Comfort & Convenience Upgrades
export const comfortUpgrades = [
  {
    id: 1,
    name: "The Base Camp Teepee",
    price: 125,
    priceType: "per stay",
    description: "Our large, furnished teepee serves as your group's dry, dedicated gathering space. Includes battery-powered string lighting, floor rugs, and cushions for 10-12 people. A guaranteed retreat from weather.",
    icon: "Home"
  },
  {
    id: 2,
    name: "Power Station Access",
    price: 40,
    priceType: "per day",
    description: "Generator-powered charging station available for 3 hours each evening (e.g., 6-9 PM). Safely charge phones, small speakers, or medical devices.",
    note: "Fuel & setup included",
    icon: "Zap"
  },
  {
    id: 3,
    name: "Extra Shelter Pods",
    price: 75,
    priceType: "per small tent, per stay",
    description: "Additional 4-6 person weatherproof tents with basic interior lighting, pre-set for those who prefer not to pitch their own.",
    icon: "Tent"
  }
];

// Add-Ons: Professional Support
export const professionalSupport = [
  {
    id: 1,
    name: "Guest Facilitator Liaison & Walk-Through",
    price: 150,
    priceType: "flat fee",
    description: "For groups bringing an outside facilitator (yoga teacher, chef, etc.). Liz handles all pre-arrival coordination and provides a dedicated, in-depth site orientation for your facilitator to ensure their needs for space, sound, and setup are perfectly met.",
    timing: "Must be scheduled 7 days to 3 months prior to your visit",
    icon: "Users"
  }
];

// Cancellation Policy
export const cancellationPolicy = [
  {
    timeframe: "> 60 days prior",
    policy: "Deposit may be applied to a future booking within one year"
  },
  {
    timeframe: "30-60 days prior",
    policy: "50% of total booking fee is forfeited"
  },
  {
    timeframe: "< 30 days prior",
    policy: "100% of total booking fee is forfeited"
  }
];

// Classes and workshops
export const classes = [
  {
    id: 1,
    name: "Plant Medicine Wisdom",
    description: "Learn about local medicinal plants, their traditional uses, and how to identify them in the wild. Discover nature's pharmacy right on our land.",
    duration: "3-4 hours",
    icon: "Leaf"
  },
  {
    id: 2,
    name: "Wilderness Survival Skills",
    description: "Master essential camping and outdoor skills—fire building, shelter construction, foraging basics, and how to live harmoniously with the land.",
    duration: "Half day",
    icon: "Compass"
  },
  {
    id: 3,
    name: "Land Connection Workshop",
    description: "Learn to read the landscape, understand local ecosystems, and develop a deeper spiritual connection with the natural world around you.",
    duration: "2-3 hours",
    icon: "Trees"
  },
  {
    id: 4,
    name: "Custom Group Sessions",
    description: "Bring your own instructor or work with us to create custom yoga sessions, meditation circles, drum circles, or wellness workshops.",
    duration: "Flexible",
    icon: "Users"
  }
];

// Venue rental info
export const venueRental = {
  title: "Venue for Your Vision",
  description: "Are you a yoga instructor, wellness practitioner, or event organizer looking for a unique natural venue? We partner with businesses and individuals to provide the perfect setting for your offerings. Host your retreats, workshops, classes, or special events on our beautiful sanctuary.",
  features: [
    "Flexible scheduling & package options",
    "Work with your existing group or help you promote",
    "Perfect for yoga, meditation, wellness retreats",
    "Ideal for team building & corporate retreats",
    "Available for photography & creative sessions"
  ]
};

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
    text: "Finally, an RV park that didn't judge our vintage camper! Our family reunion was perfect. The kids loved exploring the woods.",
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
    text: "The stars, the silence, the freedom… our yoga retreat was transformative. We'll be back!",
    author: "River",
    title: "Yoga Instructor",
    rating: 5
  }
];

export const amenities = [
  { id: 1, name: "Fire Pits", description: "Multiple fire circles for drum circles & storytelling", icon: "Flame" },
  { id: 2, name: "Water Station", description: "Fresh water access for all campers", icon: "Droplets" },
  { id: 3, name: "Outhouse Facilities", description: "Basic facilities with upgrades coming soon", icon: "Bath" },
  { id: 4, name: "Secluded Parking", description: "Private parking for RVs and vehicles of all types", icon: "Car" },
  { id: 5, name: "Open Fields", description: "Perfect for meditation, yoga & ceremonies", icon: "Trees" },
  { id: 6, name: "Stargazing Skies", description: "Minimal light pollution for celestial viewing", icon: "Star" },
  { id: 7, name: "Kid-Friendly", description: "Safe spaces for children to explore nature", icon: "Baby" },
  { id: 8, name: "Pet-Friendly", description: "Your furry companions are welcome here", icon: "Dog" }
];

// Coming soon features
export const comingSoon = [
  {
    id: 1,
    name: "Community Kitchen",
    description: "A large covered cooking area for group meals and gatherings",
    timeline: "Coming within the next year"
  },
  {
    id: 2,
    name: "Upgraded Restrooms",
    description: "Improved outhouse/waste systems for better comfort",
    timeline: "Coming within the next year"
  },
  {
    id: 3,
    name: "Shower Facilities",
    description: "Hot water shower stations for guests",
    timeline: "Future Plans"
  }
];

export const values = [
  { id: 1, title: "Inclusivity", description: "All groups, all ages, all RVs welcome", icon: "Heart" },
  { id: 2, title: "Freedom", description: "No rigid rules—your gathering, your way", icon: "Wind" },
  { id: 3, title: "Spirituality", description: "Land that welcomes ceremony, reflection & joy", icon: "Moon" },
  { id: 4, title: "Community", description: "A space for togetherness & connection", icon: "Users" }
];

export const highlights = [
  { id: 1, title: "Kid-Friendly", description: "Safe, nature-rich environment for children to explore, learn, and play", icon: "Baby" },
  { id: 2, title: "Pet-Friendly", description: "Your four-legged family members are always welcome at The Lair", icon: "Dog" },
  { id: 3, title: "All RVs Welcome", description: "Vintage, modern, large or small—every RV finds a home here", icon: "Caravan" },
  { id: 4, title: "Learn & Grow", description: "Classes in plant medicine, wilderness skills, and more", icon: "Sprout" }
];

export const groupTypes = [
  "Family Reunion",
  "Spiritual Retreat",
  "Wedding/Celebration",
  "LGBTQ+ Gathering",
  "Friends Trip",
  "RV Club",
  "Yoga/Wellness Retreat",
  "Business/Workshop",
  "Photography/Creative",
  "Educational Group",
  "Other"
];

// Property photos - User's actual property images with curated camping scenes
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
  },
  // New user-provided images with camping scenes
  {
    id: 5,
    url: "https://customer-assets.emergentagent.com/job_woodland-retreat-1/artifacts/oubq6zsh_ChatGPT%20camp3.png",
    alt: "Family camping with tent and campfire in the woods",
    category: "Groups in Action"
  },
  {
    id: 6,
    url: "https://customer-assets.emergentagent.com/job_woodland-retreat-1/artifacts/us7e1liq_ChatGPT%20Image%20Jan%2019%2C%202026%2C%20wyyy.png",
    alt: "Friends gathered around campfire at sunset",
    category: "Groups in Action"
  },
  {
    id: 7,
    url: "https://customer-assets.emergentagent.com/job_woodland-retreat-1/artifacts/yjome407_ChatGPT%20Image%20Jan%2019%2C%201201.png",
    alt: "Large group gathering around evening campfire",
    category: "Groups in Action"
  },
  // Previous user-provided images
  {
    id: 8,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/2pzv2kdh_ChatGPT%20Image%20Jan%2019%2C%202026%2C%2012_27_50%20PM.png",
    alt: "Community gathering around campfire",
    category: "Groups in Action"
  },
  {
    id: 9,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/hl4gzmhl_ChatGPT%20Image%20Jan%2019%2C%202026%2C%20wyyy.png",
    alt: "Friends enjoying the campsite",
    category: "Groups in Action"
  },
  {
    id: 10,
    url: "https://customer-assets.emergentagent.com/job_spiritual-sanctuary/artifacts/ejuhoaos_ChatGPT%20Image%20Jan%2019%2C%202026%2C%2011_06_40%20AM.png",
    alt: "Campsite with string lights",
    category: "Ceremonial Spaces"
  }
];

// Stock photos for atmosphere
export const atmospherePhotos = [
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1651522986586-181f9b3c5fe2?w=800",
    alt: "Community gathered around campfire",
    category: "Groups in Action"
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1593976243570-64e54b3c42b8?w=800",
    alt: "Evening community gathering",
    category: "Groups in Action"
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1660590763018-9730ab97a0bb?w=800",
    alt: "Atmospheric campfire at dusk",
    category: "Ceremonial Spaces"
  },
  {
    id: 14,
    url: "https://images.pexels.com/photos/7149146/pexels-photo-7149146.jpeg?w=800",
    alt: "Bohemian camping setup",
    category: "RV Love"
  }
];

export const allGalleryPhotos = [...propertyPhotos, ...atmospherePhotos];

export const galleryCategories = ["All", "The Land", "Groups in Action", "Ceremonial Spaces", "RV Love"];

// Note from Liz
export const noteFromLiz = "This structure allows me to share my home, my skills, and this land sustainably. The add-ons are born from what I can genuinely and personally provide—a warm meal, a dry space, a lesson from the garden, or a reliable power source. It's all about making your group's time here both seamless and deeply connected.";
