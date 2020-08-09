<template>
  <div class="new-message">
    <v-form @submit.prevent="addMessage">
      <v-text-field
        color="teal"
        @click:append-outer="addMessage"
        append-outer-icon="mdi-send"
        label="New Message (↵ enter to add)"
        v-model="newMessage"
      ></v-text-field>
      <p class="red--text" v-if="feedback">{{ feedback }}</p>
    </v-form>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message in order to send one";
      }
    },
  },
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
};
</script>
