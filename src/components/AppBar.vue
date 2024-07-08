<script setup lang="ts">
import { ref } from "vue";

const username = ref("Jan Musílek");
const userRole = ref("admin");
const userIcon = ref("mdi-account-circle");
</script>

<template>
  <v-app-bar :elevation="10" color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Ferda</v-app-bar-title>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon size="large">mdi-account-circle</v-icon>
          <span>JAN MUSÍLEK</span>
        </v-btn>
      </template>

      <v-list class="menu-list">
        <v-list-item
          :prepend-icon="userIcon"
          :subtitle="userRole"
          :title="username"
        >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<style scoped>
.v-btn span {
  margin-left: 10px;
  font-size: small;
}

.menu-list {
  background-color: white !important;
  color: black;
}
</style>
