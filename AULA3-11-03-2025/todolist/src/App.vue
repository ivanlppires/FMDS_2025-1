<template>
  <Login color="red" v-if="!isAuthenticated" @authenticated="login" />
  <TodoList color="blue" v-else @authenticated="login" />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import Login from './components/Login.vue';
import TodoList from './components/TodoList.vue';
const isAuthenticated = ref(false);
const login = (value) => {
  isAuthenticated.value = value;
  document.cookie = `isAuthenticated=${value}`;
};
onMounted(() => {
  const result = document.cookie.split(';').find(e => e.startsWith('isAuthenticated'))
  if (result) {
    isAuthenticated.value = result.split('=')[1] === 'true';
  }
  console.log('Executando onMounted para verificar o cookie. Valor:', result);
});
</script>
