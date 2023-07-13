<template>
  <div class="day column" @click="setActiveDay(day.id)">
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
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    },
  },
};
</script>
