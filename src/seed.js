function getRandomColor() {
  const colors = [
    "#FFA4AC",
    "#C686B9",
    "#90C3E6",
    "#82D7DE",
    "#A1D7A4",
    "#FFE08C",
    "#FFBE8B",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

export const seedData = [
  {
    id: 1,
    abbvTitle: "Mon",
    fullTitle: "Monday",
    events: [
      { details: "Get Groceries", edit: false, color: getRandomColor() },
      { details: "Carpool", edit: false, color: getRandomColor() },
    ],
    active: true,
  },
  {
    id: 2,
    abbvTitle: "Tue",
    fullTitle: "Tuesday",
    events: [
      { details: "Meeting with Boss", edit: false, color: getRandomColor() },
      { details: "Gym", edit: false, color: getRandomColor() },
    ],
    active: false,
  },
  {
    id: 3,
    abbvTitle: "Wed",
    fullTitle: "Wednesday",
    events: [
      { details: "Take Dog to Vet", edit: false, color: getRandomColor() },
      { details: "Swimming Lessons", edit: false, color: getRandomColor() },
    ],
    active: false,
  },
  {
    id: 4,
    abbvTitle: "Thu",
    fullTitle: "Thursday",
    events: [
      { details: "Finish Report", edit: false, color: getRandomColor() },
      { details: "Book Club", edit: false, color: getRandomColor() },
    ],
    active: false,
  },
  {
    id: 5,
    abbvTitle: "Fri",
    fullTitle: "Friday",
    events: [
      { details: "Happy Hour", edit: false, color: getRandomColor() },
      { details: "Dinner with Friends", edit: false, color: getRandomColor() },
    ],
    active: false,
  },
  {
    id: 6,
    abbvTitle: "Sat",
    fullTitle: "Saturday",
    events: [
      { details: "Hiking Trip", edit: false, color: getRandomColor() },
      { details: "Grocery Shopping", edit: false, color: getRandomColor() },
    ],
    active: false,
  },
  {
    id: 7,
    abbvTitle: "Sun",
    fullTitle: "Sunday",
    events: [
      { details: "Relaxing", edit: false, color: getRandomColor() },
      {
        details: "Preparing for the Week",
        edit: false,
        color: getRandomColor(),
      },
    ],
    active: false,
  },
];
