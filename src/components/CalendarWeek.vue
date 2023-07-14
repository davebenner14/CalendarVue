<template>
  <div id="calendar-week" class="container">
    <div>{{ currentMonth }}</div>
    <div class="columns is-mobile">
      <CalendarDay
        v-for="day in sharedState.weekData"
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
  computed: {
    currentMonth() {
      const firstDay = this.sharedState.weekData[0].date;
      const lastDay = this.sharedState.weekData[6].date;
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      if (firstDay.getMonth() === lastDay.getMonth()) {
        return monthNames[firstDay.getMonth()];
      } else {
        return `${monthNames[firstDay.getMonth()]}/${
          monthNames[lastDay.getMonth()]
        }`;
      }
    },
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
