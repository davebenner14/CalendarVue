<template>
  <div id="calendar-week" class="container">
    <div class="columns is-mobile">
      <CalendarDay
        v-for="day in sharedState.seedData"
        :key="day.id"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import CalendarDay from "./CalendarDay.vue";

export default {
  name: "CalendarWeek",
  components: {
    CalendarDay,
  },
  data() {
    return {
      sharedState: store.state,
    };
  },
};
</script>

<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }

  &:last-child {
    border-right: 1px solid #8f8f8f;
  }
}
</style>
