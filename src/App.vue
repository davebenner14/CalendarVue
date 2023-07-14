<template>
  <div id="app">
    <header class="header">
      <h1 class="title">Calendar Vue</h1>
      <p class="description">
        Welcome to my Calendar Vue! This app is designed to add, show, edit, and
        delete events in a calendar view, displaying one week at a time.
      </p>
    </header>
    <main class="main">
      <CalendarWeek />
      <CalendarEntry />
    </main>
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

.header {
  padding: 40px;
  margin-bottom: 40px;
}

.title {
  font-size: 32px;
  margin-bottom: 16px;
}

.description {
  font-size: 18px;
  color: #555;
}

.main {
  margin: 0 auto;
  /* max-width: 600px; */
}
</style>
