import React from "react";
import { useParams } from "react-router-dom";
import "./Packages.css";

const packagesData = {
  agra: {
    title: "Agra Tour Package 4N & 5D",
    location: "Agra",
    days: "4 Night 5 Days",
    images: ["/agra1.jpg", "/agra6.jpg", "/agra3.png"],

    description: `
Agra, the city of love, is home to the world-famous Taj Mahal — one of the Seven Wonders of the World.
This beautiful city on the banks of the Yamuna River is known for its Mughal architecture, rich history,
and incredible monuments such as Agra Fort and Fatehpur Sikri. With its vibrant markets, delicious
street food, and historical charm, Agra offers a perfect blend of culture and heritage for all travelers.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Agra",
        details: "Arrive in Agra, hotel check-in, evening visit to Mehtab Bagh with sunset Taj Mahal view. Overnight stay in Agra."
      },
      {
        day: "Day 2: Taj Mahal & Agra Fort",
        details: "Early morning visit to the Taj Mahal, later explore Agra Fort, Itimad-ud-Daulah and local markets."
      },
      {
        day: "Day 3: Fatehpur Sikri Excursion",
        details: "Visit Fatehpur Sikri — Buland Darwaza, Panch Mahal, Salim Chishti Dargah. Return to Agra for dinner."
      },
      {
        day: "Day 4: Mathura–Vrindavan Tour",
        details: "Day trip to Mathura & Vrindavan, visit Krishna Janmabhoomi, ISKCON Temple, Banke Bihari Temple."
      },
      {
        day: "Day 5: Departure",
        details: "Check-out from hotel, free time for shopping, depart with memories."
      }
    ],

    inclusions: [
      "Welcome drink on arrival (non-alcoholic)",
      "4 Nights accommodation in Agra",
      "Daily Breakfast & Dinner",
      "Private AC cab for entire tour from Delhi",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary"
    ],

    exclusions: [
      "Monument entry fees",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video camera charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Rates may change without prior notice",
      "Rooms subject to availability at booking time",
      "Early booking recommended",
      "No refund for unused services due to weather/road conditions",
      "Room allotment by hotel management only"
    ]
  },

  mathura: {
    title: "Mathura Tour Package 4N & 5D",
    location: "Mathura – Vrindavan",
    days: "4 Night 5 Days",
    images: ["/mathura1.jpg", "/mathura2.webp", "/mathura3.webp"],

    description: `
Mathura, the birthplace of Lord Krishna, is one of India’s most sacred and vibrant spiritual destinations.
The city is filled with ancient temples, holy ghats, and devotional energy that attracts visitors from
around the world. Nearby Vrindavan, known for its enchanting temples and divine atmosphere, offers a
beautiful blend of culture, tradition, and spirituality. Together, Mathura–Vrindavan provide a memorable
journey into the life and stories of Lord Krishna.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Mathura",
        details:
          "Arrive in Mathura, hotel check-in, visit Krishna Janmabhoomi Temple and Dwarkadhish Temple. Evening aarti at Yamuna Ghat.",
      },
      {
        day: "Day 2: Vrindavan Temple Tour",
        details:
          "Visit ISKCON Temple, Banke Bihari Temple, Nidhivan, Seva Kunj and Prem Mandir light show in evening. Overnight stay.",
      },
      {
        day: "Day 3: Goverdhan & Barsana",
        details:
          "Day trip to Goverdhan Hill, visit Radha Kund, Kusum Sarovar. Later visit Barsana — Ladliji Temple and nearby spots.",
      },
      {
        day: "Day 4: Gokul & Raman Reti",
        details:
          "Visit Gokul — Chintamani Mahavan, Raman Reti (Krishna’s childhood playground), and Brahmand Ghat.",
      },
      {
        day: "Day 5: Departure",
        details:
          "Check-out from hotel, visit local markets for Mathura peda & handicrafts, and depart with divine memories.",
      },
    ],

    inclusions: [
      "Welcome drink on arrival (non-alcoholic)",
      "4 Nights accommodation in Mathura",
      "Daily Breakfast & Dinner",
      "Private AC cab for complete Mathura–Vrindavan tour",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary",
    ],

    exclusions: [
      "Monument/Temple entry fees",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video camera charges",
      "GST 5%",
      "Anything not mentioned in inclusions",
    ],

    terms: [
      "Rates may change without prior notice",
      "Rooms subject to availability at booking time",
      "Early booking recommended",
      "No refund for unused services due to weather/road conditions",
      "Room allotment will be as per hotel management",
    ]
  },


  vrindavan: {
    title: "Vrindavan Tour Package 4N & 5D",
    location: "Vrindavan",
    days: "4 Night 5 Days",
    images: ["/vrindavan1.webp", "/vrindavan2.jpg", "/vrindavan3.jpg"],
    description: `
Vrindavan, the divine playground of Lord Krishna, is one of the most sacred pilgrimage destinations 
in India. Filled with enchanting temples, holy sites, and endless devotion, Vrindavan offers an 
immersive spiritual experience. From the famous Banke Bihari Temple to the peaceful ISKCON Temple 
and the mystical Nidhivan, Vrindavan is a place where every moment feels divine.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Vrindavan",
        details:
          "Arrive in Vrindavan, check-in at hotel and visit ISKCON Temple, Govind Dev Temple and enjoy evening aarti.",
      },
      {
        day: "Day 2: Banke Bihari & Nidhivan Tour",
        details:
          "Visit Banke Bihari Temple, Nidhivan, Seva Kunj, Radha Vallabh Temple, and evening visit to Prem Mandir (light show).",
      },
      {
        day: "Day 3: Gokul–Raman Reti Excursion",
        details:
          "Visit Gokul — Raman Reti, Chintamani Mahavan, Brahmand Ghat and nearby holy places. Return to Vrindavan for dinner.",
      },
      {
        day: "Day 4: Departure",
        details:
          "Check-out, explore local markets for Krishna souvenirs, prasad & handicrafts, then depart with divine memories.",
      },
    ],

    inclusions: [
      "Welcome drink on arrival",
      "3 Nights accommodation in Vrindavan",
      "Daily Breakfast & Dinner",
      "Private AC cab for sightseeing",
      "Parking, Driver Allowance, Toll Tax",
      "All sightseeing as per itinerary",
    ],

    exclusions: [
      "Entry fees to temples/monuments",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video charges",
      "GST 5%",
      "Anything not mentioned in inclusions",
    ],

    terms: [
      "Rates may change without prior notice",
      "Rooms subject to availability",
      "Early booking recommended",
      "No refund for unused services",
    ],
  },

  varanasi: {
    title: "Varanasi Delight 5N & 6D",
    location: "Varanasi",
    days: "5 Night 6 Days",
    images: ["/varanasi1.avif", "/varanasi2.webp", "/varanasi3.avif"],
    description: `
Varanasi, the spiritual heart of India, is one of the oldest living cities in the world. Known for its sacred
Ganga Ghats, ancient temples, vibrant markets, and the famous Ganga Aarti, Varanasi offers a divine and
peaceful experience. From the holy ghats to the rich culture and heritage, this city promises an unforgettable spiritual journey.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Varanasi",
        details:
          "Arrive in Varanasi, hotel check-in, evening Ganga Aarti at Dashashwamedh Ghat. Overnight stay."
      },
      {
        day: "Day 2: Varanasi Temple Tour",
        details:
          "Visit Kashi Vishwanath Temple, Annapurna Temple, Kal Bhairav Temple, and Tulsi Manas Temple. Explore local markets in evening."
      },
      {
        day: "Day 3: Ghat Tour & Boat Ride",
        details:
          "Early morning boat ride on Ganga, visit Manikarnika Ghat, Assi Ghat, Scindia Ghat. Afternoon free for shopping."
      },
      {
        day: "Day 4: Sarnath Excursion",
        details:
          "Visit Sarnath — Dhamek Stupa, Thai Temple, Ashokan Pillar, Museum. Return to Varanasi for overnight stay."
      },
      {
        day: "Day 5: Departure",
        details:
          "Check-out from hotel, visit local sweet shops, and depart with spiritual memories."
      }
    ],

    inclusions: [
      "Welcome drink on arrival",
      "4 Nights accommodation in Varanasi",
      "Daily Breakfast & Dinner",
      "Private AC cab for full tour",
      "Boat ride on the Ganga",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary"
    ],

    exclusions: [
      "Temple entry fees",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Rates are subject to change",
      "Rooms subject to availability",
      "Early booking recommended",
      "No refund for unused services",
      "Hotel room allotment as per hotel policy"
    ]
  },

  ayodhya: {
    title: "Ayodhya Trip 5N & 6D",
    location: "Ayodhya",
    days: "5 Night 6 Days",
    images: ["/ayodhya.jpg", "/ayodhya1.avif", "/ayodhya3.avif"],
    description: `
Ayodhya, the holy birthplace of Lord Shri Ram, is one of India's most sacred and culturally rich spiritual
destinations. With the grand Shri Ram Janmabhoomi Temple, Saryu Ghat, ancient temples, and historical
sites, Ayodhya offers a divine and peaceful atmosphere for every devotee.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Ayodhya",
        details:
          "Arrive in Ayodhya, hotel check-in, visit Saryu Ghat for evening aarti. Overnight stay."
      },
      {
        day: "Day 2: Ram Mandir & Temple Tour",
        details:
          "Visit Shri Ram Janmabhoomi Temple, Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple. Explore local markets."
      },
      {
        day: "Day 3: Faizabad & Historical Sites",
        details:
          "Visit Faizabad — Gulab Bari, Bahu Begum Tomb. Later visit Treta Ke Thakur, Dashrath Mahal. Return for overnight stay."
      },
      {
        day: "Day 4: Departure",
        details:
          "Check-out, visit Guptar Ghat, and depart with divine blessings of Lord Ram."
      }
    ],

    inclusions: [
      "Welcome drink on arrival",
      "3 Nights accommodation in Ayodhya",
      "Daily Breakfast & Dinner",
      "Private AC cab for all sightseeing",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary"
    ],

    exclusions: [
      "Temple entry fees",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video camera charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Booking subject to availability",
      "Prices may vary during festivals",
      "No refund for missed sightseeing",
      "Early booking recommended for Ram Mandir visit"
    ]
  },
  lucknow: {
    title: "Lucknow City Tour",
    location: "Lucknow",
    days: "6 Night 5 Days",
    images: ["/lucknow1.jpg", "/lucknow2.jpg", "/lucknow3.jpeg"],

    description: `
Ayodhya, the holy birthplace of Lord Shri Ram, is one of India's most sacred and culturally rich spiritual
destinations. With the grand Shri Ram Janmabhoomi Temple, Saryu Ghat, ancient temples, and historical
sites, Ayodhya offers a divine and peaceful atmosphere for every devotee.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Ayodhya",
        details:
          "Arrive in Ayodhya, hotel check-in, visit Saryu Ghat for evening aarti. Overnight stay."
      },
      {
        day: "Day 2: Ram Mandir & Temple Tour",
        details:
          "Visit Shri Ram Janmabhoomi Temple, Hanuman Garhi, Kanak Bhawan, Nageshwarnath Temple. Explore local markets."
      },
      {
        day: "Day 3: Faizabad & Historical Sites",
        details:
          "Visit Faizabad — Gulab Bari, Bahu Begum Tomb. Later visit Treta Ke Thakur, Dashrath Mahal. Return for overnight stay."
      },
      {
        day: "Day 4: Departure",
        details:
          "Check-out, visit Guptar Ghat, and depart with divine blessings of Lord Ram."
      }
    ],

    inclusions: [
      "Welcome drink on arrival",
      "3 Nights accommodation in Ayodhya",
      "Daily Breakfast & Dinner",
      "Private AC cab for all sightseeing",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary"
    ],

    exclusions: [
      "Temple entry fees",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video camera charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Booking subject to availability",
      "Prices may vary during festivals",
      "No refund for missed sightseeing",
      "Early booking recommended for Ram Mandir visit"
    ]
  },

  manali_shimla: {
    title: "Shimla & Manali Hill Station Tour",
    location: "Shimla – Manali",
    days: "6 Nights 7 Days",
    images: ["/shimla.webp", "/shimla1.webp", "/shimla2.jpg"],

    description: `
Shimla and Manali are two of Himachal Pradesh’s most loved destinations, known for their snow-capped
mountains, peaceful valleys, charming architecture, and adventure activities. This trip offers a perfect
blend of nature, culture, and memorable experiences for families, couples, and friends.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Shimla",
        details:
          "Arrive in Shimla, check-in at the hotel, visit Mall Road, Lakkar Bazaar & Ridge in the evening."
      },
      {
        day: "Day 2: Kufri & Local Sightseeing",
        details:
          "Visit Kufri, Himalayan Nature Park, and Kufri Fun World. Later visit Jakhoo Temple & Christ Church."
      },
      {
        day: "Day 3: Transfer to Manali",
        details:
          "Drive to Manali via Kullu Valley. Visit Pandoh Dam & enjoy river rafting in Kullu (optional). Overnight in Manali."
      },
      {
        day: "Day 4: Manali Local Sightseeing",
        details:
          "Visit Hadimba Temple, Van Vihar, Club House, Tibetan Monastery & Mall Road."
      },
      {
        day: "Day 5: Solang Valley / Atal Tunnel",
        details:
          "Visit Solang Valley for adventure activities like paragliding, zorbing, skiing (seasonal). Option to visit Atal Tunnel & Sissu."
      },
      {
        day: "Day 6: Manikaran / Kasol Tour",
        details:
          "Visit Kasol, Parvati River & Manikaran Sahib Gurudwara. Return to Manali for overnight stay."
      },
      {
        day: "Day 7: Departure",
        details:
          "Check-out from the hotel and depart with unforgettable Himachal memories."
      }
    ],

    inclusions: [
      "Welcome drink on arrival",
      "6 Nights accommodation",
      "Daily Breakfast & Dinner",
      "Private AC cab for all transfers & sightseeing",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary"
    ],

    exclusions: [
      "Any adventure activity charges (skiing, paragliding, rafting)",
      "Rohtang Pass permit/cab charges (as per local rules)",
      "Lunch and personal expenses",
      "Guide charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Rooms subject to availability",
      "Rates may vary during snow season & holidays",
      "Rohtang Pass subject to weather & govt. permissions",
      "No refund for unused services",
      "Carry valid ID proof for check-in"
    ]
  },

  mussoorie_nainital: {
    title: "Mussoorie & Nainital Hills Tour",
    location: "Mussoorie – Nainital",
    days: "5 Nights 6 Days",
    images: ["/nainital1.jpg", "/nainital.jpg", "/nainital2.jpg"],

    description: `
Mussoorie and Nainital are two of Uttarakhand’s most beautiful hill stations, famous for their breathtaking
mountain views, pleasant weather, lakes, waterfalls, and colonial charm. Perfect for family trips,
honeymooners, and nature lovers, this tour offers a refreshing escape from city life.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Mussoorie",
        details:
          "Arrive in Mussoorie, hotel check-in, visit Mall Road and enjoy the evening view of the Doon Valley."
      },
      {
        day: "Day 2: Mussoorie Sightseeing",
        details:
          "Visit Kempty Falls, Gun Hill Point, Camel’s Back Road, Company Garden, and Mussoorie Lake. Overnight stay."
      },
      {
        day: "Day 3: Transfer to Nainital",
        details:
          "Drive to Nainital, hotel check-in, enjoy a peaceful walk near Naini Lake in the evening."
      },
      {
        day: "Day 4: Nainital Lake Tour",
        details:
          "Visit Naini Lake, Naina Devi Temple, Snow View Point, Tiffin Top, and Eco Cave Gardens."
      },
      {
        day: "Day 5: Bhimtal – Sattal – Naukuchiatal",
        details:
          "Full-day lake tour covering Bhimtal, Sattal, and Naukuchiatal. Enjoy boating & adventure activities."
      },
      {
        day: "Day 6: Departure",
        details:
          "Check-out and depart with beautiful memories of Uttarakhand’s hill stations."
      }
    ],

    inclusions: [
      "Welcome drink on arrival",
      "5 Nights accommodation",
      "Daily Breakfast & Dinner",
      "Private AC cab for all transfers & sightseeing",
      "Parking, Toll Tax, Driver Allowance",
      "All sightseeing as per itinerary"
    ],

    exclusions: [
      "Any boating/ropeway charges",
      "Lunch and personal expenses",
      "Guide charges",
      "Camera/Video camera charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Rooms subject to availability",
      "Rates may vary during peak season",
      "No refund for unused services",
      "Early booking recommended especially for summer months"
    ]
  },
  goa: {
    title: "Goa Beach Holiday Tour",
    location: "North & South Goa",
    days: "4 Nights 5 Days",
    images: ["/goa1.avif", "/goa2.png", "/goa3.jpg"],

    description: `
Goa, India’s favorite beach destination, is known for its golden beaches, water sports, nightlife,
Portuguese heritage, churches, forts, and seafood. Whether you're planning a relaxing holiday or an
adventurous getaway, Goa offers the perfect blend of fun, culture, and relaxation.
`,

    itinerary: [
      {
        day: "Day 1: Arrival in Goa",
        details:
          "Arrive in Goa, hotel check-in, relax at Calangute Beach & enjoy nightlife in Baga. Overnight stay."
      },
      {
        day: "Day 2: North Goa Sightseeing",
        details:
          "Visit Fort Aguada, Sinquerim Beach, Baga Beach, Candolim Beach, Anjuna Beach & Vagator Beach."
      },
      {
        day: "Day 3: South Goa Sightseeing",
        details:
          "Visit Miramar Beach, Dona Paula, Old Goa Churches (Basilica of Bom Jesus & Se Cathedral), and Spice Plantation."
      },
      {
        day: "Day 4: Water Sports & Leisure",
        details:
          "Enjoy water sports at Calangute (parasailing, jet ski, banana ride). Evening cruise on Mandovi River."
      },
      {
        day: "Day 5: Departure",
        details:
          "Check-out from hotel and depart with unforgettable Goa memories."
      }
    ],

    inclusions: [
      "Welcome drink on arrival",
      "4 Nights accommodation in Goa",
      "Daily Breakfast",
      "Private AC cab for sightseeing",
      "Parking, Toll Tax, Driver Allowance",
      "North & South Goa sightseeing"
    ],

    exclusions: [
      "Water sports charges",
      "Lunch and dinner",
      "Alcoholic beverages",
      "Guide charges",
      "GST 5%",
      "Anything not mentioned in inclusions"
    ],

    terms: [
      "Seasonal rates apply during Christmas & New Year",
      "Rooms subject to availability",
      "No refund for missed activities",
      "Carry valid ID proof for hotel check-in"
    ]
  }

};

