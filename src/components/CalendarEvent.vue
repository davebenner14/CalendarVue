<template>
  <div
    class="day-event"
    :style="getEventBackgroundColor"
    :class="{ selected: selectedEvent }"
    @click.stop="selectEvent"
  >
    <span class="has-text-centered details">
      <span v-if="!editingEvent">{{ event.details }}</span>
      <input
        v-else
        v-model="newEventDetails"
        type="text"
        :placeholder="event.details"
      />
    </span>
    <div v-if="selectedEvent" class="has-text-centered icons">
      <button v-if="!editingEvent" @click.stop="startEditingEvent">Edit</button>
      <button @click.stop="deleteEvent">Delete</button>
    </div>
    <div v-if="editingEvent" class="has-text-centered">
      <div class="button-group">
        <button v-if="!submittingEvent" @click.stop="submitEvent">
          Submit
        </button>
        <button @click.stop="cancelEditingEvent">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "CalendarEvent",
  props: ["day", "event"],
  data() {
    return {
      newEventDetails: "",
      editingEvent: false,
      selectedEvent: false,
      submittingEvent: false,
    };
  },
  methods: {
    selectEvent() {
      if (!this.editingEvent) {
        this.selectedEvent = true;
      }
    },
    startEditingEvent() {
      this.selectedEvent = false;
      this.editingEvent = true;
      this.newEventDetails = this.event.details;
    },
    submitEvent() {
      if (this.newEventDetails === "") return;

      this.submittingEvent = true;
      store.updateEvent(this.day.id, this.event.details, this.newEventDetails);
      this.newEventDetails = "";
      this.editingEvent = false;
      this.selectedEvent = false;
      setTimeout(() => {
        this.submittingEvent = false;
      }, 500);
    },
    cancelEditingEvent() {
      this.newEventDetails = "";
      this.editingEvent = false;
      this.selectedEvent = false;
    },
    deleteEvent() {
      store.deleteEvent(this.day.id, this.event.details);
      this.selectedEvent = false;
    },
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ["#FF9999", "#85D6FF", "#99FF99"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `background-color: ${randomColor}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4c4c4c;
  padding: 5px;

  .details {
    display: block;
  }

  .icons {
    display: none;
  }

  &.selected .icons {
    display: block;
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #fff;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
