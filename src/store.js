import { reactive, toRefs } from "vue";
import { getStartOfWeek, initializeWeek } from "./initialize.js";

let currentDate = new Date();
let startOfWeek = getStartOfWeek(currentDate);

export const store = {
  state: reactive({
    weekData: initializeWeek(startOfWeek),
  }),

  getActiveDay() {
    return this.state.weekData.find((day) => day.active);
  },

  setActiveDay(dayId) {
    this.resetEditOfAllEvents();
    this.state.weekData.find((day) => day.id === dayId).active = true;
  },

  submitEvent(dayId, eventDetails, eventColor) {
    const activeDay = this.state.weekData.find((day) => day.id === dayId);
    activeDay.events = [
      ...activeDay.events,
      { details: eventDetails, edit: false, color: eventColor }, // Also save the color with the event
    ];
  },

  updateEvent(dayId, originalEventDetails, newEventDetails, newEventColor) {
    const dayObj = this.state.weekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.details === originalEventDetails
    );
    eventObj.details = newEventDetails;
    eventObj.color = newEventColor || eventObj.color; // Allow the color to be updated
    eventObj.edit = false;
  },

  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.weekData.find((day) => day.id === dayId);
    const eventIndex = dayObj.events.findIndex(
      (event) => event.details === eventDetails
    );

    if (eventIndex >= 0) {
      dayObj.events.splice(eventIndex, 1);
    }
  },

  resetEditOfAllEvents() {
    this.state.weekData.forEach((dayObj) => {
      dayObj.events.forEach((event) => {
        event.edit = false;
      });
    });
  },
};

export default toRefs(store.state);
