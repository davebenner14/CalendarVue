<template>
  <div id="calendar-entry">
    <button v-if="!showForm" @click="showForm = true">New Event</button>
    <div v-else class="calendar-entry-note">
      <input
        v-model="inputEntry"
        type="text"
        placeholder="New Event"
        required
      />
      <p class="calendar-entry-day">
        Day of event:
        <select v-model="selectedDay">
          <option v-for="day in days" :key="day.id" :value="day.id">
            {{ day.fullTitle }}
          </option>
        </select>
      </p>
      <a
        @click="submitEvent(inputEntry)"
        class="button is-primary is-small is-outlined"
        >Submit</a
      >
      <a @click="showForm = false" class="button is-small is-outlined"
        >Cancel</a
      >
    </div>
    <p style="color: red; font-size: 13px; margin-top: 10px" v-if="error">
      You must type something first!
    </p>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "CalendarEntry",
  data() {
    return {
      inputEntry: "",
      selectedDay: store.getActiveDay().id,
      error: false,
      days: store.state.seedData, // Using the seedData from the store directly
      showForm: false, // New variable to control the visibility of the form
    };
  },
  methods: {
    submitEvent(eventDetails) {
      if (!this.selectedDay || eventDetails === "") return (this.error = true);
      store.submitEvent(this.selectedDay, eventDetails);
      this.inputEntry = "";
      this.error = false;
      this.showForm = false;
    },
  },
};
</script>

<style lang="scss" scoped>
#calendar-entry {
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;

  .calendar-entry-note {
    input {
      width: 200px;
      font-weight: 600;
      border: 0;
      border-bottom: 1px solid #ccc;
      font-size: 15px;
      height: 30px;
      margin-bottom: 10px;

      &:focus {
        outline: none;
      }
    }

    .calendar-entry-day {
      color: #42b883;
      font-size: 12px;
      margin-bottom: 10px;
      padding-bottom: 5px;

      .bold {
        font-weight: 600;
      }
    }

    .submit {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
