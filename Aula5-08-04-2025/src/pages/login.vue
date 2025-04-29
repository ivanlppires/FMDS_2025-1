<template>
  <v-card class="pa-4" outlined>
    <v-card-title>
      <h3>Faça o login com o Google</h3>
    </v-card-title>
    <v-card-text v-if="userStore.isLoggedIn">
      <v-avatar class="mb-2" size="48">
        <img :src="userStore.user.photoURL" alt="User Avatar" />
      </v-avatar>
      <div>
        <strong>{{ userStore.user.displayName }}</strong>
      </div>
      <div>{{ userStore.user.email }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="!userStore.isLoggedIn" variant="outlined" @click="userStore.login" color="primary">
        Login com o Google
      </v-btn>
      <v-btn v-else @click="userStore.logout">Logout</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { useUserStore } from '@/stores/user.js'
const userStore = useUserStore()
</script>