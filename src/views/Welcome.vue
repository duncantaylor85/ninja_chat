<template>
  <div class="welcome">
    <div class="text-center">
      <v-card max-width="400" class="mx-auto mt-12">
        <v-card-title class="justify-center display-1">Welcome</v-card-title>

        <v-container>
          <v-card-title class="teal--text justify-center">Enter your name to start chatting:</v-card-title>
          <v-card-text class="mt-n2">
            <v-text-field
              @keydown.enter.prevent="enterChat"
              color="teal"
              label="name"
              v-model="name"
            ></v-text-field>
            <p class="red--text" v-if="feedback">{{ feedback }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="enterChat" class="mx-auto" dark color="teal">Enter Chat</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "You must enter a name to join";
      }
    },
  },
};
</script>