function PackageDetails() {
  const { id } = useParams();
  const pkg = packagesData[id];

  if (!pkg) return <h2>Package Not Found</h2>;

  return (
    <div className="details-wrapper">

      {/* HERO SECTION */}
      <div className="details-hero">
        <div className="hero-grid">
          <img src={pkg.images[0]} alt="" />
          <img src={pkg.images[1]} alt="" />
          <img src={pkg.images[2]} alt="" />
        </div>

        <div className="hero-content">
          <div className="badge-days">{pkg.days}</div>
          <h1 className="hero-title">{pkg.title}</h1>
          <p className="hero-location">📍 {pkg.location}</p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="details-content">
        <h2>Package Overview</h2>
        <p>{pkg.description}</p>
      </div>

      {/* HIGHLIGHTS
      <div className="details-content">
        <h2>Highlights</h2>
        <ul>
          {pkg.highlights?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div> */}

      {/* ITINERARY */}
      <div className="itinerary-section">
        <h2 className="itinerary-title">Itinerary</h2>

        {pkg.itinerary.map((item, index) => (
          <div className="itinerary-item" key={index}>

            {/* Left Day Number */}
            <div className="itinerary-number">
              {index + 1}
            </div>

            {/* Right Content */}
            <div className="itinerary-content">
              <h3 className="itinerary-day">{item.day}</h3>
              <p className="itinerary-details">{item.details}</p>
            </div>

          </div>
        ))}
      </div>


      {/* INCLUSIONS */}
      <div className="details-content">
        <h2>Inclusions</h2>
        <ul>
          {pkg.inclusions?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* EXCLUSIONS */}
      <div className="details-content">
        <h2>Exclusions</h2>
        <ul>
          {pkg.exclusions?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default PackageDetails;
