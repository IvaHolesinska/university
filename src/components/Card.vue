<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  dataItems: {
    type: Array,
    required: true,
  },
});

const renderValue = (value) => {
  if (Array.isArray(value)) {
    return value
      .map(
        (item, index) =>
          `<div key="${index}">${
            typeof item === "object" ? renderNestedObject(item) : item
          }</div>`
      )
      .join("");
  } else if (typeof value === "object" && value !== null) {
    return renderNestedObject(value);
  } else {
    return value;
  }
};

const renderNestedObject = (obj) => {
  return Object.values(obj)
    .map(
      (value, index) => `<div class="nested-item" key="${index}">${value}</div>`
    )
    .join("");
};
</script>

<template>
  <v-card class="mx-auto mt-0 mb-8" color="#f2f2f2" elevation="3">
    <template v-if="title" v-slot:title>
      <span class="text-subtitle-2 font-weight-bold">{{ title }}</span>
    </template>

    <v-card-item class="bg-white pt-4">
      <v-row v-for="item in dataItems" :key="item.label || item.value">
        <v-col cols="3" v-if="item.label">
          <div class="text-p5 font-weight-bold">{{ item.label }}:</div>
        </v-col>
        <v-col>
          <template v-if="item.type === 'button'">
            <v-btn :density="item.value.density" :color="item.value.color">{{
              item.value.text
            }}</v-btn>
          </template>
          <template v-else>
            <div v-html="renderValue(item.value)"></div>
          </template>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<style scoped>
.v-card-item .v-col {
  display: flex;
  align-items: center;
}

.nested-item {
  margin-bottom: 5px;
}
</style>
