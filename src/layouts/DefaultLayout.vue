<script setup>
import { ref } from "vue";
import AppBar from "../components/AppBar.vue";
import LeftMenu from "@/components/LeftMenu.vue";

const drawer = ref(false);
</script>

<template>
  <v-app>
    <AppBar />
    <LeftMenu />
    <v-main class="bg-white">
      <v-container class="container">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.container {
  background: white;
  color: black;
}
</style>
