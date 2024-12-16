const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  id: String,
  name: String,
  cloudinaryImageId: String,
  locality: String,
  areaName: String,
  costForTwo: String,
  cuisines: [String],
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
