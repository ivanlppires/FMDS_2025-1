<!-- eslint-disable  -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <Menu v-if="userStore.isLoggedIn" />
      <template #append>
        <div class="pa-2">
          <v-btn block to="/login">
            Login
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-app-bar-title>IntelliSystem</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import Menu from '@/components/Menu.vue'
import { useUserStore } from '@/stores/user.js'

const drawer = ref(null)
const userStore = useUserStore()
</script>
