<template>
  <Login color="red" v-if="!isAuthenticated" @authenticated="login" />
  <TodoList color="blue" v-else @authenticated="login" />
</template>
<script setup>
import { ref } from 'vue';
import Login from './components/Login.vue';
import TodoList from './components/TodoList.vue';
const isAuthenticated = ref(false);
const login = (value) => {
  isAuthenticated.value = value;
};
</script>
