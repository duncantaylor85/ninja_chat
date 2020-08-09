<template>
  <div class="navbar">
    <v-app-bar app color="teal" dark>
      <v-toolbar-title>
        <router-link :style="{ cursor: 'pointer' }" tag="div" :to="{ name: 'Welcome' }">NinjaChat</router-link>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>