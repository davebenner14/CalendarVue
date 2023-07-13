import { seedData } from "./seed.js";

export const store = {
  state: {
    seedData,
  },

  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },

  setActiveDay(dayId) {
    this.resetEditOfAllEvents();
    this.state.seedData.find((day) => day.id === dayId).active = true;
  },

  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },

  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.details === originalEventDetails
    );
    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },

  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    const eventIndex = dayObj.events.findIndex(
      (event) => event.details === eventDetails
    );

    if (eventIndex >= 0) {
      dayObj.events.splice(eventIndex, 1);
    }
  },

  resetEditOfAllEvents() {
    this.state.seedData.forEach((dayObj) => {
      dayObj.events.forEach((event) => {
        event.edit = false;
      });
    });
  },
};
