export const TABS = ["Summary", "Performance", "Portfolio", "Reviews", "Latest"];

export const CARDS_DATA = [
  {
    id: 0,
    img: "/images/client-size.jpg",
    title: "Client size",
    descritpion:
      "View all the business sizes this agency current manages, as well as which business size they choose to work with the most.",
    analytics: [
      { title: "Small Business (Less than $1M in revenue)", value: 0 },
      { title: "Medium Business ($1M-$10M)", value: 0.1 },
      { title: "Large Business ($10M-$1B)", value: 0.6 },
      { title: "Enterprise ($1B+)", value: 0.2 },
    ],
    type: "Nice",
  },
  {
    id: 1,
    img: "/images/industry-focus.jpg",
    title: "Industry Focus",
    descritpion: "See which industries this agency has the most experience and expertise in.",
    analytics: [
      { title: "Healthcare", value: 0.5 },
      { title: "Business Services", value: 0.2 },
      { title: "Automotive", value: 0.15 },
      { title: "Financial Services", value: 0.1 },
    ],
    type: "Good",
  },
];

export const EMPTY_DATA = [
  {
    id: 0,
    img: "/images/client-size.jpg",
    title: "EMPTY",
    descritpion: "",
    analytics: [],
    type: "Nice",
  },
  {
    id: 0,
    img: "/images/client-size.jpg",
    title: "EMPTY",
    descritpion: "",
    analytics: [],
    type: "Nice",
  },
];
