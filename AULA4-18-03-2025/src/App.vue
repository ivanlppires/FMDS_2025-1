<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>Controle de Clientes</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container><router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '@/components/Menu.vue'
const drawer = ref(null)
</script>