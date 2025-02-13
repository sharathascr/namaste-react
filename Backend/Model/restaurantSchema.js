const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  cloudinaryImageId: String,
  locality: String,
  isPromoted: Boolean,
  areaName: String,
  costForTwo: String,
  cuisines: [String],
  items: [
    {
      id: { type: String, required: true },
      name: { type: String, required: true },
      category: { type: String },
      description: { type: String },
      imageId: { type: String },
      inStock: { type: Number },
      isVeg: { type: Number },
      price: { type: Number },
      defaultPrice: { type: Number },
      ratings: {
        aggregatedRating: {
          rating: { type: String },
          ratingCount: { type: String },
          ratingCountV2: { type: String },
        },
      },
    },
  ],
  avgRating: Number,
  parentId: String,
  avgRatingString: String,
  totalRatingsString: String,
  sla: {
    deliveryTime: Number,
    lastMileTravel: Number,
    serviceability: String,
    slaString: String,
    lastMileTravelString: String,
    iconType: String,
  },
  availability: {
    nextCloseTime: String,
    opened: Boolean,
  },
  badges: {
    imageBadges: [
      {
        imageId: String,
        description: String,
      },
    ],
  },
  isOpen: Boolean,
  type: String,
  badgesV2: Object,
  aggregatedDiscountInfoV3: Object,
  loyaltyDiscoverPresentationInfo: Object,
  differentiatedUi: Object,
  reviewsSummary: Object,
  displayType: String,
  restaurantOfferPresentationInfo: Object,
  externalRatings: Object,
  ratingsDisplayPreference: String,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
