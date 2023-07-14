<template>
  <div
    class="day column"
    @click="setActiveDay"
    :class="{ 'is-today': isToday }"
  >
    <div class="day-banner has-text-white has-text-centered">
      {{ day.abbvTitle }}
    </div>
    <div class="day-details">
      <div class="day-number">{{ day.id }}</div>
      <CalendarEvent
        v-for="event in day.events"
        :key="day.events.indexOf(event)"
        :event="event"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import CalendarEvent from "./CalendarEvent.vue";

export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  props: ["day"],
  computed: {
    isToday() {
      return this.day.date.toDateString() === new Date().toDateString();
    },
  },
  methods: {
    setActiveDay() {
      store.setActiveDay(this.day.id);
    },
    deselectAllEvents() {
      this.day.events.forEach((event) => {
        event.selectedEvent = false;
      });
    },
  },
  watch: {
    "day.events": {
      deep: true,
      handler(newValue) {
        console.log("Events updated:", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  background-color: #4a4a4a;
  color: #fff;
  border-left: 1px solid #8f8f8f;
  border-bottom: 1px solid #8f8f8f;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: darken(#4a4a4a, 3%);
  }

  .day-banner {
    background-color: #333333;
    color: #fff;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 600;
  }

  .day-details {
    padding: 10px;
  }

  &.is-today {
    background-color: #333;
    color: #fff;
  }
}
</style>
