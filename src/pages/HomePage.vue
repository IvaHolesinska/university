<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import Card from "../components/Card.vue";
import { useDomainData } from "./helpers.js";

const store = useStore();
const isSwitchOn = ref(false);
const showPassword = ref(false);

const {
  authInfo,
  eventsData,
  flagsData,
  ownerInfoData,
  nssetData,
  keysetData,
  domainDetailData,
} = useDomainData(store, isSwitchOn);
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-card flat color="transparent">
          <v-card-title class="pl-0">{{ domainDetailData.fqdn }}</v-card-title>
          <Switch v-model="isSwitchOn" />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <Card :data-items="authInfo" />
        <Card title="Events" :data-items="eventsData" />
        <Card title="State Flags" :data-items="flagsData" />
      </v-col>
      <v-col cols="12" md="6">
        <Card title="Owner Info" :data-items="ownerInfoData" />
        <Card title="Nsset" :data-items="nssetData" />
        <Card title="Keyset" :data-items="keysetData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
