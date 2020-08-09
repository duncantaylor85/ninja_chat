<template>
  <div class="welcome">
    <div class="text-center">
      <v-card max-width="400" class="mx-auto mt-12">
        <v-card-title class="justify-center">
          <h2 class="teal--text">
            Welcome
          </h2>
        </v-card-title>

        <v-form>
          <v-container>
            <h3>Enter your name:</h3>
            <v-text-field label="name" v-model="name"> </v-text-field>
            <p class="red--text" v-if="feedback">{{ feedback }}</p>
            <v-btn @click="enterChat" class="mx-auto" dark color="teal"
              >Enter Chat</v-btn
            >
          </v-container>
        </v-form>
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
