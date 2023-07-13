<template>
  <div id="calendar-entry">
    <div class="calendar-entry-note">
      <input
        v-model="inputEntry"
        type="text"
        placeholder="New Event"
        required
      />
      <p class="calendar-entry-day">
        Day of event:
        <span class="bold">{{ titleOfActiveDay }}</span>
      </p>
      <a
        @click="submitEvent(inputEntry)"
        class="button is-primary is-small is-outlined"
        >Submit</a
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
      error: false,
    };
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    },
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === "") return (this.error = true);

      store.submitEvent(eventDetails);
      this.inputEntry = "";
      this.error = false;
    },
  },
};
</script>
