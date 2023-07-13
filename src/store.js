import { seedData } from "./seed.js";

export const store = {
  state: {
    seedData,
  },

  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },

  setActiveDay(dayId) {
    const activeDay = this.getActiveDay();
    activeDay.active = false;
    const newActiveDay = this.state.seedData.find((day) => day.id === dayId);
    newActiveDay.active = true;
  },

  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },

  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObject(dayId, eventDetails);
    eventObj.edit = true;
  },

  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObject(dayId, originalEventDetails);
    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },

  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    const eventIndexToRemove = dayObj.events.findIndex(
      (event) => event.details === eventDetails
    );
    dayObj.events.splice(eventIndexToRemove, 1);
  },

  getEventObject(dayId, eventDetails) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    return dayObj.events.find((event) => event.details === eventDetails);
  },

  resetEditOfAllEvents() {
    this.state.seedData.forEach((dayObj) => {
      dayObj.events.forEach((event) => {
        event.edit = false;
      });
    });
  },
};
