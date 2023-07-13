<template>
  <div id="app">
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";

export default {
  name: "App",
  components: { CalendarWeek, CalendarEntry },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");
@import url("https://use.fontawesome.com/releases/v5.15.4/css/all.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
