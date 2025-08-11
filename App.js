import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/10755916/file/original-e6113d034c15311d1f20642a8e570356.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestrauntCard = (props) => {
  // destructing on the fly
  const { resData } = props;

  const { id,cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  console.log(props);

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating}⭐️</h5>
      <h5>{sla.deliveryTime} minutes</h5>
    </div>
  );
};

const reslist = [
  {
    info: {
      id: "263185",
      name: "The Chocolate Room",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/f330dc1c-3146-4a8c-839c-bb0c9205fa40_263185.jpg",
      locality: "Bistupur",
      areaName: "Bistupur",
      costForTwo: "₹449 for two",
      cuisines: [
        "Bakery",
        "Pizzas",
        "Pastas",
        "Beverages",
        "Cakes & Pastries",
        "Waffle",
        "Chinese",
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "1002",
      avgRatingString: "4.1",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "1.9K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/the-chocolate-room-bistupur-rest263185",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "580586",
      name: "GetAWay-Ice Creams & Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/12/1214b7e3-94aa-41cb-83f8-85119d5bb0ac_580586 (2).jpg",
      locality: "Purbi Singhbhum",
      areaName: "Jamshedpur Urban",
      costForTwo: "₹200 for two",
      cuisines: ["Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4.7,
      veg: true,
      parentId: "354819",
      avgRatingString: "4.7",
      totalRatingsString: "408",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "8.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 05:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/getaway-ice-creams-and-desserts-purbi-singhbhum-jamshedpur-urban-rest580586",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "304302",
      name: "Cafe Coffee Day",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/30/a8a2da4d-6249-4c32-a802-a92c72594749_304302.JPG",
      locality: "Outer Circle Road",
      areaName: "Bistupur",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.3,
      parentId: "1",
      avgRatingString: "4.3",
      totalRatingsString: "609",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 05:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/cafe-coffee-day-outer-circle-road-bistupur-rest304302",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "449028",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/ed424d16-915c-429d-8e68-f94d49eab314_449028.JPG",
      locality: "Kalimati Road",
      areaName: "Sakchi",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "4.6K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/pizza-hut-kalimati-road-sakchi-rest449028",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "861618",
      name: "Pastas By Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/3065f36b-6cfa-4940-8efa-ec0adfe970d3_861618.JPG",
      locality: "Kalimati Road",
      areaName: "Sakchi",
      costForTwo: "₹400 for two",
      cuisines: ["Pastas"],
      avgRating: 3.3,
      parentId: "306806",
      avgRatingString: "3.3",
      totalRatingsString: "84",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 6.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/pastas-by-pizza-hut-kalimati-road-sakchi-rest861618",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "127034",
      name: "Hotel Ganga Regency",
      cloudinaryImageId: "xkjqvqpxddmglbadffu6",
      locality: "New Baradwari ",
      areaName: "Sakchi",
      costForTwo: "₹600 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor", "Continental"],
      avgRating: 4.4,
      parentId: "99000",
      avgRatingString: "4.4",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId:
              "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/_Milestone%20Restaurants.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/hotel-ganga-regency-new-baradwari-sakchi-rest127034",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "109774",
      name: "Yashwee International",
      cloudinaryImageId: "jhskaxy1lqevdheijmn2",
      locality: "Straight Mile Road",
      areaName: "Sakchi",
      costForTwo: "₹600 for two",
      cuisines: [
        "Italian",
        "North Indian",
        "Continental",
        "Oriental",
        "Chinese",
        "South Indian",
        "Indian",
      ],
      avgRating: 4.4,
      parentId: "227680",
      avgRatingString: "4.4",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 6,
        serviceability: "SERVICEABLE",
        slaString: "40-50 mins",
        lastMileTravelString: "6.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-11 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-54e9c8c5-9c91-42b2-86ba-cb961dbd1d91",
    },
    cta: {
      link: "https://www.swiggy.com/city/jamshedpur/yashwee-international-straight-mile-road-sakchi-rest109774",
      type: "WEBLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestrauntCard resData={reslist[0]}/>
                <RestrauntCard resData={reslist[1]}/>
                <RestrauntCard resData={reslist[2]}/>
                <RestrauntCard resData={reslist[3]}/>
                <RestrauntCard resData={reslist[4]}/>
                <RestrauntCard resData={reslist[5]}/>
                <RestrauntCard resData={reslist[6]}/>    */}
        {reslist.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h2>All rights reserved @EatBites</h2>
      <div className="footer-item">
        <ul>
          <li>Contact Us</li>
          <li>Help</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
