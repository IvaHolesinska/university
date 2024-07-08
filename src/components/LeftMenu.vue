<script>
export default {
  data: () => ({
    drawer: true,
    clipped: true,
    items: [{ text: "Registry", icon: "mdi-earth" }],
  }),
};
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    permanent
    width="200"
    class="drawer"
  >
    <v-list density="compact">
      <v-list-subheader class="list-subheader">Applications</v-list-subheader>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        class="list-item"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.drawer {
  background: white;
  color: black;
  border-right: 1px solid rgb(233, 230, 230);
}

.list-subheader {
  color: black;
}

.list-item {
  background: #ffc64d;
}
</style>
