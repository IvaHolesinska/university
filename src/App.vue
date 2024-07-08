<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();

onMounted(() => {
  store.dispatch("loadDomainDetailData");
});
</script>

<template>
  <v-app class="app">
    <router-view></router-view>
  </v-app>
</template>

<style>
.app {
  font-size: 14px;
}
</style>
