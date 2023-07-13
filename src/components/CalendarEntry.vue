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
      // retrieve the active day's title from the store
      // if this doesn't work, adjust it according to your store structure
      return store.getActiveDay().title;
    },
  },
  methods: {
    submitEvent(eventDetails) {
      if (eventDetails === "") return (this.error = true);

      store.submitEvent(store.getActiveDay().id, eventDetails);
      this.inputEntry = "";
      this.error = false;
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
