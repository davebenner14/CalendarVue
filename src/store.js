import { seedData } from "./seed.js";
import { reactive, toRefs } from "vue"; // You import Vue from 'vue' for Vue 2

export const store = {
  state: reactive({
    // 'reactive' makes your state reactive
    seedData,
  }),

  getActiveDay() {
    return this.state.seedData.find((day) => day.active);
  },

  setActiveDay(dayId) {
    this.resetEditOfAllEvents();
    this.state.seedData.find((day) => day.id === dayId).active = true;
  },

  submitEvent(dayId, eventDetails) {
    const activeDay = this.state.seedData.find((day) => day.id === dayId);
    activeDay.events = [
      ...activeDay.events,
      { details: eventDetails, edit: false },
    ]; // The spread operator (...) is used here to create a new array, which ensures reactivity.
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

export default toRefs(store.state); // 'toRefs' converts the reactive state to refs, this is required for Vue 3 and can be omitted for Vue 2
