import { seedData } from "./seed.js";
import { reactive, toRefs } from "vue";

export const store = {
  state: reactive({
    seedData,
  }),

  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },

  setActiveDay(dayId) {
    this.resetEditOfAllEvents();
    this.state.seedData.find((day) => day.id === dayId).active = true;
  },

  submitEvent(dayId, eventDetails, eventColor) {
    const activeDay = this.state.seedData.find((day) => day.id === dayId);
    activeDay.events = [
      ...activeDay.events,
      { details: eventDetails, edit: false, color: eventColor }, // Also save the color with the event
    ];
  },

  updateEvent(dayId, originalEventDetails, newEventDetails, newEventColor) {
    const dayObj = this.state.seedData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.details === originalEventDetails
    );
    eventObj.details = newEventDetails;
    eventObj.color = newEventColor || eventObj.color; // Allow the color to be updated
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

export default toRefs(store.state);
