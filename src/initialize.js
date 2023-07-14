export function getRandomColor() {
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

export function getStartOfWeek(date) {
  let startOfWeek;
  if (date.getDay() === 0) {
    // if it's Sunday
    startOfWeek = new Date(date);
  } else {
    startOfWeek = new Date(date.setDate(date.getDate() - date.getDay() + 1)); // get Monday
  }
  return startOfWeek;
}
export function initializeWeek(startOfWeek) {
  let weekData = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date(
      startOfWeek.getFullYear(),
      startOfWeek.getMonth(),
      startOfWeek.getDate() + i
    );

    // Create random events for each day
    let events = [];
    let eventCount = Math.floor(Math.random() * 3) + 1; // random number between 1 and 3
    for (let j = 0; j < eventCount; j++) {
      events.push({
        id: j,
        title: `Event ${j + 1}`,
        time: `${j + 9}:00 AM`, // just for example, you may want to generate random time as well
        color: getRandomColor(), // get random color for each event
      });
    }

    weekData.push({
      id: date.getDate(),
      date: date, // storing the date object here
      abbvTitle: date.toLocaleString("en-us", { weekday: "short" }),
      fullTitle: date.toLocaleString("en-us", { weekday: "long" }),
      events: events,
      active: date.toDateString() === new Date().toDateString(), // set today to active
    });
  }
  return weekData;
}
