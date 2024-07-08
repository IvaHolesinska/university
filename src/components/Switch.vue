<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "Verbose view",
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["update:modelValue"]);

const toggleSwitch = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<template>
  <v-switch
    v-model="props.modelValue"
    @change="toggleSwitch"
    :label="label"
    color="primary"
  ></v-switch>
</template>

<style scoped></style>
